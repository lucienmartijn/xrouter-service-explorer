using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using XRouter.Api.Controllers.ViewModels;

namespace XRouter.Api.Controllers.ViewModels
{
    public class SendTransactionRequestViewModel : XRouterBaseRequestViewModel
    {
        public string SignedTx { get; set; }
    }
}
