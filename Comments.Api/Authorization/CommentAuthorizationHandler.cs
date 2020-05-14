using Database.Core.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Comments.Api.Authorization
{
    public class CommentAuthorizationHandler : AuthorizationHandler<SameUserCommentRequirement, Comment>
    {
        private readonly UserManager<ApplicationUser> _userManager;
        public CommentAuthorizationHandler(UserManager<ApplicationUser>
            userManager)
        {
            _userManager = userManager;
        }
        protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, SameUserCommentRequirement requirement, Comment comment)
        {
            string userId = _userManager.GetUserId(context.User);
            if (userId == comment.UserId)
            {
                context.Succeed(requirement);
            }

            return Task.CompletedTask;
        }
    }

    public class SameUserCommentRequirement : IAuthorizationRequirement { }
}

