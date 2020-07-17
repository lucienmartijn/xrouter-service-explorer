using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudChainsSpvWallet.Api.Controllers.ViewModels
{
    public class EnterpriseXRouterPaymentResponseViewModel
    {
        public string TxHex { get; set; }
        public string Signature { get; set; }
    }
}
