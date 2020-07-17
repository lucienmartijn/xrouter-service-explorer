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

            var allCoins = await GetAllCoins();

            if(cloudChainsCoins.Error != null)
                return BadRequest(cloudChainsCoins.Error.ToString());


            var availableCoins = cloudChainsCoins.Result.Keys.Select(coinTicker =>
            {
                var coin = allCoins.Find(ac => ac.Symbol.Equals(coinTicker.ToLower()));

                return new AvailableCloudChainsCoin
                {
                    Name = coin.Name,
                    Ticker = coinTicker
                };
            });

            var request = new ServiceRequestViewModel
            {
                Service = "xrs::CCMultiPrice",
                Parameters = new object[] { string.Join(",", availableCoins.Select(ac => ac.Ticker.ToUpper()).ToList()), "BLOCK" },
                NodeCount = 1
            };
            var multiPriceResponse = await ServiceAsync<ServiceResponseViewModel<Dictionary<string, Dictionary<string, decimal>>>>(request);

            availableCoins = availableCoins.Select(ac =>
            {
                if (multiPriceResponse.Reply.ContainsKey(ac.Ticker))
                    ac.Price = multiPriceResponse.Reply[ac.Ticker]["BLOCK"];

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

        private async Task<List<CoinGeckoCoinViewModel>> GetAllCoins()
        {
            string baseUrl = "https://api.coingecko.com/api/v3/coins/list";

            var client = _httpClientFactory.CreateClient();

            var getCoinsTask = client.GetStringAsync(baseUrl);
            return JsonConvert.DeserializeObject<List<CoinGeckoCoinViewModel>>(await getCoinsTask);
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