using System.Collections.Generic;
using BlocknetLib.Responses;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels.BitcoinBased
{
    public class TransactionsResponseViewModel: XRouterBaseResponseViewModel
    {
        public List<RawTransactionResponseViewModel> Reply { get; set; }
    }
}