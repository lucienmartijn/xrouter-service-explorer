namespace BlocknetLib.CoinConfig{
    public class RpcInput
    {
        public string DaemonUrl { get; set; }
        public string DaemonUrl_testnet { get; set; }
        public string WalletPassword { get; set; }
        public string RpcUserName { get; set; }
        public string RpcPassword { get; set; }
        public short RpcRequestTimeoutInSeconds { get; set; }
    }
}

