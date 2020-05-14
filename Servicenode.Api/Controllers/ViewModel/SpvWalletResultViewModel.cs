using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace Servicenode.Api.Controllers.ViewModels
{
    public class SpvWalletResultViewModel: ServiceResultViewModel
    {
        public SpvConfigViewModel SpvConfig { get; set; }
    }
    
}