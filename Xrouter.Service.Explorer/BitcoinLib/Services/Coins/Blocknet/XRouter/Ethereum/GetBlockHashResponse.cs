using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BitcoinLib.Services.Coins.Blocknet.Xrouter.Ethereum
{
    public class GetBlockHashResponse : JsonRpcXrError
    {
        public BlockHashResponse Reply { get; set; }
        public string Uuid { get; set; }
        
        [JsonProperty("allreplies")]
		public List<ServiceNodeResponse<BlockHashResponse>> AllReplies { get; set; }
    }

    
}