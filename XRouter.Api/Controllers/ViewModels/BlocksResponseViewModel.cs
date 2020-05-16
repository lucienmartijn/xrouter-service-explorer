using System.Collections.Generic;
using BlocknetLib.Responses;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;
using XRouter.Api.Serializer;

namespace XRouter.Api.Controllers.ViewModels
{
    public class BlocksResponseViewModel : XRouterBaseResponseViewModel
    {
        [JsonConverter(typeof(SkipEmptyValuesConverter))]
        public List<BlockResponse> Reply { get; set; }
    }
}