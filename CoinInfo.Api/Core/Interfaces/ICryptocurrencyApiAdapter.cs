using CoinInfo.Api.Core.Models;
using System.Collections.Generic;

namespace CoinInfo.Api.Core.Interfaces
{
    public interface ICryptoCurrencyApiAdapter
    {
        string GetApiName();
        List<CoinInformation> GetAllCoins();
        List<CoinExchangeRate> GetExchangeRates(string coins, string units);
    }
}
