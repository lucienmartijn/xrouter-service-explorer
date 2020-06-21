using BlocknetLib.Responses.Neo.SharedComponents;

namespace BlocknetLib.Responses.Neo
{
    public class BlockResponse
    {
        public string Hash { get; set; }
        public int Size { get; set; }
        public int Version { get; set; }
        public string PreviousBlockHash { get; set; }
        public string MerkleRoot { get; set; }
        public int Time { get; set; }
        public int Index { get; set; }
        public string Nonce { get; set; }
        public string NextConsensus { get; set; }
        public Script Script { get; set; }
        public TransactionResponse[] Tx { get; set; }
        public int Confirmations { get; set; }
        public string NextBlockHash { get; set; }
    }
}