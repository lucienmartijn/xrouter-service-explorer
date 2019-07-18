using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace blocknet_xrouter.Controllers.ViewModels
{
    public class SpvConfigViewModel
    {
        public string SpvWallet { get; set; }
        public List<SpvCommandViewModel> Commands { get; set; }

        
    }
}