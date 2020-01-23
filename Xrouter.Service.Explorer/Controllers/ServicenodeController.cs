using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BitcoinLib.ExceptionHandling.Rpc;
using BitcoinLib.RPC.RequestResponse;
using BitcoinLib.Services.Coins.Blocknet;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Xrouter.Service.Explorer.Controllers.ViewModels;
using Xrouter.Service.Explorer.Core;
using Xrouter.Service.Explorer.Core.Models;

namespace Xrouter.Service.Explorer.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    public class ServicenodeController : ControllerBase
    {
        private readonly IServicenodeRepository repository;
        private readonly IUnitOfWork unitOfWork;
        private readonly IBlocknetService blocknetService;

        public ServicenodeController(IServicenodeRepository repository, IBlocknetService blocknetService,  IUnitOfWork unitOfWork)
        {
            this.repository = repository;
            this.blocknetService = blocknetService;
            this.unitOfWork = unitOfWork;
        }
        
        [HttpPost]
        public IActionResult AddServicenode([FromBody]SaveServicenodeViewModel saveServicenodeViewModel)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var serviceNode = new MyServicenode
            {
                Active = saveServicenodeViewModel.Active,
                Address = saveServicenodeViewModel.Address,
                NodePubKey = saveServicenodeViewModel.NodePubKey,
                ApplicationUserId = saveServicenodeViewModel.ApplicationUserId,
                Id = saveServicenodeViewModel.Id,
                Name = saveServicenodeViewModel.Name,
                Ownership = saveServicenodeViewModel.Ownership
            };

            repository.AddServiceNode(serviceNode);
            unitOfWork.Complete();

            return Ok(serviceNode);
        }

        [HttpGet("[action]")]
        public IActionResult GetMyServiceNodes(string id)
        {
            var myServiceNodes = repository.GetServiceNodes(id);

            if (myServiceNodes == null)
                return NotFound();

            var allServiceNodes = blocknetService.serviceNodeList();

            ServiceNodeResponse response;
            foreach (var serviceNode in myServiceNodes)
            {
                response = allServiceNodes.Find(sn => sn.Addr == serviceNode.Address);
                if (response.Status == "ENABLED")
                    serviceNode.Active = true;
                else
                    serviceNode.Active = false;
            }

            unitOfWork.Complete();

            var myServiceNodesViewModel = new List<MyServiceNodeViewModel>();

            foreach (var serviceNode in myServiceNodes)
            {
                var myServiceNodeViewModel = new MyServiceNodeViewModel
                {
                    Ownership = serviceNode.Ownership,
                    Active = serviceNode.Active,
                    Address = serviceNode.Address,
                    Id = serviceNode.Id,
                    Name = serviceNode.Name,
                    ApplicationUserId = serviceNode.ApplicationUserId,
                    
                };
                myServiceNodesViewModel.Add(myServiceNodeViewModel);
            }

            return Ok(myServiceNodesViewModel);
        }

        // [HttpGet("{id}")]
        // public IActionResult GetServiceNode(int id)
        // {
        //     var serviceNode = repository.GetServicenode(id);

        //     if (serviceNode == null)
        //         return NotFound();

        //     var myServiceNodeViewModel = new MyServiceNodeViewModel
        //     {
        //         Ownership = serviceNode.Ownership,
        //         NodePubKey = serviceNode.NodePubKey,
        //         Active = serviceNode.Active,
        //         Address = serviceNode.Address,
        //         Id = serviceNode.Id,
        //         Name = serviceNode.Name,
        //         ApplicationUserId = serviceNode.ApplicationUserId
        //     };

        //     return Ok(myServiceNodeViewModel);
        // }

        [HttpDelete("{id}")]
        public IActionResult RemoveServicenode(int id)
        {
            var serviceNode = repository.GetServicenode(id);

            if (serviceNode == null)
                return NotFound();

            repository.RemoveServiceNode(serviceNode);

            unitOfWork.Complete();

            return Ok(id);
        }

        [HttpGet("[action]")]
        public IActionResult VerifyMessage(string address, string signature, string message)
        {
            bool result;
            try
            {
                result = blocknetService.VerifyMessage(address, signature, message);
            }
            catch (RpcInternalServerErrorException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcError
                {
                    Message = e.Message,
                    Code = e.RpcErrorCode.Value
                });
            }

            return Ok(result);
        }

    }
}