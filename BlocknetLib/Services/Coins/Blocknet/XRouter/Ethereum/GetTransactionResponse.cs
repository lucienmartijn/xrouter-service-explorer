using System.Collections.Generic;
using BlocknetLib.Responses;
using BlocknetLib.Responses.Ethereum;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum
{
    [JsonConverter(typeof(ValidOrErrorEthereumConverter))]
    public class GetTransactionResponse 
    {
        public TransactionResponse Reply { get; set; }
        public string Uuid { get; set; }
    }
}