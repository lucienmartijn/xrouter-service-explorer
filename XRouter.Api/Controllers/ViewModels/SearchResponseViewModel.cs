using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace XRouter.Api.Controllers.ViewModels
{
    public class SearchResponseViewModel
    {
        public List<ServiceViewModel> Items { get; set; }
        public int TotalItems { get; set; }
    }
}
