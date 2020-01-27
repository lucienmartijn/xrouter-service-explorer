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
using Xrouter.Service.Explorer.Authorization;
using Xrouter.Service.Explorer.Controllers.ViewModels;
using Xrouter.Service.Explorer.Core;
using Xrouter.Service.Explorer.Core.Models;

namespace Xrouter.Service.Explorer.Controllers
{
    [Route("api/[controller]")]
    public class MyServicenodeController : ControllerBase
    {
        private readonly IServicenodeRepository repository;
        private readonly IUnitOfWork unitOfWork;
        private readonly IBlocknetService blocknetService;
        private readonly IAuthorizationService authorizationService;

        public MyServicenodeController(IServicenodeRepository repository, IBlocknetService blocknetService,  IUnitOfWork unitOfWork, IAuthorizationService authorizationService)
        {
            this.repository = repository;
            this.blocknetService = blocknetService;
            this.unitOfWork = unitOfWork;
            this.authorizationService = authorizationService;
        }
        
        [HttpPost]
        public async Task<IActionResult> AddServicenode([FromBody]SaveServicenodeViewModel saveServicenodeViewModel)
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

            var authorizationResult = await authorizationService.AuthorizeAsync(User, serviceNode, Operations.Create);

            if (authorizationResult.Succeeded)
            {
                repository.AddServiceNode(serviceNode);
                unitOfWork.Complete();
                return Ok(serviceNode);
            }
            else if (User.Identity.IsAuthenticated)
            {
                return new ForbidResult();
            }
            else
            {
                return new ChallengeResult();
            }
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetMyServiceNodes(string id)
        {
            var myServiceNodes = repository.GetServiceNodes(id);

            if (myServiceNodes == null)
                return NotFound();

            var authorizationResult = await authorizationService.AuthorizeAsync(User, myServiceNodes.FirstOrDefault(), "EditPolicy");

            if (authorizationResult.Succeeded)
            {
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
            else if (User.Identity.IsAuthenticated)
            {
                return new ForbidResult();
            }
            else
            {
                return new ChallengeResult();
            }


        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveServicenode(int id)
        {
            var serviceNode = repository.GetServicenode(id);

            var authorizationResult = await authorizationService.AuthorizeAsync(User, serviceNode, Operations.Delete);

            if (authorizationResult.Succeeded)
            {
                if (serviceNode == null)
                    return NotFound();

                repository.RemoveServiceNode(serviceNode);

                unitOfWork.Complete();

                return Ok(id);
            }
            else if (User.Identity.IsAuthenticated)
            {
                return new ForbidResult();
            }
            else
            {
                return new ChallengeResult();
            }
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

    }
}