using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Database.Core.Models
{
    public class MyServicenode
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public string SNodeKey { get; set; }
        public bool Ownership { get; set; }
        public string Status { get; set; }

        public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
    }
}
