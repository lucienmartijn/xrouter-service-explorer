using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlocknetLib.ExceptionHandling.Rpc;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.Services.Coins.Blocknet;
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
        private readonly IServicenodeService servicenodeService;
        private readonly IAuthorizationService authorizationService;

        public MyServicenodeController(
            IServicenodeRepository repository, 
            IServicenodeService servicenodeService,  
            IUnitOfWork unitOfWork, 
            IAuthorizationService authorizationService)
        {
            this.repository = repository;
            this.servicenodeService = servicenodeService;
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
                Status = saveServicenodeViewModel.Status,
                Address = saveServicenodeViewModel.Address,
                SNodeKey = saveServicenodeViewModel.SNodeKey,
                ApplicationUserId = saveServicenodeViewModel.ApplicationUserId,
                Id = saveServicenodeViewModel.Id,
                Name = saveServicenodeViewModel.Name,
                Ownership = saveServicenodeViewModel.Ownership
            };

            var authorizationResult = await authorizationService.AuthorizeAsync(User, serviceNode, "CanCrudOwnServicenode");

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
            
            if(myServiceNodes.Count == 0)
                return Ok(CreateMyServiceNodeViewModel(myServiceNodes));

            var authorizationResult = await authorizationService.AuthorizeAsync(User, myServiceNodes.FirstOrDefault(), "CanCrudOwnServicenode");

            if (authorizationResult.Succeeded)
            {
                var allServiceNodes = servicenodeService.serviceNodeList();

                // ServiceNodeInfoResponse response;
                // foreach (var serviceNode in myServiceNodes)
                // {
                //     response = allServiceNodes.Find(sn => sn.Address == serviceNode.Address);
                // }

                unitOfWork.Complete();

                var myServiceNodesViewModel = CreateMyServiceNodeViewModel(myServiceNodes);

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

        private List<MyServiceNodeViewModel> CreateMyServiceNodeViewModel(List<MyServicenode> myServicenodes)
        {
             var myServiceNodesViewModel = new List<MyServiceNodeViewModel>();

                foreach (var serviceNode in myServicenodes)
                {
                    var myServiceNodeViewModel = new MyServiceNodeViewModel
                    {
                        Ownership = serviceNode.Ownership,
                        Status = serviceNode.Status,
                        Address = serviceNode.Address,
                        Id = serviceNode.Id,
                        Name = serviceNode.Name,
                        ApplicationUserId = serviceNode.ApplicationUserId,
                    };
                    myServiceNodesViewModel.Add(myServiceNodeViewModel);
                }
                return myServiceNodesViewModel;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveServicenode(int id)
        {
            var serviceNode = repository.GetServicenode(id);

            var authorizationResult = await authorizationService.AuthorizeAsync(User, serviceNode, "CanCrudOwnServicenode");

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
                result = servicenodeService.VerifyMessage(address, signature, message);
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

        [HttpPut("{id}")]
        public IActionResult UpdateServiceNode(int id, [FromBody]MyServicenode myServicenode)
        {
            var serviceNode = repository.GetServicenode(id);
            serviceNode.SNodeKey = myServicenode.SNodeKey;
            serviceNode.Ownership = myServicenode.Ownership;
            serviceNode.Status = myServicenode.Status;
            unitOfWork.Complete();
            return Ok(serviceNode);
        }

        [HttpGet("[action]")]
        public IActionResult IsServiceNodeVerified(string sNodeKey)
        {
            var serviceNode = repository.GetServicenode(sNodeKey);

            if(serviceNode == null) return Ok(false);
            return Ok(serviceNode.Ownership);
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