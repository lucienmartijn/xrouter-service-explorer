using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels
{
    public class TransactionRequestViewModel: XRouterBaseRequestViewModel
    {
        public string TxId { get; set; }
    }
}