using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace XRouter.Api.Controllers.ViewModels.BitcoinBased
{
    public class RawTransactionResponseViewModel : GetRawTransactionResponseViewModel
    {
        public int Size { get; set; }
    }
}
