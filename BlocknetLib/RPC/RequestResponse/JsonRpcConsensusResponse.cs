using System;
using Newtonsoft.Json;

namespace BlocknetLib.RPC.RequestResponse
{
    public class JsonRpcConsensusResponse<T>
    {
        [JsonProperty("result", NullValueHandling = NullValueHandling.Ignore)]
        public T Result { get; set; }

        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("error")]
        public JsonRpcError Error { get; set; }

    }
}
