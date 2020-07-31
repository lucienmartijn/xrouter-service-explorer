using AutoMapper;
using CoinInfo.Api.Core.Interfaces;
using CoinInfo.Api.Core.Models;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace CoinInfo.Api.Core.Adapters
{
    public class CoinApiAdapter : ICryptoCurrencyApiAdapter
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IOptions<CoinApiConfiguration> _apiSettings;
        private readonly IMapper _mapper;
        public CoinApiAdapter(IOptions<CoinApiConfiguration> apiSettings, IHttpClientFactory httpClientFactory, IMapper mapper)
        {
            _httpClientFactory = httpClientFactory;
            _apiSettings = apiSettings;
            _mapper = mapper;
        }
        public List<CoinInformation> GetAllCoins()
        {
            string queryString = "assets";

            var task = Task.Run(async () => await SendHttpRequestAsync(HttpMethod.Get, queryString));

            var coinInfo = JsonConvert.DeserializeObject<List<CoinAPI.REST.V1.Asset>>(task.Result);


            // TODO: Implement AutoMapper...
            return coinInfo.Select(c => new CoinInformation
            {
                Name = c.name,
                Symbol = c.asset_id
            }).ToList();
        }

        public string GetApiName()
        {
            return "CoinApi";
        }

        public List<CoinExchangeRate> GetExchangeRates(string coins, string units)
        {
            var activeTasks = new List<Task<string>>();
            string queryString = string.Empty;
            foreach (var coin in coins.Split(","))
            {
                queryString = "exchangerate/" + coin + "?filter_asset_id=" + units;
                activeTasks.Add(SendHttpRequestAsync(HttpMethod.Get, queryString));
            }

            Task.WhenAll(activeTasks).Wait();

            var exchangeRates = activeTasks.Select(t => JsonConvert.DeserializeObject<CoinAPI.REST.V1.ExchangeCurrentrate>(t.Result)).ToList();

            return _mapper.Map<List<CoinExchangeRate>>(exchangeRates);
        }

        private async Task<string> SendHttpRequestAsync(HttpMethod httpMethod, string queryString)
        {
            var client = _httpClientFactory.CreateClient("CoinApi");

            string url = queryString;

            var httpRequest = new HttpRequestMessage(httpMethod, url);

            httpRequest.Headers.Add("X-CoinAPI-Key", _apiSettings.Value.CoinApi.Key);

            var response = await client.SendAsync(httpRequest);

            return await response.Content.ReadAsStringAsync();
        }
    }
}
