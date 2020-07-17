using CloudChainsSPVLib.CoinParameters.Ravencoin;


namespace CloudChainsSPVLib.Services.Coins.Ravencoin
{
    public class RavencoinService : CoinService
    {
        public RavencoinService()
        {

        }
		public RavencoinService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword)
        { }

		public RavencoinService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword, short rpcRequestTimeoutInSeconds)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword, rpcRequestTimeoutInSeconds)
        { }


		public RavencoinConstants.Constants Constants => RavencoinConstants.Constants.Instance;
    }
}
