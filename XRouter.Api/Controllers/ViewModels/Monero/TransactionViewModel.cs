using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace XRouter.Api.Controllers.ViewModels.Monero
{
    public class TransactionViewModel
    {
        [JsonProperty("as_hex")]
        public string AsHex { get; set; }
        [JsonProperty("as_json")]
        public string AsJson { get; set; }
        [JsonProperty("block_height")]
        public int BlockHeight { get; set; }
        [JsonProperty("block_timestamp")]
        public long BlockTimestamp { get; set; }
        [JsonProperty("double_spend_seen")]
        public bool DoubleSpendSeen { get; set; }
        [JsonProperty("in_pool")]
        public bool InPool { get; set; }
        [JsonProperty("output_indices")]
        public int[] OutputIndices { get; set; }
        [JsonProperty("prunable_as_hex")]
        public string PrunableAsHex { get; set; }
        [JsonProperty("prunable_hash")]
        public string PrunableHash { get; set; }
        [JsonProperty("pruned_as_hex")]
        public string PrunedAsHex { get; set; }
        [JsonProperty("tx_hash")]
        public string TxHash { get; set; }
    }
}
