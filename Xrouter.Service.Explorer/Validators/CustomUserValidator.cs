using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xrouter.Service.Explorer.Core.Models;

namespace Xrouter.Service.Explorer.Validators
{
    public class CustomUserValidator<TUser> : IUserValidator<TUser>, ICustomUserValidator<TUser>
            where TUser : ApplicationUser

    {
        public async Task<IdentityResult> ValidateAsync(UserManager<TUser> manager, TUser user)
        {
            var existingUser = await manager.FindByNameAsync(user.UserName);
            if(existingUser.UserName == user.UserName && existingUser.Discriminator == user.Discriminator)
            {
                return await Task.FromResult(IdentityResult.Failed(new IdentityError
                {
                    Code = "UserAlreadyExists",
                    Description = "Name " + user.UserName + "#" + user.Discriminator + " is already taken."
                }));
            }
            return await Task.FromResult(IdentityResult.Success);
        }        
    }
}
