using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Xrouter.Service.Explorer.Controllers.ViewModels
{
    public class ServiceRequestViewModel
    {
        public string Service { get; set; }
        public object[] Parameters { get; set; }
        public int NodeCount { get; set; }
    }
}
