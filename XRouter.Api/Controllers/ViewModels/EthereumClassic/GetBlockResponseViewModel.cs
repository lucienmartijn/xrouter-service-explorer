using System.Collections.Generic;
using BlocknetLib.Responses;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels.EthereumClassic
{
    public class GetBlockResponseViewModel : XRouterBaseResponseViewModel
    {
        public BlockResponseViewModel Reply { get; set; }
    }
}