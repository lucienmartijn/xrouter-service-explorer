using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels
{
    public class BlockRequestViewModel : XRouterBaseRequestViewModel
    {
        public string BlockHash { get; set; }
    }
}