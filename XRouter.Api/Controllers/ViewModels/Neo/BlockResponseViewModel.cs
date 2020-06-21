using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace XRouter.Api.Controllers.ViewModels.Neo
{
    public class BlockResponseViewModel
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
        public ScriptViewModel Script { get; set; }
        public TransactionResponseViewModel[] Tx { get; set; }
        public int Confirmations { get; set; }
        public string NextBlockHash { get; set; }
    }
}
