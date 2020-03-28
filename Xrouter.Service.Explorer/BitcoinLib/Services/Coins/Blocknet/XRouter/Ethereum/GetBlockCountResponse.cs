using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;
using Xrouter.Service.Explorer.BitcoinLib.Services.Coins.Blocknet.XRouter;
using BitcoinLib.Services.Coins.Blocknet;

namespace BitcoinLib.Services.Coins.Blocknet.Xrouter.Ethereum
{
    public class GetBlockCountResponse : ResponseBase
    {
        public string Reply { get; set; }
        public string Uuid { get; set; }
        
        [JsonProperty("allreplies")]
		public List<ServiceNodeResponse<string>> AllReplies { get; set; }
    }

    
}
