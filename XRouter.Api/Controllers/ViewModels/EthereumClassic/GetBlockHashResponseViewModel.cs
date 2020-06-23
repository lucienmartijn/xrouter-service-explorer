using System.Collections.Generic;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels.EthereumClassic
{
    public class GetBlockHashResponseViewModel : XRouterBaseResponseViewModel
    {
        public BlockHashResponseViewModel Reply { get; set; }
    }
}