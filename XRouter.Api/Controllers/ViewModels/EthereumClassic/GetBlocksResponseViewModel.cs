using System.Collections.Generic;
using BlocknetLib.Responses;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels.EthereumClassic
{
    public class GetBlocksResponseViewModel : XRouterBaseResponseViewModel
    {
        public List<BlockResponseViewModel> Reply { get; set; }
    }
}