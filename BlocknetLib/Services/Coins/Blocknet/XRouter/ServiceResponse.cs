using System.Collections.Generic;
using BlocknetLib.RPC.Deserializer;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace BlocknetLib.Services.Coins.Blocknet.Xrouter
{
    [JsonConverter(typeof(ValidOrErrorConverter))]
    public class ServiceResponse : ErrorResponse
    {
        public object Reply { get; set; }
        public string Uuid { get; set; }
    }

    
}