using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace blocknet_xrouter.Controllers.ViewModels
{
    public class QueryViewModel
    {
        public string SortBy { get; set; }
        public bool IsSortAscending { get; set; }
        public int? Page { get; set; } = null;
        public byte? PageSize { get; set; } = null;
    }

}
