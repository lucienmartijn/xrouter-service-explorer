// Copyright (c) 2014 - 2016 George Kimionis
// See the accompanying file LICENSE for the Software License Aggrement

using Newtonsoft.Json;

namespace CloudChainsSPVLib.Responses
{
    public class GetInfoResponse
    {
        public string ProtocolVersion { get; set; }
        public string Ticker { get; set; }
        public decimal Balance { get; set; }
        public bool Testnet { get; set; }
        public double Difficulty { get; set; }
        public double Connections { get; set; }
        public double Blocks { get; set; }
        public double KeyPoolSize { get; set; }
        public double KeyPoolOldest { get; set; }
        public decimal RelayFee { get; set; }
        public bool NetworkActive { get; set; }
        public double TimeOffset { get; set; }
    }
}