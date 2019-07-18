using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BitcoinLib.Services.Coins.Blocknet.Xrouter
{
    public class ConfigResponse : JsonRpcXrError
    {
        public string NodePubKey { get; set; }
        public string PaymentAddress { get; set; }
        public string Config { get; set; }
        public Dictionary<string,string> Plugins { get; set; }
    }

    
}