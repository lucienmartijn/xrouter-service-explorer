using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels
{
    public class BlockHashRequestViewModel: BaseXRouterRequestViewModel
    {
        public string BlockNumber { get; set; }
    }
}