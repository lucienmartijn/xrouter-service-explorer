using System;
using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;

namespace BitcoinLib.Services.Coins.Blocknet
{
	public class ServiceNodeInfoResponse
	{
		public string SNodeKey { get; set; }
        public int Score { get; set; }
        public string Tier { get; set; }
        public string Address { get; set; }
        public string Status { get; set; }
        public long TimeLastSeen { get; set; }
        public DateTime TimeLastSeenStr { get; set; }
        public List<string> SpvWallets { get; set; }
        public List<string> XCloudServices { get; set; }

    }

    public class ServiceNode
    {
        public string SNodeKey { get; set; }
        public int Score { get; set; }
        public string Tier { get; set; }
        public string Address { get; set; }
        public string Status { get; set; }
        public long TimeLastSeen { get; set; }
        public DateTime TimeLastSeenStr { get; set; }
        public List<string> Services { get; set; }
    }
}
