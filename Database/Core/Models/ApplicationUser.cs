using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Database.Core.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string AvatarHash { get; set; }
        public bool? Verified { get; set; }

        public List<MyServicenode> MyServiceNodes { get; set; }
    }
}
