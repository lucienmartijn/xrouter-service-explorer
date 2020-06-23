using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels.Monero
{
    public class TransactionResponseViewModel
    {
        public int Credits { get; set; }
        public string Status { get; set; }
        [JsonProperty("top_hash")]
        public string TopHash { get; set; }
        public TransactionViewModel[] Txs { get; set; }
        public string[] TxsAsHex { get; set; }
        public string[] TxsAsJson { get; set; }
        public bool Untrusted { get; set; }
    }
}