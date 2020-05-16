using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels
{
    public class DecodeRawTransactionRequestViewModel: XRouterBaseRequestViewModel
    {
        public string TxHex { get; set; }
    }
}