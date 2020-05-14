using Database.Core.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Authentication.Api.Validators
{
    public interface ICustomUserValidator<TUser> : IUserValidator<TUser> where TUser : ApplicationUser
    {
    }
}
