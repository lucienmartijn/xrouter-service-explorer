using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Xrouter.Service.Explorer.BitcoinLib.Services.Coins.Blocknet.XRouter.BitcoinBased
{
    public class GetBlockCountRequest:RequestBase
    {
        public string Blockchain { get; set; }
        public int NodeCount { get; set; }
    }
}
