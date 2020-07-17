using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudChainsSpvWallet.Api.Controllers.ViewModels
{
    public class CloudChainCoinViewModel
    {
        [JsonProperty("result", NullValueHandling = NullValueHandling.Ignore)]
        public Dictionary<string, int?> Result { get; set; }
        [JsonProperty("error", NullValueHandling = NullValueHandling.Ignore)]
        public object Error { get; set; }
    }
}
