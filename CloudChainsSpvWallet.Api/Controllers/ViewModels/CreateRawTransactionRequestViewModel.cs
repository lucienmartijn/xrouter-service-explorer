using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudChainsSpvWallet.Api.Controllers.ViewModels
{
    public class CreateRawTransactionRequestViewModel
    {
        [JsonProperty("inputs")]
        public IList<CreateRawTransactionInputViewModel> Inputs { get; set; }
        [JsonProperty("outputs")]
        public IDictionary<string, decimal> Outputs { get; set; }
    }
}
