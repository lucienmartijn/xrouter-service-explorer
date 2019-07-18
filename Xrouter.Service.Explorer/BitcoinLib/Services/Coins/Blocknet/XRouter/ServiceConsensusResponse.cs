using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BitcoinLib.Services.Coins.Blocknet.Xrouter
{
    public class ServiceConsensusResponse : JsonRpcXrError
    {
        public object Reply { get; set; }
        public string Uuid { get; set; }
        
        [JsonProperty("allreplies")]
		public List<object> AllReplies { get; set; }
    }

    
}