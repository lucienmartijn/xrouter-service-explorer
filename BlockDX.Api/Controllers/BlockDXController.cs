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
        public async Task<IActionResult> GetOneDayTotalVolumePerCoin([FromQuery]List<string> units)
        {
            if (units.Count == 0)
                return BadRequest("No units specified");

            return Ok(await getOneDayTotalVolumePerCoin(units));
        }

        private async Task<List<TokenTradeStatistics>> getOneDayTotalVolumePerCoin(List<string> units)
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

            var coins = new HashSet<string>();
            foreach (var item in tradeHistoryResponse.Reply)
            {
                coins.Add(item.Maker);
                coins.Add(item.Taker);
            }

            var unitSet = new HashSet<string>(units);
            foreach (var coin in coins)
            {
                unitSet.Add(coin);
            }

            request = new XCloudServiceRequestViewModel
            {
                Service = "xrs::CCMultiPrice",
                Parameters = new object[] { string.Join(",", coins), string.Join(",", unitSet) },
                NodeCount = 1
            };
            var multiPriceResponse = await ServiceAsync<XCloudServiceResponse<Dictionary<string, Dictionary<string, decimal>>>>(request);

            var tradeStatisticsTokens = new List<TokenTradeStatistics>();

            foreach (var coin in coins)
            {
                var sumTaker = tradeHistories.Where(th => th.Taker.Equals(coin)).Sum(th => th.TakerSize);
                var sumMaker = tradeHistories.Where(th => th.Maker.Equals(coin)).Sum(th => th.MakerSize);

                var tokenVolumesPerUnit = new List<TokenVolumeViewModel>();

                var unitsOfCoin = new HashSet<string>(units);
                unitsOfCoin.Add(coin);
                foreach (var unit in unitsOfCoin)
                {
                    var coinPrice = multiPriceResponse.Reply[coin][unit];
                    tokenVolumesPerUnit.Add(new TokenVolumeViewModel
                    {
                        Unit = unit,
                        Volume = (sumTaker + sumMaker) * coinPrice
                    });
                }
                var countCoinTrades = tradeHistories.Count(th => th.Taker.Equals(coin) || th.Maker.Equals(coin));
                tradeStatisticsTokens.Add(new TokenTradeStatistics
                {
                    Token = coin,
                    TradeCount = countCoinTrades,
                    Volumes = tokenVolumesPerUnit
                });
            }
            return tradeStatisticsTokens;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetOneDayTotalVolume([FromQuery] string token, [FromQuery]List<string> units) 
        {
            if (string.IsNullOrEmpty(token))
                return BadRequest("No token specified");
            if (units.Count == 0)
                return BadRequest("No units specified");

            var oneDayTotalVolumePerCoin = await getOneDayTotalVolumePerCoin(units);

            var totalVolumePerUnit = new List<TokenVolumeViewModel>();

            if (!oneDayTotalVolumePerCoin.Any(vc => vc.Token.Equals(token)) && !token.Equals("0"))
            {
                foreach (var unit in units)
                {
                    totalVolumePerUnit.Add(new TokenVolumeViewModel
                    {
                        Unit = unit,
                        Volume = 0
                    });
                }
                return Ok(totalVolumePerUnit);
            }
            
            foreach (var unit in units)
            {
                var sumVolume = oneDayTotalVolumePerCoin.Sum(vc => vc.Volumes.Where(vc => vc.Unit.Equals(unit)).Sum(vc => vc.Volume));

                totalVolumePerUnit.Add(new TokenVolumeViewModel
                {
                    Unit = unit,
                    Volume = sumVolume
                });
            }

            return Ok(totalVolumePerUnit);
        }

        private async Task<List<Asset>> GetBlockDXAssets()
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
