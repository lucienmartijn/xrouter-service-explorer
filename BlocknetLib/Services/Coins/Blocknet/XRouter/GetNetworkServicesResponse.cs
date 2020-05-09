using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter
{
    public class GetNetworkServicesResponse : JsonRpcXrError
    {
        public NetworkServicesResponse Reply { get; set; }
        public string Uuid { get; set; }
        
    }

    
}