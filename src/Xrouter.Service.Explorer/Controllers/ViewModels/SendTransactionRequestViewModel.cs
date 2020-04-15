using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Xrouter.Service.Explorer.Controllers.ViewModels
{
    public class SendTransactionRequestViewModel
    {
        public string Blockchain { get; set; }
        public string SignedTx { get; set; }
        public int NodeCount { get; set; }
    }
}
