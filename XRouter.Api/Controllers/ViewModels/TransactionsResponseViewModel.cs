using System.Collections.Generic;
using BlocknetLib.Responses;
using Newtonsoft.Json;
using XRouter.Api.Serializer;

namespace XRouter.Api.Controllers.ViewModels
{
    public class TransactionsResponseViewModel: XRouterBaseResponseViewModel
    {
        [JsonConverter(typeof(SkipEmptyValuesConverter))]
        public List<RawTransactionResponse> Reply { get; set; }
    }
}