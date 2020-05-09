using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using BlocknetLib.ExceptionHandling.Rpc;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.Services.Coins.Base;
using BlocknetLib.Services.Coins.Blocknet;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using blocknet_xrouter.Controllers.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Xrouter.Service.Explorer.Controllers.ViewModels;
using Xrouter.Service.Explorer.Extensions;
using Xrouter.Service.Explorer.Core.Models;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum;

namespace blocknet_xrouter.Controllers
{
    [Route("api/stats")]
    public class StatisticsController : ControllerBase 
    {
        private readonly IXRouterService xrouterService;
        private readonly IServicenodeService servicenodeService;
        public StatisticsController(IXRouterService xrouterService, IServicenodeService servicenodeService){
            this.xrouterService = xrouterService;
            this.servicenodeService = servicenodeService;
        }

        
        [HttpGet("[action]")]
        public IActionResult GetServiceNodeCount()
        {
            var servicenodes = servicenodeService.serviceNodeList();
            var configs = xrouterService.xrShowConfigs();
            var xrouterEnabledServicenodes = servicenodes.Where(sn => configs.Any(c => c.NodePubKey.Equals(sn.SNodeKey))).ToList();

            return Ok(xrouterEnabledServicenodes.Count());
        }

        [HttpGet("[action]")]
        public IActionResult GetEnterpriseXRouterServiceNodeCount()
        {

            var configs = xrouterService.xrShowConfigs();

            var enterpriseServiceNodes = configs.Where(c => 
            {
                var serviceNodeConfigElements = c.Config.Split(new string[] { "\n", "\r\n" }, StringSplitOptions.RemoveEmptyEntries)
                        .Select(value => value.Split('=')).ToList();
                
                if(serviceNodeConfigElements.Any(lc => lc[0] == "port"))
                {
                    return serviceNodeConfigElements.FirstOrDefault(e => e[0] == "port")[1] != "41412";
                }
                return false;
            });


            return Ok(enterpriseServiceNodes.Count());
        }
    }
}
