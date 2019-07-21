using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace blocknet_xrouter.Controllers.ViewModels
{
    public class SpvWalletResultViewModel: ServiceResultViewModel
    {
        public SpvConfigViewModel SpvConfig { get; set; }
    }
    
}