using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter
{
    public class UpdateNetworkServicesResponse : JsonRpcXrError
    {
        public string Reply { get; set; }
    }

    
}