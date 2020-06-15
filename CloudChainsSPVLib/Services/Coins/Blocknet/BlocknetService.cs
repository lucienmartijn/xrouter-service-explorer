using CloudChainsSPVLib.CoinParameters.Blocknet;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace CloudChainsSPVLib.Services.Coins.Blocknet
{
	/// <summary>
	/// Mostly the same functionality as <see cref="BitcoinService"/>, just adds a bunch more features
	/// for handling InstantSend and PrivateSend, plus better raw tx generation support.
	/// </summary>
	public class BlocknetService : CoinService, IBlocknetService
	{
		public BlocknetService(string daemonUrl, string rpcUsername, string rpcPassword,
			string walletPassword) : base(daemonUrl, rpcUsername, rpcPassword, walletPassword) { }

		public BlocknetService(string daemonUrl, string rpcUsername, string rpcPassword,
			string walletPassword, short rpcRequestTimeoutInSeconds) : base(daemonUrl, rpcUsername,
			rpcPassword, walletPassword, rpcRequestTimeoutInSeconds) { }


		public BlocknetConstants.Constants Constants => BlocknetConstants.Constants.Instance;
    }
}
