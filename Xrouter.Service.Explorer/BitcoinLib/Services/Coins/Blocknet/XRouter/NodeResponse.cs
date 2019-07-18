namespace BitcoinLib.Services.Coins.Blocknet.Xrouter
{
    public class ServiceNodeResponse<T>
    {
        public string NodePubKey { get; set; }
        public int Score { get; set; }
        public T Reply { get; set; }
    }

    
}