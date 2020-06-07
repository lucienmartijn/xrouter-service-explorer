using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;
using XRouter.Api.Controllers.ViewModels;

namespace XRouter.Api.Controllers.ViewModels
{
    public class NetworkServicesResponseViewModel
    {
        public List<string> SpvWallets { get; set; }
        public List<string> Services { get; set; }
        public Dictionary<string, int> NodeCounts { get; set; }
    }
}