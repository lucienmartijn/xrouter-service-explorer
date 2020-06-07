using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace XRouter.Api.Controllers.ViewModels.BitcoinBased
{
    public class AuxilliaryPowViewModel
    {
        public TransactionViewModel tx { get; set; }
        public int Index { get; set; }
        public int ChainIndex { get; set; }
        public List<string> MerkleBranch { get; set; }
        public List<string> ChainMerkleBranch { get; set; }
        public string ParentBlock { get; set; }
    }
}
