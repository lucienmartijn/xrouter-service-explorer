using CloudChainsSPVLib.CoinParameters.Syscoin;


namespace CloudChainsSPVLib.Services.Coins.Syscoin
{
    public class SyscoinService : CoinService
    {
        public SyscoinService()
        {

        }
		public SyscoinService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword)
        { }

		public SyscoinService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword, short rpcRequestTimeoutInSeconds)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword, rpcRequestTimeoutInSeconds)
        { }


		public SyscoinConstants.Constants Constants => SyscoinConstants.Constants.Instance;
    }
}
