using CloudChainsSPVLib.CoinParameters.Digibyte;


namespace CloudChainsSPVLib.Services.Coins.Digibyte
{
    public class DigibyteService : CoinService
    {
        public DigibyteService()
        {

        }
		public DigibyteService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword)
        { }

		public DigibyteService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword, short rpcRequestTimeoutInSeconds)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword, rpcRequestTimeoutInSeconds)
        { }


		public DigibyteConstants.Constants Constants => DigibyteConstants.Constants.Instance;
    }
}
