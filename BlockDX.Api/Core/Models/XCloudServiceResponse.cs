using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlockDX.Api.Core.Models
{
    public class XCloudServiceResponse<T>
    {
        public T Reply { get; set; }

        public string Uuid { get; set; }
    }
}
