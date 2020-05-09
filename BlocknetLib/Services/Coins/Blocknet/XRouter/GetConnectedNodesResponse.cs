using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter
{
    public class GetConnectedNodesResponse : JsonRpcXrError
    {
        public List<ConnectedNodeResponse> Reply { get; set; }
        public string Uuid { get; set; }
    }

    
}