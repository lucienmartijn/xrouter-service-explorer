using System.Collections.Generic;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;
using Xrouter.Service.Explorer.BitcoinLib.Services.Coins.Blocknet.XRouter;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased
{
    [JsonConverter(typeof(ValidOrErrorConverter))]
    public class GetBlockCountResponse:ErrorResponse
    {
        [JsonProperty("reply")]        
        public int Reply { get; set; }
        [JsonProperty("uuid")]
        public string Uuid { get; set; }
    } 
}
