using CloudChainsSPVLib.CoinParameters.Dogecoin;


namespace CloudChainsSPVLib.Services.Coins.Dogecoin
{
    public class DogecoinService : CoinService
    {
        public DogecoinService()
        {

        }
		public DogecoinService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword)
        { }

		public DogecoinService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword, short rpcRequestTimeoutInSeconds)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword, rpcRequestTimeoutInSeconds)
        { }


		public DogecoinConstants.Constants Constants => DogecoinConstants.Constants.Instance;
    }
}
