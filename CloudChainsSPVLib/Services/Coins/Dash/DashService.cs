using CloudChainsSPVLib.CoinParameters.Dash;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace CloudChainsSPVLib.Services.Coins.Dash
{
    public class DashService : CoinService
    {
        public DashService()
        {

        }
		public DashService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword)
        { }

		public DashService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword, short rpcRequestTimeoutInSeconds)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword, rpcRequestTimeoutInSeconds)
        { }


		public DashConstants.Constants Constants => DashConstants.Constants.Instance;
    }
}
