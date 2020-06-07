using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace XRouter.Api.Controllers.ViewModels.BitcoinBased
{
    public class GetBlockResponseViewModel
    {
        public GetBlockResponseViewModel()
        {
            Tx = new List<string>();
        }

        public List<string> Tx { get; set; }
        public int NTx { get; set; }
        public string Hash { get; set; }
        public int Confirmations { get; set; }
        public int StrippedSize { get; set; }
        public int Size { get; set; }
        public int Weight { get; set; }
        public int Height { get; set; }
        public int Version { get; set; }
        public string MerkleRoot { get; set; }
        public double Difficulty { get; set; }
        public string ChainWork { get; set; }
        public string PreviousBlockHash { get; set; }
        public string NextBlockHash { get; set; }
        public string Bits { get; set; }
        public int Time { get; set; }
        public string Nonce { get; set; }
    }
}
