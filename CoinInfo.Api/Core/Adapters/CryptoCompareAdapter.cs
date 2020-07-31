using AutoMapper;
using CoinInfo.Api.Core.Interfaces;
using CoinInfo.Api.Core.Models;
using CoinInfo.Api.Core.Models.CryptoCompare;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace CoinInfo.Api.Core.Adapters
{
    public class CryptoCompareAdapter : ICryptoCurrencyApiAdapter
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IOptions<CoinApiConfiguration> _apiSettings;
        private readonly IMapper _mapper;

        public CryptoCompareAdapter(IOptions<CoinApiConfiguration> apiSettings, IHttpClientFactory httpClientFactory, IMapper mapper)
        {
            _httpClientFactory = httpClientFactory;
            _apiSettings = apiSettings;
            _mapper = mapper;
        }
        public List<CoinInformation> GetAllCoins()
        {
            string queryString = "blockchain/list";

            var task = Task.Run(async () => await SendHttpRequestAsync(HttpMethod.Get, queryString));

            var coins = JsonConvert.DeserializeObject<CoinList>(task.Result);

            //TODO: Implement AutoMapper...
            var informationCoins = new List<CoinInformation>();
            foreach (var coin in coins.Data.Values)
            {
                var coinInfo = new CoinInformation
                {
                    Name = coin.Symbol,
                    Symbol = coin.Symbol
                };

                informationCoins.Add(coinInfo);
            }
            return informationCoins;

        }

        public string GetApiName()
        {
            return "CryptoCompare";
        }

        public List<CoinExchangeRate> GetExchangeRates(string coins, string units)
        {
            string queryString = "pricemulti?fsyms=" + coins + "&tsyms=" + units;

            var task = Task.Run(async () => await SendHttpRequestAsync(HttpMethod.Get, queryString));

            var coinInfo = JsonConvert.DeserializeObject<Dictionary<string, Dictionary<string, decimal>>>(task.Result);

            //TODO: Implement AutoMapper...
            var exchangeRates = new List<CoinExchangeRate>();
            foreach (var coin in coinInfo)
            {
                var rates = new List<ExchangeRate>();
                var quotes = coin.Value;
                foreach (var quote in quotes)
                {
                    var rate = new ExchangeRate()
                    {
                        Quote = quote.Key,
                        Rate = quote.Value
                    };
                    rates.Add(rate);
                }

                var exchangeRate = new CoinExchangeRate
                {
                    Coin = coin.Key,
                    Rates = rates
                };

                exchangeRates.Add(exchangeRate);
            }
            return exchangeRates;
        }

        private async Task<string> SendHttpRequestAsync(HttpMethod httpMethod, string queryString)
        {
            var client = _httpClientFactory.CreateClient("CryptoCompare");

            string url = queryString;

            var httpRequest = new HttpRequestMessage(httpMethod, url);

            httpRequest.Headers.Add("Authorization", "Apikey " + _apiSettings.Value.CryptoCompare.Key);

            var response = await client.SendAsync(httpRequest);

            return await response.Content.ReadAsStringAsync();
        }
    }
}
