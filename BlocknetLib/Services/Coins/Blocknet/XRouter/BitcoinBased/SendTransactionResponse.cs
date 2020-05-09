using System.Collections.Generic;
using BlocknetLib.RPC.Connector;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased
{
    [JsonConverter(typeof(ValidOrErrorConverter))]
    public class SendTransactionResponse:ErrorResponse
    {
        [JsonProperty("reply")]
        public string Reply { get; set; }
        [JsonProperty("uuid")]
        public string Uuid { get; set; }
    }
}