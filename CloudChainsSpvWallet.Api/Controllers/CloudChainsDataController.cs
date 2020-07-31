using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using CloudChainsSpvWallet.Api.Controllers.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using XCloud.Api.Controllers.ViewModel;
using XCloud.Api.Controllers.ViewModels;

namespace CloudChainsSpvWallet.Api.Controllers
{
    [Route("api/ccdata")]
    [ApiController]
    public class CloudChainsDataController : ControllerBase
    {
        private readonly IHttpClientFactory _httpClientFactory;
        public CloudChainsDataController(IHttpClientFactory httpClientFactory)
        {
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> GetAvailableCoins()
        {
            var cloudChainsCoins = await GetCloudChainsCoins();

            var client = _httpClientFactory.CreateClient("coininfo");

            var allCoinsTask = client.GetStringAsync("GetAllCoins");

            var allCoinsResponse = JsonConvert.DeserializeObject<List<CoinAPI.REST.V1.ExchangeCurrentrate>>(await allCoinsTask);

            if (cloudChainsCoins.Error != null)
                return BadRequest(cloudChainsCoins.Error.ToString());


            var availableCoins = cloudChainsCoins.Result.Keys.Select(coinTicker =>
            {
                var coin = allCoinsResponse.Find(ac => ac.asset_id_base.Equals(coinTicker.ToUpper()));

                return new AvailableCloudChainsCoin
                {
                    Name = coin.asset_id_base,
                    Ticker = coinTicker
                };
            }).ToList();

            var coins = availableCoins.Select(ac => ac.Name.ToLower()).ToList();

            string queryString = "GetCryptoCurrencyPrices?coins=" + string.Join(",", coins) + "&units=BLOCK";

            var multiPriceTask = client.GetStringAsync(queryString);

            var multiPriceResponse = JsonConvert.DeserializeObject<List<CoinAPI.REST.V1.ExchangeCurrentrate>>(await multiPriceTask);

            availableCoins.Select(ac =>
            {
                if(multiPriceResponse.Select(mr => mr.asset_id_base).Contains(ac.Ticker))
                {
                    var priceCoin = multiPriceResponse.SingleOrDefault(mr => mr.asset_id_base.Equals(ac.Ticker));
                    var rate = priceCoin.rates.SingleOrDefault(r => r.asset_id_quote.Equals(ac.Ticker) && r.asset_id_quote.Equals("BLOCK"));
                    ac.Price = rate.rate;
                }
                return ac;
            }).ToList();

            return Ok(availableCoins);
        }
        private async Task<CloudChainCoinViewModel> GetCloudChainsCoins()
        {
            string baseUrl = "https://plugin-api.core.cloudchainsinc.com/height";

            var client = _httpClientFactory.CreateClient();

            var getCoinsTask = client.GetStringAsync(baseUrl);

            return JsonConvert.DeserializeObject<CloudChainCoinViewModel>(await getCoinsTask);
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