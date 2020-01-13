using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
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

        public ServicenodeController(IServicenodeRepository repository, IUnitOfWork unitOfWork)
        {
            this.repository = repository;
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
                ApplicationUserId = saveServicenodeViewModel.ApplicationUserId,
                Id = saveServicenodeViewModel.Id,
                Name = saveServicenodeViewModel.Name,
                NodePubKey = saveServicenodeViewModel.NodePubKey,
                Ownership = saveServicenodeViewModel.Ownership
            };

            repository.AddServiceNode(serviceNode);
            unitOfWork.Complete();

            return Ok(serviceNode.Id);
        }

        [HttpGet("{id}")]
        public IActionResult GetServiceNodes(string id)
        {
            var serviceNodes = repository.GetServiceNodes(id);

            if (serviceNodes == null)
                return NotFound();

            var myServiceNodesViewModel = new List<MyServiceNodeViewModel>();

            foreach (var serviceNode in serviceNodes)
            {
                var myServiceNodeViewModel = new MyServiceNodeViewModel
                {
                    Ownership = serviceNode.Ownership,
                    NodePubKey = serviceNode.NodePubKey,
                    Active = serviceNode.Active,
                    Address = serviceNode.Address,
                    Id = serviceNode.Id,
                    Name = serviceNode.Name,
                    ApplicationUserId = serviceNode.ApplicationUserId
                };
                myServiceNodesViewModel.Add(myServiceNodeViewModel);
            }

            return Ok(myServiceNodesViewModel);
        }

        [HttpGet("{id}")]
        public IActionResult GetServiceNode(int id)
        {
            var serviceNode = repository.GetServicenode(id);

            if (serviceNode == null)
                return NotFound();

            var myServiceNodeViewModel = new MyServiceNodeViewModel
            {
                Ownership = serviceNode.Ownership,
                NodePubKey = serviceNode.NodePubKey,
                Active = serviceNode.Active,
                Address = serviceNode.Address,
                Id = serviceNode.Id,
                Name = serviceNode.Name,
                ApplicationUserId = serviceNode.ApplicationUserId
            };

            return Ok(myServiceNodeViewModel);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteServicenode(int id)
        {
            var serviceNode = repository.GetServicenode(id);

            if (serviceNode == null)
                return NotFound();

            repository.RemoveServiceNode(serviceNode);

            unitOfWork.Complete();

            return Ok(id);
        }
    }
}