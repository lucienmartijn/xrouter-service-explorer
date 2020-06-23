namespace XRouter.Api.Controllers.ViewModels.EthereumClassic
{
    public class BlockResponseViewModel
    {
        public string Difficulty { get; set; }
        public string ExtraData { get; set; }
        public string GasLimit { get; set; }
        public string GasUsed { get; set; }
        public string Hash { get; set; }
        public string LogsBloom { get; set; }
        public string Miner { get; set; }
        public string MixHash { get; set; }
        public string Nonce { get; set; }
        public string Number { get; set; }
        public string ParentHash { get; set; }
        public string ReceiptsRoot { get; set; }
        public string Sha3Uncles { get; set; }
        public string Size { get; set; }
        public string StateRoot { get; set; }
        public string Timestamp { get; set; }
        public string TotalDifficulty { get; set; }
        public string[] Transactions { get; set; }
        public string TransactionsRoot { get; set; }
        public string[] Uncles { get; set; }
    }
}