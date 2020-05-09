using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter
{
    public class NetworkServicesResponse : JsonRpcXrError
    {
        public List<string> SpvWallets { get; set; }
        public List<string> Services { get; set; }
        public Dictionary<string, int> NodeCounts { get; set; }

    }
}