using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels
{
    public class TransactionsRequestViewModel: XRouterBaseRequestViewModel
    {
        public string[] TxIds { get; set; }
    }
}