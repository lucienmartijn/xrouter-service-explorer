using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Xrouter.Service.Explorer.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string AvatarHash { get; set; }
        public string Discriminator { get; set; }
        public bool? Verified { get; set; }
    }
}
