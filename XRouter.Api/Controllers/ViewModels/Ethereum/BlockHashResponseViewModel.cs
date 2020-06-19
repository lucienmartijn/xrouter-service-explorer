using System.Collections.Generic;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels.Ethereum
{
    public class BlockHashResponseViewModel : XRouterBaseResponseViewModel
    {
        public GetBlockHashResponseViewModel Reply { get; set; }
    }
}