using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;

namespace BitcoinLib.Services.Coins.Blocknet
{
	public class ServiceNodeResponse
	{
		public int Rank { get; set; }
		public string NodePubKey { get; set; }
		public string TxHash { get; set; }
		public int OutIdx { get; set; }
		public string Status { get; set; }
		public string Addr { get; set; }
		public int Version { get; set; }
		public long XBridgeVersion { get; set; }
		public long XRouterVersion { get; set; }
		public long LastSeen { get; set; }
		public long ActiveTime { get; set; }
		public long LastPaid { get; set; }
        public List<string> SpvWallets { get; set; }
        public List<string> XCloudServices { get; set; }

    }

    public class ServiceNode
    {
        public int Rank { get; set; }
        public string NodePubKey { get; set; }
        public string TxHash { get; set; }
        public int OutIdx { get; set; }
        public string Status { get; set; }
        public string Addr { get; set; }
        public int Version { get; set; }
        public long XBridgeVersion { get; set; }
        public long XRouterVersion { get; set; }
        public long LastSeen { get; set; }
        public long ActiveTime { get; set; }
        public long LastPaid { get; set; }
        public string XWallets { get; set; }
    }
}
