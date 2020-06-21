using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace XRouter.Api.Controllers.ViewModels.Neo
{
    public class TransactionResponseViewModel
    {
        public string TxId { get; set; }
        public int Size { get; set; }
        public string Type { get; set; }
        public int Version { get; set; }
        public string[] Attributes { get; set; }
        public VinViewModel[] Vin { get; set; }

        public VoutViewModel[] Vout { get; set; }
        //sys_fee
        public int SysFee { get; set; }
        //net_fee
        public int NetFee { get; set; }
        public ScriptViewModel[] Scripts { get; set; }
        public long Nonce { get; set; }
    }
}
