using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter
{
    public class ShowConfigsResponse
    {
        public string NodePubKey { get; set; }
        public string PaymentAddress { get; set; }
        public string Config { get; set; }
        // public Dictionary<string,string> Plugins { get; set; }    
        public List<string> Plugins { get; set; }   
    }
}