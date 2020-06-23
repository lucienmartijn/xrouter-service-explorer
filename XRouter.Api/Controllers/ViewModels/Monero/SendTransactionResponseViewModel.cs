using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using XRouter.Api.Controllers.ViewModels;

namespace XRouter.Api.Controllers.ViewModels.Monero
{
    public class SendTransactionResponseViewModel : XRouterBaseResponseViewModel
    {
        public string Reply { get; set; }
    }
}
