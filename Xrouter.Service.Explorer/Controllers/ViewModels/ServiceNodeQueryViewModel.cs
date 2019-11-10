using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace blocknet_xrouter.Controllers.ViewModels
{
    public class ServiceNodeQueryViewModel
    {
        public string SpvWallet{ get; set; }
        public string XCloudService{ get; set; }
        public string SortBy { get; set; }
        public bool IsSortAscending { get; set; }
        public bool OnlyXWallets { get; set; }
        public int Page { get; set; }
        public byte PageSize { get; set; }
    }

}
