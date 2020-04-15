using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Xrouter.Service.Explorer.Controllers.ViewModels
{
    public class ServiceNodeQueryResultViewModel<T>: QueryResultViewModel<T>
    {
        public int TotalSpvWallets { get; set; }
        public int TotalXCloudServices { get; set; }
    }
}
