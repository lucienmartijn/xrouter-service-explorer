using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace blocknet_xrouter.Controllers.ViewModels
{
    public class BaseXRouterServiceViewModel
    {
        public double Fee { get; set; }
        public int RequestLimit { get; set; }
        public string PaymentAddress { get; set; }
        public bool Disabled { get; set; }
    }
}