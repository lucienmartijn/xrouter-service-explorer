using System.Collections.Generic;
using BlocknetLib.Responses;
using BlocknetLib.Responses.EthereumClassic;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter.EthereumClassic
{
    [JsonConverter(typeof(ValidOrErrorEthereumClassicConverter))]
    public class GetTransactionResponse : ErrorResponse
    {
        public TransactionResponse Reply { get; set; }
        public string Uuid { get; set; }
    }
}