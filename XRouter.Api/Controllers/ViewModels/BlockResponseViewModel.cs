using System.Collections.Generic;
using BlocknetLib.Responses;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels
{
    public class BlockResponseViewModel : XRouterBaseResponseViewModel
    {
        public BlockResponse Reply { get; set; }
    }
}