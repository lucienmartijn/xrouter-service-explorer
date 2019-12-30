// Copyright (c) 2014 - 2016 George Kimionis
// See the accompanying file LICENSE for the Software License Aggrement

using Newtonsoft.Json;

namespace BitcoinLib.RPC.RequestResponse
{
    public class JsonRpcXrError
    {
        [JsonProperty(PropertyName = "error", Order = 0)]
        public object Error { get; set; }

        [JsonProperty(PropertyName = "code", Order = 1)]
        public int Code { get; set; }

    }
}
