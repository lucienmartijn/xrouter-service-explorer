using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using BlocknetLib.ExceptionHandling.Rpc;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using XCloud.Api.Controllers.ViewModel;
using XCloud.Api.Controllers.ViewModels;
using XRouter.Api.Controllers.ViewModels;
using XRouter.Api.Controllers.ViewModels.BitcoinBased;

namespace XCloud.Api.Controllers
{
    [Route("api/xrs")]
    public class XCloudController : ControllerBase 
    {
        private readonly IXCloudService _xcloudService;
        private readonly IHttpClientFactory _httpClientFactory;
        public XCloudController(IXCloudService xcloudService, IHttpClientFactory httpClientFactory)
        {
            this._xcloudService = xcloudService;
            _httpClientFactory = httpClientFactory;
        }

        [HttpPost("[action]")]
        public IActionResult Service([FromBody]ServiceRequestViewModel request)
        {
            if(request == null)
                return BadRequest("No service request supplied");

            var serviceResponse = _xcloudService.xrService(request.Service, request.Parameters);

            return Ok(new ServiceResponseViewModel<object>
            {
                Reply = serviceResponse.Reply,
                Uuid = serviceResponse.Uuid
            });
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> ServiceEnterprise([FromBody]EnterpriseServiceRequestViewModel request)
        {
            var httpClient = _httpClientFactory.CreateClient();

            var url = request.Endpoint + "/xrs/" + request.Service.Replace("xrs::", "");

            var httpRequest = new HttpRequestMessage(HttpMethod.Post, url);

            httpRequest.Headers.Add("XR-Signature", request.Signature);
            httpRequest.Headers.Add("XR-Pubkey", request.NodePubKey);
            httpRequest.Headers.Add("XR-Payment", request.RawTxHex);

            var content = JsonConvert.SerializeObject(request.Params);

            HttpContent httpContent = new StringContent(content, Encoding.UTF8, "application/json");
            httpRequest.Content = httpContent;
            
            var response = await httpClient.SendAsync(httpRequest);

            if (response.IsSuccessStatusCode)
            {
                var responseStream = await response.Content.ReadAsStringAsync();
                
                var result = JsonConvert.DeserializeObject<object>(responseStream);
                return Ok(result);
            }

            return new StatusCodeResult(StatusCodes.Status500InternalServerError);
        }
    }
}
