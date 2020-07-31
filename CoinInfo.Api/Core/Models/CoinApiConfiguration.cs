namespace CoinInfo.Api.Core.Models
{
    public class CoinApiConfiguration
    {
        public CoinApiSettings CoinApi { get; set; }
        public CoinApiSettings CoinMarketCap { get; set; }
        public CoinApiSettings CryptoCompare { get; set; }
    }
}
