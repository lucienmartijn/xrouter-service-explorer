using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BitcoinLib.Services.Coins.Blocknet.Xrouter.Ethereum
{
    public class GetBlocksResponse : JsonRpcXrError
    {
        public List<BlockResponse> Reply { get; set; }
        public string Uuid { get; set; }
        
        [JsonProperty("allreplies")]
		public List<ServiceNodeResponse<List<BlockResponse>>> AllReplies { get; set; }
    }

    
}