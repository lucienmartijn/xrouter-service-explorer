using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using BlocknetLib.CoinParameters.Blocknet;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.RPC.Specifications;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Xrouter.Service.Explorer.BitcoinLib.Services.Coins.Blocknet.XRouter;

namespace BlocknetLib.Services.Coins.Blocknet
{
	/// <summary>
	/// Mostly the same functionality as <see cref="BitcoinService"/>, just adds a bunch more features
	/// for handling InstantSend and PrivateSend, plus better raw tx generation support.
	/// </summary>
	public class BlocknetService : CoinService, IBlocknetService
	{
		public BlocknetService(bool useTestnet = false) : base(useTestnet) { }

		public BlocknetService(string daemonUrl, string rpcUsername, string rpcPassword,
			string walletPassword) : base(daemonUrl, rpcUsername, rpcPassword, walletPassword) { }

		public BlocknetService(string daemonUrl, string rpcUsername, string rpcPassword,
			string walletPassword, short rpcRequestTimeoutInSeconds) : base(daemonUrl, rpcUsername,
			rpcPassword, walletPassword, rpcRequestTimeoutInSeconds) { }


		public BlocknetConstants.Constants Constants => BlocknetConstants.Constants.Instance;

        public List<ServiceNodeInfoResponse> serviceNodeList()
        {
            return _rpcConnector.MakeRequest<List<ServiceNodeInfoResponse>>(RpcMethods.servicenodelist);
        }
    }
}
