using System.Collections.Generic;
using BlocknetLib.Responses.EthereumClassic;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter.EthereumClassic
{
    [JsonConverter(typeof(ValidOrErrorEthereumClassicConverter))]
    public class GetBlocksResponse : ErrorResponse
    {
        public List<BlockResponse> Reply { get; set; }
        public string Uuid { get; set; }
    }
}