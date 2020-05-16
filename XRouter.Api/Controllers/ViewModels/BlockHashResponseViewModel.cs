using System.Collections.Generic;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels
{
    public class BlockHashResponseViewModel : XRouterBaseResponseViewModel
    {
        public string Reply { get; set; }
    }
}