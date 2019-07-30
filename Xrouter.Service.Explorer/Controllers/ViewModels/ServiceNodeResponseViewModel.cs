using System;
using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace blocknet_xrouter.Controllers.ViewModels
{
    public class ServiceNodeResponseViewModel
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
		public DateTime LastSeen { get; set; }
		public DateTime ActiveTime { get; set; }
		public DateTime LastPaid { get; set; }
		public List<string> XWallets { get; set; }
    }
    
}