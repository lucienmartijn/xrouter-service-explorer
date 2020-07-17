using CloudChainsSPVLib.CoinParameters.Blocknet;
using CloudChainsSPVLib.Services.Coins.Base;


namespace CloudChainsSPVLib.Services.Coins.Blocknet
{
    public class BlocknetzService : CoinService
    {
        public BlocknetzService()
        {

        }
        public BlocknetzService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword)
        {
        }

        public BlocknetzService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword, short rpcRequestTimeoutInSeconds)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword, rpcRequestTimeoutInSeconds)
        {
        }

        public BlocknetConstants.Constants Constants => BlocknetConstants.Constants.Instance;
    }
}
