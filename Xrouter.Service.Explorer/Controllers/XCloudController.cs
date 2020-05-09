using System;
using System.Collections.Generic;
using System.Linq;
using BlocknetLib.ExceptionHandling.Rpc;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using blocknet_xrouter.Controllers.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Xrouter.Service.Explorer.Controllers.ViewModels;
using Xrouter.Service.Explorer.Extensions;
using Xrouter.Service.Explorer.Core.Models;

namespace blocknet_xrouter.Controllers
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
            return Ok(xcloudService.xrService(request.Service, request.Parameters));
        }     
    }
}
