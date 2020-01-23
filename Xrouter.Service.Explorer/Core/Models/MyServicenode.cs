using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Xrouter.Service.Explorer.Core.Models
{
    public class MyServicenode
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public string NodePubKey { get; set; }
        public bool Ownership { get; set; }
        public bool Active { get; set; }

        public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
    }
}
