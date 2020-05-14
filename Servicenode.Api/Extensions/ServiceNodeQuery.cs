using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Servicenode.Api.Extensions
{
    public class ServiceNodeQuery : IQueryObject
    {
        public string SpvWallet { get; set; }
        public string XCloudService { get; set; }
        public string Type { get; set; }
        public string Search { get; set; }
        public int Page { get; set; }
        public byte PageSize { get; set; }
    }
}
