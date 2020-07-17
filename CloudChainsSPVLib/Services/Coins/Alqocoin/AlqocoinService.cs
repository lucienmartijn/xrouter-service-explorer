using CloudChainsSPVLib.CoinParameters.Alqocoin;

using Newtonsoft.Json;
using Newtonsoft.Json.Linq;


namespace CloudChainsSPVLib.Services.Coins.Alqocoin
{
    public class AlqocoinService : CoinService
    {
        public AlqocoinService()
        {

        }
		public AlqocoinService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword)
        { }

		public AlqocoinService(string daemonUrl, string rpcUsername, string rpcPassword,
			string walletPassword, short rpcRequestTimeoutInSeconds)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword, rpcRequestTimeoutInSeconds)
        { }


		public AlqocoinConstants.Constants Constants => AlqocoinConstants.Constants.Instance;
    }
}
