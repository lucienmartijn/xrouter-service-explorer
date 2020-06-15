using System.Collections.Generic;

namespace CloudChainsSPVLib.Responses
{
    public class GetBlockResponse
    {
        public GetBlockResponse()
        {
            Tx = new List<string>();
        }

        public string Hash { get; set; }
        public int Confirmations { get; set; }
        public int StrippedSize { get; set; }
        public int Size { get; set; }
        public int Weight { get; set; }
        public int Height { get; set; }
        public int VersionHex { get; set; }
        public string MerkleRoot { get; set; }
        public List<string> Tx { get; set; }
        public int Time { get; set; }
        public int MedianTime { get; set; }
        public string Nonce { get; set; }
        public string Bits { get; set; }
        public double Difficulty { get; set; }
        public string ChainWork { get; set; }
        public string PreviousBlockHash { get; set; }
    }
}
