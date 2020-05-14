
using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace Servicenode.Api.Controllers.ViewModels
{
    public class SpvCommandViewModel:BaseXRouterServiceViewModel
    {
        public string Command { get; set; }
    }
}