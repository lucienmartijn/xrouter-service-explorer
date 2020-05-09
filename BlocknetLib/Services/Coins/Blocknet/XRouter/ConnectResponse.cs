using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter
{
    public class ConnectResponse : JsonRpcXrError
    {
        public List<ConnectedNodeResponse> Reply { get; set; }
        public string Uuid { get; set; }
        
        [JsonProperty("allreplies")]
		public List<ServiceNodeResponse<List<ConnectedNodeResponse>>> AllReplies { get; set; }
    }

    
}