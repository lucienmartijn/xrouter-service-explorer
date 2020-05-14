using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using XRouter.Api.Controllers.ViewModels;

namespace Xrouter.Service.Explorer.Controllers.ViewModels
{
    public class SendTransactionRequestViewModel : BaseXRouterRequestViewModel
    {
        public string SignedTx { get; set; }
    }
}
