using System.Collections.Generic;
using BlocknetLib.Responses;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels.BitcoinBased
{
    public class BlockResponseViewModel : XRouterBaseResponseViewModel
    {
        public BlockViewModel Reply { get; set; }
    }
}