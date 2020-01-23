using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Xrouter.Service.Explorer.Extensions;

namespace BitcoinLib.Services.Coins.Blocknet
{
	public class ServiceNodeQuery: IQueryObject
    {
		public string SpvWallet{ get; set; }
        public string XCloudService{ get; set; }
        public bool AtleastOneSpvWallet { get; set; }
        public int Page { get; set; }
        public byte PageSize { get; set; }
	}
}
