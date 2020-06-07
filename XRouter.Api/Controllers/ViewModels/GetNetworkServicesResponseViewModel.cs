using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace XRouter.Api.Controllers.ViewModels
{
    public class GetNetworkServicesResponseViewModel : XRouterBaseResponseViewModel
    {
        public NetworkServicesResponseViewModel Reply { get; set; }
        
    }
}
