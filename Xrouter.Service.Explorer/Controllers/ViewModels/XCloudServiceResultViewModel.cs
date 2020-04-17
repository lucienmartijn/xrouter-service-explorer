using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace blocknet_xrouter.Controllers.ViewModels
{
    public class XCloudServiceResultViewModel: ServiceResultViewModel
    {
        public XCloudServiceViewModel Service { get; set; }
    }
    
}