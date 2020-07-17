using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudChainsSpvWallet.Api.Controllers.ViewModels
{
    public class AvailableCloudChainsCoin
    {
        public string Ticker { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
    }
}
