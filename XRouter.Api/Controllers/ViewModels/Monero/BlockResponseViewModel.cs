using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels.Monero
{
    public class BlockResponseViewModel
    {
        public string Blob { get; set; }
        [JsonProperty("block_header")]
        public BlockHeaderViewModel BlockHeader { get; set; }
        public int Credits { get; set; }
        public string Json { get; set; }
        [JsonProperty("miner_tx_hash")]
        public string MinerTxHash { get; set; }
        public string Status { get; set; }
        [JsonProperty("top_hash")]
        public string TopHash { get; set; }
        [JsonProperty("tx_hashes")]
        public string[] TxHashes { get; set; }
        public bool Untrusted { get; set; }
    }
}