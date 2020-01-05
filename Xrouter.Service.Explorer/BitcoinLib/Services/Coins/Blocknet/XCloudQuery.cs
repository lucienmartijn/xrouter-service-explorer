using System.Collections.Generic;
using BitcoinLib.RPC.RequestResponse;
using Xrouter.Service.Explorer.Extensions;

namespace BitcoinLib.Services.Coins.Blocknet
{
	public class XCloudQuery: IQueryObject
    {
        public int Page { get; set; }
        public byte PageSize { get; set; }
	}
}
