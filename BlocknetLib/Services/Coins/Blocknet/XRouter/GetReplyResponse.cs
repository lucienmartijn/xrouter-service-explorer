using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter
{
    public class GetReplyResponse : JsonRpcXrError
    {
        public int Reply { get; set; }
        public string Uuid { get; set; }
        
        [JsonProperty("allreplies")]
		public List<ServiceNodeResponse<int>> AllReplies { get; set; }
    }

    
}