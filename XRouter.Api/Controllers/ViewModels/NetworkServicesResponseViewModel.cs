using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;
using XRouter.Api.Controllers.ViewModels;

namespace XRouter.Api.Controllers.ViewModels
{
    public class NetworkServicesResponseViewModel
    {
        public List<ServiceViewModel> Items { get; set; }
        public int TotalItems { get; set; }
    }
}