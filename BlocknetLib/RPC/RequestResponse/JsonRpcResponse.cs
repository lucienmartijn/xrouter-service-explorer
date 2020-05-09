// Copyright (c) 2014 - 2016 George Kimionis
// See the accompanying file LICENSE for the Software License Aggrement

using System;
using BlocknetLib.RPC.Connector;
using Newtonsoft.Json;

namespace BlocknetLib.RPC.RequestResponse
{
    public class JsonRpcResponse<T>
    {
        [JsonProperty("result", NullValueHandling = NullValueHandling.Ignore)]
        public T Result { get; set; }

        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("error")]
        public JsonRpcError Error { get; set; }

    }
}
