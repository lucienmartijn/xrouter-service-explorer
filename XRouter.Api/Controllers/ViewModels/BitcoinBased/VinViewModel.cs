using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace XRouter.Api.Controllers.ViewModels.BitcoinBased
{
    public class VinViewModel
    {
        public string TxId { get; set; }
        public string Vout { get; set; }
        public ScriptSigViewModel ScriptSig { get; set; }
        public string CoinBase { get; set; }
        public string Sequence { get; set; }
    }
}
