using CloudChainsSPVLib.CoinParameters.Litecoin;
using System;
using System.Collections.Generic;
using System.Text;

namespace CloudChainsSPVLib.Services.Coins.Litecoin
{
    public class LitecoinService : CoinService, ILitecoinService
    {
        public LitecoinService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword = null)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword)
        {
        }

        public LitecoinService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword, short rpcRequestTimeoutInSeconds)
            : base(daemonUrl, rpcUsername, rpcPassword, walletPassword, rpcRequestTimeoutInSeconds)
        {
        }

        public LitecoinConstants.Constants Constants => LitecoinConstants.Constants.Instance;
    }
}
