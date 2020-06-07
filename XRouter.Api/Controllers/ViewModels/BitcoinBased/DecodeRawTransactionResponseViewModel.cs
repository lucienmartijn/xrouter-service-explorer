using System.Collections.Generic;
using BlocknetLib.Responses;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels.BitcoinBased
{
    public class DecodeRawTransactionResponseViewModel: XRouterBaseResponseViewModel
    {
        public RawTransactionResponseViewModel Reply { get; set; }
    }
}