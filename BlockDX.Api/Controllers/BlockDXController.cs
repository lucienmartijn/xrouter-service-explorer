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
using XCloud.Api.Controllers.ViewModel;
using XCloud.Api.Controllers.ViewModels;

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

            var tradeHistoryResponse = await GetOneDayTradeHistory();

            var tradeHistories = tradeHistoryResponse
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

            var tradeHistoryResponse = await GetOneDayTradeHistory();

            var tradeStatisticsTokens = new List<TokenTradeStatistics>();

            if (tradeHistoryResponse.Count == 0)
                return tradeStatisticsTokens;

            var tradeHistories = tradeHistoryResponse
                .Where(p =>
                {
                    var trade = new List<string> { p.Maker, p.Taker };
                    var result = trade.All(ta => assetWhiteList.Select(awl => awl.Ticker).Contains(ta));
                    return result;
                })
                .ToList();

            var coins = tradeHistoryResponse.Select(r => r.Maker).Distinct().ToList();

            var unitSet = units.Union(coins).Distinct().ToList();

            var request = new ServiceRequestViewModel
            {
                Service = "xrs::CCMultiPrice",
                Parameters = new object[] { string.Join(",", coins), string.Join(",", unitSet) },
                NodeCount = 1
            };
            var multiPriceResponse = await ServiceAsync<ServiceResponseViewModel<Dictionary<string, Dictionary<string, decimal>>>>(request);

            foreach (var coin in coins)
            {
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
                        Volume = (sumMaker) * coinPrice
                    });
                }
                var countCoinTrades = tradeHistories.Count(th => th.Maker.Equals(coin));
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
        public async Task<IActionResult> GetOneDayTotalVolume([FromQuery] string coin, [FromQuery]List<string> units) 
        {
            if (string.IsNullOrEmpty(coin))
                return BadRequest("No coins specified");
            if (units.Count == 0)
                return BadRequest("No units specified");

            var oneDayTotalVolumePerCoin = await getOneDayTotalVolumePerCoin(units);

            var totalVolumePerUnit = new List<TokenVolumeViewModel>();

            if (!oneDayTotalVolumePerCoin.Any(vc => vc.Token.Equals(coin)) && !coin.Equals("0"))
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

        [HttpGet("[action]")]
        public async Task<IActionResult> GetOneDayCompletedOrders()
        {
            var assetWhiteList = await GetBlockDXAssets();

            var tradeHistoryResponse = await GetOneDayTradeHistory();

            var tradeStatisticsTokens = new List<TokenTradeStatistics>();

            var tradeHistories = tradeHistoryResponse
                .Where(p =>
                {
                    var trade = new List<string> { p.Maker, p.Taker };
                    var result = trade.All(ta => assetWhiteList.Select(awl => awl.Ticker).Contains(ta));
                    return result;
                })
                .ToList();

            var coins = tradeHistoryResponse
                .SelectMany(coin => new[] { coin.Taker, coin.Maker })
                .GroupBy(c => c).Select(group => new {
                    Coin = group.Key,
                    Count = group.Count()
                })
                .ToList();

            return Ok(coins);

        }

        private async Task<List<DXAtomicSwap>> GetOneDayTradeHistory()
        {
            string baseUrl = "https://data.blocknet.co/api/v2.0/history";

            var client = _httpClientFactory.CreateClient();

            var getTradeHistoryTask = client.GetStringAsync(baseUrl);
            return JsonConvert.DeserializeObject<List<DXAtomicSwap>>(await getTradeHistoryTask);
        }

        private async Task<List<Asset>> GetBlockDXAssets()
        {
            string baseUrl = "https://raw.githubusercontent.com/blocknetdx/blockchain-configuration-files/master/manifest-latest.json";

            var client = _httpClientFactory.CreateClient();

            var getAssetsTask = client.GetStringAsync(baseUrl);
            var assets = JsonConvert.DeserializeObject<List<Asset>>(await getAssetsTask);

            var BCHAsset = new Asset() { Ticker = "BCH" };
            assets.Add(BCHAsset);

            return assets;

        }

        private async Task<T> ServiceAsync<T>(ServiceRequestViewModel request)
        {
            var client = _httpClientFactory.CreateClient("xcloud");

            var content = JsonConvert.SerializeObject(request);
            HttpContent httpContent = new StringContent(content, Encoding.UTF8, "application/json");
            HttpResponseMessage response = await client.PostAsync($"Service", httpContent);

            string result = await response.Content.ReadAsStringAsync();
            return JsonConvert.DeserializeObject<T>(result);
        }
    }
}
