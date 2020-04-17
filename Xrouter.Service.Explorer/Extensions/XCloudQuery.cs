using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Xrouter.Service.Explorer.Extensions
{
    public class XCloudQuery : IQueryObject
    {
        public int Page { get; set; }
        public byte PageSize { get; set; }
    }
}
