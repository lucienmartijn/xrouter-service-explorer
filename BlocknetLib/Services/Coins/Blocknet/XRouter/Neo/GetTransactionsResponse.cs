using System.Collections.Generic;
using BlocknetLib.Responses.Neo;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter.Neo
{
    [JsonConverter(typeof(ValidOrErrorConverterNeo))]
    public class GetTransactionsResponse : ErrorResponse
    {
        public List<Responses.Neo.TransactionResponse> Reply { get; set; }
        public string Uuid { get; set; }
    } 
}