using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlockDX.Api.Core.Models
{
    public class XCloudServiceRequestViewModel
    {
        public string Service { get; set; }
        public object[] Parameters { get; set; }
        public int NodeCount { get; set; }
    }
}
