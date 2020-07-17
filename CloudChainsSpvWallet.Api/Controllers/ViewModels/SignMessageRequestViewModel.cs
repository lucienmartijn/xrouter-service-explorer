using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudChainsSpvWallet.Api.Controllers.ViewModels
{
    public class SignMessageRequestViewModel
    {
        public string Address { get; set; }
        public string Message { get; set; }
    }
}
