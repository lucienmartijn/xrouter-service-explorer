using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xrouter.Service.Explorer.Core.Models;

namespace Xrouter.Service.Explorer.Validators
{
    public interface ICustomUserValidator<TUser> : IUserValidator<TUser> where TUser : ApplicationUser
    {
    }
}
