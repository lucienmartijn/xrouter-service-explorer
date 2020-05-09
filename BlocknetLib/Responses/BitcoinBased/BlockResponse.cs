using System.Collections.Generic;
using BlocknetLib.Responses;
using BlocknetLib.Responses.SharedComponents;

namespace BlocknetLib.Responses
{
    public class BlockResponse: Responses.GetBlockResponse
    {
        public string VersionHex { get; set; }
        public int MedianTime { get; set; }
        public string Chainwork { get; set; }
        public AuxilliaryPow AuxPow { get; set; }

        public class AuxilliaryPow
        {
            public Transaction tx { get; set; }
            public int Index { get; set; }
            public int ChainIndex { get; set; }
            public List<string> MerkleBranch { get; set; }
            public List<string> ChainMerkleBranch { get; set; }
            public string ParentBlock { get; set; }

            public class Transaction: GetRawTransactionResponse
            {
                public int Size { get; set; }
            }
        }
    }
}