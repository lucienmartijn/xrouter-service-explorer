using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using BlocknetLib.ExceptionHandling.Rpc;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Statistics.Api.Controllers
{
    [Route("api/stats")]
    public class StatisticsController : ControllerBase 
    {
        private readonly IXRouterService xrouterService;
        private readonly IServicenodeService servicenodeService;
        public StatisticsController(IXRouterService xrouterService, IServicenodeService servicenodeService)
        {
            this.xrouterService = xrouterService;
            this.servicenodeService = servicenodeService;

            //this.clientFactory = clientFactory;
        }

        [HttpGet("[action]")]
        public IActionResult GetServiceNodeCount()
        {
            List<ServiceNodeInfoResponse> servicenodes;
            List<ShowConfigsResponse> configs;
            try
            {
                servicenodes = servicenodeService.serviceNodeList();
                configs = xrouterService.xrShowConfigs();
            }
            catch (RpcInternalServerErrorException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError
                {
                    Error = e.Message,
                    Code = (int)e.RpcErrorCode.Value
                });
            }
            catch (RpcRequestTimeoutException e)
            {
                return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcXrError
                {
                    Error = e.Message,
                });
            }
            var xrouterEnabledServicenodes = servicenodes.Where(sn => configs.Any(c => c.NodePubKey.Equals(sn.SNodeKey))).ToList();

            return Ok(xrouterEnabledServicenodes.Count());
        }

        [HttpGet("[action]")]
        public IActionResult GetEnterpriseXRouterServiceNodeCount()
        {
            List<ShowConfigsResponse> configs;
            try
            {
                configs = xrouterService.xrShowConfigs();
            }
            catch (RpcInternalServerErrorException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError
                {
                    Error = e.Message,
                    Code = (int)e.RpcErrorCode.Value
                });
            }
            catch (RpcRequestTimeoutException e)
            {
                return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcXrError
                {
                    Error = e.Message,
                });
            }

            var enterpriseServiceNodes = configs.Where(c =>
            {
                var serviceNodeConfigElements = c.Config.Split(new string[] { "\n", "\r\n" }, StringSplitOptions.RemoveEmptyEntries)
                        .Select(value => value.Split('=')).ToList();

                if (serviceNodeConfigElements.Any(lc => lc[0] == "port"))
                {
                    return serviceNodeConfigElements.FirstOrDefault(e => e[0] == "port")[1] != "41412";
                }
                return false;
            });

            return Ok(enterpriseServiceNodes.Count());
        }
    }
}
