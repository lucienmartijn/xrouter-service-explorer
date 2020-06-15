using System.Collections.Generic;

namespace CloudChainsSPVLib.Responses
{
    public class GetNetworkInfoResponse
    {
        public uint ProtocolVersion { get; set; }
        public string Ticker { get; set; }
        public string Subversion { get; set; }
        public uint Connections { get; set; }
        public string LocalServices { get; set; }
        public decimal RelayFee { get; set; }
    }
}