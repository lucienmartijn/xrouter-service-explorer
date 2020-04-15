using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Xrouter.Service.Explorer.Extensions
{
    public interface IQueryObject
    {
        int Page { get; set; }
        byte PageSize { get; set; }
    }
}
