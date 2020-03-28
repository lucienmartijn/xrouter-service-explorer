using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BitcoinLib.Services.Coins.Blocknet.Xrouter.Ethereum
{
    public class GetDecodeRawTransactionResponse : JsonRpcXrError
    {
        public TransactionResponse Reply { get; set; }
        public string Uuid { get; set; }
        
        [JsonProperty("allreplies")]
		public List<ServiceNodeResponse<TransactionResponse>> AllReplies { get; set; }
    }

    
}