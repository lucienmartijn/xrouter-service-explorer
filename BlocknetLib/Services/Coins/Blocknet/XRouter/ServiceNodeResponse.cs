using BlocknetLib.RPC.Connector;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter
{
    public class ServiceNodeResponse<T>
    {
        [JsonProperty("nodepubkey")]
        public string NodePubKey { get; set; }
        [JsonProperty("score")]
        public int Score { get; set; }
        [JsonProperty("reply")]
        // [JsonConverter(typeof(ValidOrErrorConsensusConverter))]
        public T Reply { get; set; }
    } 
}