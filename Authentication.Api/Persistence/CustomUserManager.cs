using Authentication.Api.Validators;
using Database.Core.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Authentication.Api.Persistence
{
    public class CustomUserManager<TUser> : UserManager<TUser>
        where TUser : ApplicationUser
    {
        public CustomUserManager(IUserStore<TUser> store, IOptions<IdentityOptions> optionsAccessor,
            IPasswordHasher<TUser> passwordHasher, IEnumerable<ICustomUserValidator<TUser>> userValidators,
            IEnumerable<IPasswordValidator<TUser>> passwordValidators, ILookupNormalizer keyNormalizer,
            IdentityErrorDescriber errors, IServiceProvider tokenProviders,
            ILogger<UserManager<TUser>> logger)
            : base(
                store, optionsAccessor, passwordHasher, userValidators, passwordValidators, keyNormalizer, errors,
                tokenProviders, logger)
        {

        }
    }
}
