using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using BlockDX.Api.Controllers.ViewModels;
using BlockDX.Api.Core.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace BlockDX.Api.Controllers
{
    [ApiController]
    [Route("api/dx")]
    public class BlockDXController : ControllerBase
    {
        private readonly ILogger<BlockDXController> _logger;
        private readonly IHttpClientFactory _httpClientFactory; 

        public BlockDXController(ILogger<BlockDXController> logger, IHttpClientFactory httpClientFactory)
        {
            _logger = logger;
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetOneDayTradedPairs()
        {
            return Ok();
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetOneDayTotalTradesCount()
        {
            var assetWhiteList = await GetBlockDXAssets();
            var request = new XCloudServiceRequestViewModel
            {
                Service = "xrs::dxGet24hrTradeHistory",
                Parameters = new object[] { "0" },
                NodeCount = 1
            };
            var tradeHistoryResponse = await ServiceAsync<XCloudServiceResponse<List<DXAtomicSwap>>>(request);

            var tradeHistories = tradeHistoryResponse.Reply
                .Where(p =>
                {
                    var trade = new List<string> { p.Maker, p.Taker };
                    var result = trade.All(ta => assetWhiteList.Select(awl => awl.Ticker).Contains(ta));
                    return result;
                })
                .ToList();

            return Ok(tradeHistories.Count);
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetOneDayTotalVolume([FromQuery] string token, [FromQuery]List<string> units) 
        {
            if (string.IsNullOrEmpty(token))
                return BadRequest("No token specified");
            if (units.Count == 0)
                return BadRequest("No units specified");

            var assetWhiteList = await GetBlockDXAssets();

            var request = new XCloudServiceRequestViewModel
            {
                Service = "xrs::dxGet24hrTradeSummary",
                Parameters = new object[] { token },
                NodeCount = 1
            };
            var tradeSummaryResponse = await ServiceAsync<XCloudServiceResponse<List<Dictionary<string, DXTradePair>>>>(request);

            if (tradeSummaryResponse.Reply == null)
            {
                
                var responseMessage = new HttpResponseMessage();
                responseMessage.Content = new StringContent("Error at XCloud Service " + request.Service + ". Parameters: " + request.Parameters + ".");
                responseMessage.StatusCode = HttpStatusCode.InternalServerError;
                return StatusCode(StatusCodes.Status500InternalServerError, responseMessage);
            }
            var trades = tradeSummaryResponse.Reply
                .Where(p =>
                {
                    var tradedAssets = new HashSet<string>();

                    foreach (var item in p.Keys)
                    {
                        tradedAssets.Add(item.Split('-')[0]);
                    }

                    var result = tradedAssets.All(ta => assetWhiteList.Select(awl => awl.Ticker).Contains(ta));
                    return result;
                })
                .SelectMany(d => d)
                .ToDictionary(e => e.Key, e => e.Value);


            var coins = new HashSet<string>();
            foreach (var item in trades.Keys)
            {
                coins.Add(item.Split('-')[0]);
            }

            var volumes = new List<TokenVolumeViewModel>();

            if (coins.Count == 0)
            {
                foreach (var unit in units)
                {
                    volumes.Add(new TokenVolumeViewModel { Unit = unit, Volume = 0 });
                }
                return Ok(volumes);
            }

            request = new XCloudServiceRequestViewModel
            {
                Service = "xrs::CCMultiPrice",
                Parameters = new object[] { string.Join(",", coins), string.Join(",", units) },
                NodeCount = 1
            };
            var multiPriceResponse = await ServiceAsync<XCloudServiceResponse<Dictionary<string, Dictionary<string, decimal>>>>(request);

            
            foreach (var unit in units)
            {
                volumes.Add(new TokenVolumeViewModel { Unit = unit, Volume = CalculateVolume(unit, multiPriceResponse.Reply, trades) });
            }
            return Ok(volumes);
        }

        public async Task<List<Asset>> GetBlockDXAssets()
        {
            string baseUrl = "https://raw.githubusercontent.com/blocknetdx/blockchain-configuration-files/master/manifest-latest.json";

            var client = _httpClientFactory.CreateClient();

            var getAssetsTask = client.GetStringAsync(baseUrl);
            return JsonConvert.DeserializeObject<List<Asset>>(await getAssetsTask);
        }

        private async Task<T> ServiceAsync<T>(XCloudServiceRequestViewModel request)
        {
            var client = _httpClientFactory.CreateClient("xcloud");

            var content = JsonConvert.SerializeObject(request);
            HttpContent httpContent = new StringContent(content, Encoding.UTF8, "application/json");
            HttpResponseMessage response = await client.PostAsync($"Service", httpContent);

            string result = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<T>(result);
        }

        private decimal CalculateVolume(string unit, Dictionary<string, Dictionary<string, decimal>> coinPrices, Dictionary<string, DXTradePair> tradepairs)
        {
            decimal volume = 0;
            foreach (KeyValuePair<string, DXTradePair> entry in tradepairs)
            {
                var coinOne = entry.Key.Split("-")[0];
                var coinTwo = entry.Key.Split("-")[1];

                var coinPrice = coinPrices[coinOne];

                var price = coinPrice[unit];

                volume += entry.Value.Volume * price;

            }
            return volume;
        }
    }
}
