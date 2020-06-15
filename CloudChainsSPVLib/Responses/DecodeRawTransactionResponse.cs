// Copyright (c) 2014 - 2016 George Kimionis
// See the accompanying file LICENSE for the Software License Aggrement

using System.Collections.Generic;
using CloudChainsSPVLib.Responses.Bridges;
using CloudChainsSPVLib.Responses.SharedComponents;

namespace CloudChainsSPVLib.Responses
{
    public class DecodeRawTransactionResponse : ITransactionResponse
    {
        public string Version { get; set; }
        public string LockTime { get; set; }
        public List<Vin> Vin { get; set; }
        public List<Vout> Vout { get; set; }
        public string TxId { get; set; }
    }
}