using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Threading.Tasks;
using Authentication.Api.Authentication;
using Database.Core.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Authentication.Api.Controllers
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
        public IActionResult SignInWithDiscord(string returnUrl)
        {
            var authenticationProperties = _signInManager.ConfigureExternalAuthenticationProperties("Discord", Url.Action(nameof(HandleExternalLogin),  new { returnUrl = returnUrl }));
            return Challenge(authenticationProperties, "Discord");
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> HandleExternalLogin(string returnUrl)
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
                    UserName = userName + "#" + discriminator,
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

            if(Url.IsLocalUrl(returnUrl)) return Redirect("/#" + returnUrl);
            return Redirect("/#");
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> Logout(string returnUrl)
        {
            await _signInManager.SignOutAsync();
            if(Url.IsLocalUrl(returnUrl)) return Redirect("/#" + returnUrl);
            return Redirect("/#");
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
            return Ok(name);
        }

        [HttpGet("[action]")]
        [Authorize]
        public IActionResult Id()
        {
            var claimsPrincial = (ClaimsPrincipal)User;
            var id = claimsPrincial.FindFirst(ClaimTypes.NameIdentifier).Value;
            return Ok(id);
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
