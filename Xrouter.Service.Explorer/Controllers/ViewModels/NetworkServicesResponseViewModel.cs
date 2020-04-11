using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace blocknet_xrouter.Controllers.ViewModels
{
    public class NetworkServicesResponseViewModel
    {
        public List<ServiceViewModel> Items { get; set; }
        public int TotalItems { get; set; }
    }
    public class ServiceViewModel
    {
        public string Name { get; set; }
        public int NodeCount { get; set; }
    }


    
}