using System.Collections.Generic;
using BlocknetLib.Responses;
using Newtonsoft.Json;

namespace XRouter.Api.Controllers.ViewModels.Ethereum
{
    public class TransactionsResponseViewModel: XRouterBaseResponseViewModel
    {
        public List<GetTransactionResponseViewModel> Reply { get; set; }
    }
}