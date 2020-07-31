using System.Collections.Generic;

namespace CoinInfo.Api.Core.Models
{
    public class CoinExchangeRate
    {
        public string Coin { get; set; }
        public List<ExchangeRate> Rates { get; set; }
    }
}
