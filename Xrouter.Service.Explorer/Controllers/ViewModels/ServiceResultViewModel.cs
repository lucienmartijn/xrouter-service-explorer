using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace blocknet_xrouter.Controllers.ViewModels
{
    public class ServiceResultViewModel
    {
        public NodeInfoViewModel Node { get; set; }
        public List<NodeInfoViewModel> OtherNodes { get; set; }
    }
    
}