using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace XRouter.Api.Controllers.ViewModels.BitcoinBased
{
    public class GetRawTransactionResponseViewModel
    {
        public string Hex { get; set; }
        public long Version { get; set; }
        public uint LockTime { get; set; }
        public List<VinViewModel> Vin { get; set; }
        public List<VoutViewModel> Vout { get; set; }
        public string BlockHash { get; set; }
        public int Confirmations { get; set; }
        public uint Time { get; set; }
        public uint BlockTime { get; set; }
        public string TxId { get; set; }
    }
}
