using System.Collections.Generic;
using BlocknetLib.Responses;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels
{
    public class DecodeRawTransactionResponseViewModel: XRouterBaseResponseViewModel
    {
        public RawTransactionResponse Reply { get; set; }
    }
}