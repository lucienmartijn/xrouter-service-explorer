using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace blocknet_xrouter.Controllers.ViewModels
{
    public class XCloudServiceQueryViewModel : QueryViewModel
    {
        public string NodePubKey{ get; set; }
        
    }

}
