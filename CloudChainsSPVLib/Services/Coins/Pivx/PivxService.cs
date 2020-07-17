using CloudChainsSPVLib.CoinParameters.Pivx;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace CloudChainsSPVLib.Services.Coins.Pivx
{
    public class PivxService : CoinService
    {
        public PivxService()
        {

        }
		public PivxService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword)
        { }

		public PivxService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword, short rpcRequestTimeoutInSeconds)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword, rpcRequestTimeoutInSeconds)
        { }


		public PivxConstants.Constants Constants => PivxConstants.Constants.Instance;
    }
}
