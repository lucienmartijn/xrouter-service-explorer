using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels
{
    public class XRouterBaseRequestViewModel
    {
        public string Token { get; set; }
        public short NodeCount { get; set; }
    }
}