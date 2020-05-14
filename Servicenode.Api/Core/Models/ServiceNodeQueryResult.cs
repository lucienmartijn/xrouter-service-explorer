using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Servicenode.Api.Core.Models
{
    public class ServiceNodeQueryResult<T>:QueryResult<T>
    {
        public int TotalSpvWallets { get; set; }
        public int TotalXCloudServices { get; set; }
    }
}
