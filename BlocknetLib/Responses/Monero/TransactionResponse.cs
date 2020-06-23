using BlocknetLib.Responses.Neo.SharedComponents;
using Newtonsoft.Json;

namespace BlocknetLib.Responses.Monero
{
    public class TransactionResponse
    {
        public int Credits { get; set; }
        public string Status { get; set; }
        [JsonProperty("top_hash")]
        public string TopHash { get; set; }
        public Transaction[] Txs { get; set; }
        public string[] TxsAsHex { get; set; }
        public string[] TxsAsJson { get; set; }
        public bool Untrusted { get; set; }
    }
}