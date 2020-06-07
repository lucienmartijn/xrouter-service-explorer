using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace XRouter.Api.Controllers.ViewModels.BitcoinBased
{
    public class TransactionViewModel : GetRawTransactionResponseViewModel
    {
        public int Size { get; set; }
    }
}
