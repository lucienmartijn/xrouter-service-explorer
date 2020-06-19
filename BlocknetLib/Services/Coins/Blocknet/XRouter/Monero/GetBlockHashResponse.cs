using System.Collections.Generic;
using BlocknetLib.Responses.Ethereum;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter.Monero
{
    [JsonConverter(typeof(ValidOrErrorEthereumConverter))]
    public class GetBlockHashResponse : ErrorResponse
    {
        public GetBlockHashResponse Reply { get; set; }
        public string Uuid { get; set; }
    }
}