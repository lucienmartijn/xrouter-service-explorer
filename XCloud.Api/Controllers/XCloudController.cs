using System;
using System.Collections.Generic;
using System.Linq;
using BlocknetLib.ExceptionHandling.Rpc;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using XCloud.Api.Controllers.ViewModel;
using XCloud.Api.Controllers.ViewModels;
using XRouter.Api.Controllers.ViewModels;

namespace XCloud.Api.Controllers
{
    [Route("api/xrs")]
    public class XCloudController : ControllerBase 
    {
        private readonly IXCloudService xcloudService;
        public XCloudController(IXCloudService xcloudService){
            this.xcloudService = xcloudService;
        }
        
        [HttpPost("[action]")]
        public IActionResult Service([FromBody]ServiceRequestViewModel request)
        {
            if(request == null)
                return BadRequest("No service request supplied");

            var serviceResponse = xcloudService.xrService(request.Service, request.Parameters);

            if (serviceResponse.Error != null)
                return Ok(new ErrorResponseViewModel
                {
                    Error = serviceResponse.Error,
                    Code = serviceResponse.Code,
                    Id = serviceResponse.Id
                });

            return Ok(new ServiceResponseViewModel
            {
                Reply = serviceResponse.Reply,
                Uuid = serviceResponse.Uuid
            });
        }     
    }
}
