using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudChainsSpvWallet.Api.Controllers.ViewModels
{
    public class OverPaymentRequestViewModel
    {
        public decimal Amount { get; set; }
        public List<string> TxIds { get; set; }
        public string ChangeAddress { get; set; }
    }
}
