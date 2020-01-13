using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using AspNet.Security.OAuth.Discord;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Xrouter.Service.Explorer.Extensions;
using Xrouter.Service.Explorer.Core.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Xrouter.Service.Explorer.Controllers
{
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        public AccountController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }
        [HttpGet("[action]")]
        public IActionResult SignInWithGoogle()
        {
            var authenticationProperties = _signInManager.ConfigureExternalAuthenticationProperties("Google", Url.Action(nameof(HandleExternalLogin)));
            return Challenge(authenticationProperties, "Google");
        }

        [HttpGet("[action]")]
        public IActionResult SignInWithDiscord()
        {
            var authenticationProperties = _signInManager.ConfigureExternalAuthenticationProperties("Discord", Url.Action(nameof(HandleExternalLogin)));
            return Challenge(authenticationProperties, "Discord");
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> HandleExternalLogin()
        {
            var info = await _signInManager.GetExternalLoginInfoAsync();
            var result = await _signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, isPersistent: false);
            
            if (!result.Succeeded) //user does not exist yet
            {
                var userName = info.Principal.FindFirstValue(ClaimTypes.Name);
                var userId = info.Principal.FindFirstValue(ClaimTypes.NameIdentifier);
                var avatarHash = info.Principal.FindFirstValue(DiscordAuthenticationDefaults.AvatarClaimType);
                var discriminator = info.Principal.FindFirstValue(DiscordAuthenticationDefaults.DiscriminatorClaimType);
                var newUser = new ApplicationUser
                {
                    Id = userId,
                    UserName = userName,
                    AvatarHash = avatarHash,
                    Discriminator = discriminator
                };

                var createResult = await _userManager.CreateAsync(newUser);
                if (!createResult.Succeeded)
                    throw new Exception(createResult.Errors.Select(e => e.Description).Aggregate((errors, error) => $"{errors}, {error}"));

                await _userManager.AddLoginAsync(newUser, info);
                var newUserClaims = info.Principal.Claims.Append(new Claim("userId", newUser.Id));
                await _userManager.AddClaimsAsync(newUser, newUserClaims);
                await _signInManager.SignInAsync(newUser, isPersistent: false);
                await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);
            }

            return Redirect("/");
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return Redirect("/");
        }

        [HttpGet("[action]")]
        public IActionResult IsAuthenticated()
        {
            return new ObjectResult(User.Identity.IsAuthenticated);
        }

        [HttpGet("[action]")]
        [Authorize]
        public IActionResult Name()
        {
            var claimsPrincial = (ClaimsPrincipal)User;
            var name = claimsPrincial.FindFirst(ClaimTypes.Name).Value;
            var discriminator = claimsPrincial.FindFirst(DiscordAuthenticationDefaults.DiscriminatorClaimType).Value;
            return Ok(name + "#" + discriminator);
        }

        [HttpGet("[action]")]
        [Authorize]
        public IActionResult AvatarUrl()
        {
            var claimsPrincial = (ClaimsPrincipal)User;
            var id = claimsPrincial.FindFirst(ClaimTypes.NameIdentifier).Value;
            var avatarClaim = claimsPrincial.FindFirst(DiscordAuthenticationDefaults.AvatarClaimType);
            if (avatarClaim != null)
            {
                var avatarHash = avatarClaim.Value;
                return Ok("https://cdn.discordapp.com/avatars/" + id + "/" + avatarHash + ".png");
            }
            
            return Ok("../../assets/discord-default-logo.png");
        }

    }
}
