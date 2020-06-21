using System.Collections.Generic;
using BlocknetLib.Responses;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels.Neo
{
    public class GetBlocksResponseViewModel : XRouterBaseResponseViewModel
    {
        public List<GetBlockResponseViewModel> Reply { get; set; }
    }
}