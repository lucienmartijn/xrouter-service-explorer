using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace Servicenode.Api.Controllers.ViewModels
{
    public class XCloudServiceViewModel:BaseXRouterServiceViewModel
    {
        public List<string> ParametersList { get; set; }
        public string Parameters { get; set; }
        public string Help { get; set; }
        public string Description { get; set; }
        public string Config { get; set; }
        public int Timeout { get; set; }
    }
}