using System.Collections.Generic;
using BlocknetLib.Responses;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels.EthereumClassic
{
    public class GetTransactionsResponseViewModel: XRouterBaseResponseViewModel
    {
        public List<TransactionResponseViewModel> Reply { get; set; }
    }
}