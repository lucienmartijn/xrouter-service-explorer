using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xrouter.Service.Explorer.Core.Models;

namespace Xrouter.Service.Explorer.Authorization
{
    public class ServicenodeAuthorizationHandler : AuthorizationHandler<SameUserServiceNodeRequirement, MyServicenode>
    {
        private readonly UserManager<ApplicationUser> _userManager;
        public ServicenodeAuthorizationHandler(UserManager<ApplicationUser>
            userManager)
        {
            _userManager = userManager;
        }
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, SameUserServiceNodeRequirement requirement, MyServicenode resource)
        {
            string userId = _userManager.GetUserId(context.User);
            if (userId == resource.ApplicationUserId)
            {
                context.Succeed(requirement);
            }

            return Task.CompletedTask;
        }
    }

    public class SameUserServiceNodeRequirement : IAuthorizationRequirement { }
}

