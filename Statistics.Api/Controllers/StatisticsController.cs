using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
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

            var servicenodes = servicenodeService.serviceNodeList();
            var configs = xrouterService.xrShowConfigs();
            var xrouterEnabledServicenodes = servicenodes.Where(sn => configs.Any(c => c.NodePubKey.Equals(sn.SNodeKey))).ToList();

            return Ok(xrouterEnabledServicenodes.Count());
            //var serviceNodeClient = clientFactory.CreateClient("servicenode");
            //var snRequest = new HttpRequestMessage(HttpMethod.Get, "GetServiceNodeList");
            //var snResponse = await serviceNodeClient.SendAsync(snRequest);

            //if (snResponse.IsSuccessStatusCode)
            //{
            //    using var responseStream = await snResponse.Content.ReadAsStreamAsync();
            //    var options = new JsonSerializerOptions()
            //    {
            //        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            //    };
            //    var servicenodes = await JsonSerializer.DeserializeAsync<ServiceNodeQueryResultViewModel<ServiceNodeViewModel>>(responseStream, options);


            //    return Ok(servicenodes.TotalItems);

            //}
            //return StatusCode(500, "Something went wrong");
        }

        [HttpGet("[action]")]
        public IActionResult GetEnterpriseXRouterServiceNodeCount()
        {

            //var xrouterClient = clientFactory.CreateClient("xrouter");
            //var xrRequest = new HttpRequestMessage(HttpMethod.Get, "ShowConfigs");
            //var xrResponse = await xrouterClient.SendAsync(xrRequest);

            //if (xrResponse.IsSuccessStatusCode)
            //{
            //    using var responseStream = await xrResponse.Content.ReadAsStreamAsync();
            //    var options = new JsonSerializerOptions()
            //    {
            //        PropertyNamingPolicy = JsonNamingPolicy.CamelCase
            //    };
            //    var servicenodes = await JsonSerializer.DeserializeAsync<List<ShowConfigsResponse>>(responseStream, options);


            //    return Ok(servicenodes.Count());

            //}
            //return StatusCode(500, "Something went wrong");
            var configs = xrouterService.xrShowConfigs();

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
