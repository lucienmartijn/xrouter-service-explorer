namespace XRouter.Api.Controllers.ViewModels.Ethereum
{
    public class TransactionResponseViewModel
    {
        public string BlockHash { get; set; }
        public string BlockNumber { get; set; }
        public string ChainId { get; set; }
        public string Condition { get; set; }
        public string Creates { get; set; }
        public string From { get; set; }
        public string Gas { get; set; }
        public string GasPrice { get; set; }
        public string Hash { get; set; }
        public string Input { get; set; }
        public string Nonce { get; set; }
        public string PublicKey { get; set; }
        public string R { get; set; }
        public string Raw { get; set; }
        public string S { get; set; }
        public string StandardV { get; set; }
        public string To { get; set; }
        public string TransactionIndex { get; set; }
        public string V { get; set; }
        public string Value { get; set; }
    }
}