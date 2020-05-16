using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels
{
    public class BlocksRequestViewModel : XRouterBaseRequestViewModel
    {
        public string[] BlockHashes { get; set; }
    }
}