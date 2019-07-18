using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BitcoinLib.Services.Coins.Blocknet.Xrouter
{
    public class UpdateConfigsResponse : JsonRpcXrError
    {
        public string Reply { get; set; }
    }

    
}