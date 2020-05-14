using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels
{
    public class TransactionsRequestViewModel: BaseXRouterRequestViewModel
    {
        public string[] TxIds { get; set; }
    }
}