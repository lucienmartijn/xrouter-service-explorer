using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;
using Xrouter.Service.Explorer.BitcoinLib.Services.Coins.Blocknet.XRouter;

namespace BitcoinLib.Services.Coins.Blocknet.Xrouter.BitcoinBased
{
    public class GetBlockCountResponse : ResponseBase
    {
        public string Reply { get; set; }
        public string Uuid { get; set; }
        
        [JsonProperty("allreplies")]
		public List<ServiceNodeResponse<int>> AllReplies { get; set; }
    }

    
}
