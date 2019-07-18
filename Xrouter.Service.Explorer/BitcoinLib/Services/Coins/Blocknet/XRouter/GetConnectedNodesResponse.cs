using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BitcoinLib.Services.Coins.Blocknet.Xrouter
{
    public class GetConnectedNodesResponse : JsonRpcXrError
    {
        public List<ConnectedNodeResponse> Reply { get; set; }
        public string Uuid { get; set; }
    }

    
}