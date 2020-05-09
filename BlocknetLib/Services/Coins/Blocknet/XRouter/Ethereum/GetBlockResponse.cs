using System.Collections.Generic;
using BlocknetLib.Responses;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum
{
    [JsonConverter(typeof(ValidOrErrorEthereumConverter))]
    public class GetBlockResponse
    {
        public BlockResponse Reply { get; set; }
        public string Uuid { get; set; }
    }
}