using Newtonsoft.Json;
using System.Collections.Generic;

namespace CoinInfo.Api.Core.Models.CryptoCompare
{
    public class CoinList
    {
        public string Response { get; set; }
        public string Message { get; set; }
        public bool HasWarning { get; set; }
        public int Type { get; set; }
        public Dictionary<string, CoinListData> Data { get; set; }
    }

    public class CoinListData
    {
        public int Id { get; set; }
        public string Symbol { get; set; }
        [JsonProperty("partner_symbol")]
        public string PartnerSymbol { get; set; }
        [JsonProperty("data_available_from")]
        public long DataAvailableFrom { get; set; }
    }
}
