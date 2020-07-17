using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudChainsSpvWallet.Api.Controllers.ViewModels
{
    public class EnterpriseXRouterPaymentRequestViewModel
    {
        public string Hash { get; set; }
        public decimal ServiceFee { get; set; }
        public string PaymentAddress { get; set; }
    }
}
