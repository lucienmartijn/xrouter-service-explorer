using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;
using Xrouter.Service.Explorer.BitcoinLib.Services.Coins.Blocknet.XRouter;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter
{
    public class ErrorResponse : BaseMessageResponse
    {
        [JsonProperty("code")]
        public int Code { get; set; }
        [JsonProperty("error")]
        public JsonRpcError Error { get; set; }
        [JsonProperty("id")]
        public int Id { get; set; }
    }
}