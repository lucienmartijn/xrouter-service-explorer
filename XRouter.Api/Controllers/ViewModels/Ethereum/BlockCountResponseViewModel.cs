using System.Collections.Generic;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels.Ethereum
{
    public class BlockCountResponseViewModel: XRouterBaseResponseViewModel
    {
        public string Reply { get; set; }
    }
}