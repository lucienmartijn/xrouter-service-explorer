using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter
{
    public class ServiceResponse : JsonRpcXrError
    {
        public object Reply { get; set; }
        public string Uuid { get; set; }
    }

    
}