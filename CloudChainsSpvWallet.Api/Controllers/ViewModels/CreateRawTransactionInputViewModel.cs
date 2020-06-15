using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudChainsSpvWallet.Api.Controllers.ViewModels
{
    public class CreateRawTransactionInputViewModel
    {
        [JsonProperty("txid")]
        public string TxId { get; set; }
        [JsonProperty("vout")]
        public int Vout { get; set; }
    }
}
