using CloudChainsSPVLib.CoinParameters.Polis;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace CloudChainsSPVLib.Services.Coins.Polis
{
    public class PolisService : CoinService
    {
        public PolisService()
        {

        }
		public PolisService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword)
        { }

		public PolisService(string daemonUrl, string rpcUsername, string rpcPassword,
			string walletPassword, short rpcRequestTimeoutInSeconds)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword, rpcRequestTimeoutInSeconds)
        { }


		public PolisConstants.Constants Constants => PolisConstants.Constants.Instance;
    }
}
