using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BitcoinLib.Services.Coins.Blocknet.Xrouter.BitcoinBased
{
    public class GetBlockHashResponse : JsonRpcXrError
    {
        public string Reply { get; set; }
        public string Uuid { get; set; }
        
        [JsonProperty("allreplies")]
		public List<ServiceNodeResponse<string>> AllReplies { get; set; }
    }

    
}