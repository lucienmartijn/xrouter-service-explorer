using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace XRouter.Api.Controllers.ViewModels.BitcoinBased
{
    public class BlockViewModel : GetBlockResponseViewModel
    {
        public string VersionHex { get; set; }
        public int MedianTime { get; set; }
        public string Chainwork { get; set; }
        public AuxilliaryPowViewModel AuxPow { get; set; }
    }
}
