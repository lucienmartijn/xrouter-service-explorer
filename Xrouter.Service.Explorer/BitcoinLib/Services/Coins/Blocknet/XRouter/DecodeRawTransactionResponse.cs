using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BitcoinLib.Services.Coins.Blocknet.Xrouter
{
    public class DecodeRawTransactionResponse : JsonRpcXrError
    {
        public RawTransactionResponse Reply { get; set; }
        public string Uuid { get; set; }
        
        [JsonProperty("allreplies")]
		public List<ServiceNodeResponse<RawTransactionResponse>> AllReplies { get; set; }
    }

    
}