using System.Collections.Generic;
using BlocknetLib.Responses;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels.Ethereum
{
    public class DecodeRawTransactionResponseViewModel: XRouterBaseResponseViewModel
    {
        public GetTransactionResponseViewModel Reply { get; set; }
    }
}