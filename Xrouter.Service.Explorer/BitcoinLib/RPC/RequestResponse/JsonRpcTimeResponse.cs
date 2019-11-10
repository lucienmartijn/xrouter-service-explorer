// Copyright (c) 2014 - 2016 George Kimionis
// See the accompanying file LICENSE for the Software License Aggrement

using System;
using Newtonsoft.Json;

namespace BitcoinLib.RPC.RequestResponse
{
    public class JsonRpcTimeResponse
    {
        [JsonProperty(PropertyName = "elapsed_time", Order = 0)]
        public TimeSpan ElapsedTime { get; set; }

    }
}