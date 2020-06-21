using System.Collections.Generic;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels.Neo
{
    public class GetBlockCountResponseViewModel: XRouterBaseResponseViewModel
    {
        public int Reply { get; set; }
    }
}