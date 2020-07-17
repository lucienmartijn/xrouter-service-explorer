using CloudChainsSPVLib.CoinParameters.Phore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace CloudChainsSPVLib.Services.Coins.Phore
{
    public class PhoreService : CoinService
    {
        public PhoreService()
        {

        }
		public PhoreService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword)
        { }

		public PhoreService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword, short rpcRequestTimeoutInSeconds)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword, rpcRequestTimeoutInSeconds)
        { }


		public PhoreConstants.Constants Constants => PhoreConstants.Constants.Instance;
    }
}
