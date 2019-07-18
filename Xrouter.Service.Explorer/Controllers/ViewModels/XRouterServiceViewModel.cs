using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace blocknet_xrouter.Controllers.ViewModels
{
    public class XRouterServiceViewModel:BaseXRouterServiceViewModel
    {
        public string Parameters { get; set; }
        public int FetchLimit { get; set; }
        public string HelpDescription { get; set; }
        public string Config { get; set; }
    }
}