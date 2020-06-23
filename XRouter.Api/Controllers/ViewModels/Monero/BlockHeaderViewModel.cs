using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace XRouter.Api.Controllers.ViewModels.Monero
{
    public class BlockHeaderViewModel
    {
        [JsonProperty("block_size")]
        public int BlockSize { get; set; }
        [JsonProperty("block_weight")]
        public int BlockWeight { get; set; }
        [JsonProperty("cumulative_difficulty")]
        public long CumulativeDifficulty { get; set; }
        [JsonProperty("cumulative_difficulty_top64")]
        public int CumulativeDifficultyTop64 { get; set; }
        public int Depth { get; set; }
        public long Difficulty { get; set; }
        [JsonProperty("difficulty_top64")]
        public int DifficultyTop64 { get; set; }
        public string Hash { get; set; }
        public int Height { get; set; }
        [JsonProperty("long_term_weight")]
        public int LongTermWeight { get; set; }
        [JsonProperty("major_version")]
        public int MajorVersion { get; set; }
        [JsonProperty("miner_tx_hash")]
        public string MinerTxHash { get; set; }
        [JsonProperty("minor_version")]
        public int MinorVersion { get; set; }
        public long Nonce { get; set; }
        [JsonProperty("num_txs")]
        public int NumTxs { get; set; }
        [JsonProperty("orphan_status")]
        public bool OrphanStatus { get; set; }
        [JsonProperty("pow_hash")]
        public string PowHash { get; set; }
        [JsonProperty("prev_hash")]
        public string PrevHash { get; set; }
        public long Reward { get; set; }
        public int Timestamp { get; set; }
        [JsonProperty("wide_cumulative_difficulty")]
        public string WideCumulativeDifficulty { get; set; }
        [JsonProperty("wide_difficulty")]
        public string WideDifficulty { get; set; }
    }
}
