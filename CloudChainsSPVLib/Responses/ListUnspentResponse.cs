namespace CloudChainsSPVLib.Responses
{
    public class ListUnspentResponse
    {
        public string TxId { get; set; }
        public int Vout { get; set; }
        public string Address { get; set; }
        public decimal Amount { get; set; }
        public bool Spendable { get; set; }
        public int Confirmations { get; set; }
    }
}