using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AspNet.Security.OAuth.Discord;
using blocknet_xrouter.Controllers.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Xrouter.Service.Explorer.Controllers.ViewModels;
using Xrouter.Service.Explorer.Core;
using Xrouter.Service.Explorer.Core.Models;
using Xrouter.Service.Explorer.Helpers;

namespace Xrouter.Service.Explorer.Controllers
{
    [Route("api/[controller]")]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _repository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IAuthorizationService authorizationService;
        private readonly string defaultLogoUrl = "../../assets/discord-default-logo.png";
        public CommentController(ICommentRepository repository, IUnitOfWork unitOfWork, IAuthorizationService authorizationService)
        {
            this._repository = repository;
            this._unitOfWork = unitOfWork;
            this.authorizationService = authorizationService;
        }

        private string GetUserId()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
            string id = null;
            if (userIdClaim != null)
            {
                id = userIdClaim.Value;
            }
            return id;
        }

        private string GetAvatarUrl(string discordId = null)
        {
            var avatarClaim = User.FindFirst(DiscordAuthenticationDefaults.AvatarClaimType);
            if(string.IsNullOrEmpty(discordId))
                discordId = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            string avatarUrl = defaultLogoUrl;
            if (avatarClaim != null)
            {
                avatarUrl = "https://cdn.discordapp.com/avatars/" + discordId + "/" + avatarClaim.Value + ".png";
            }
            return avatarUrl;
        }

        [HttpGet("[action]")]
        public IActionResult GetServiceComments(string serviceId, string nodePubKey)
        {
            var comments = _repository.GetServiceComments(serviceId, nodePubKey).ToList();

            var commentsViewModel = new List<CommentViewModel>();
            foreach (var comment in comments)
            {
                commentsViewModel.Add(CreateCommentViewModel(comment));
            }
            return Ok(commentsViewModel);
        }

        [HttpPost("[action]")]
        // [ValidateAntiForgeryToken]
        public async Task<IActionResult> NewComment([FromBody] NewCommentViewModel newCommentViewModel)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            //TODO: Replace w/ PK id value
            List<int> numlist = new List<int>();
            var comments = _repository.GetComments().ToList();
            int num;
            if (comments.Count() != 0)
            {
                foreach (var cmnt in comments)
                {
                    var comid = cmnt.Id;
                    Int32.TryParse(comid.Replace("cmt", ""), out num);
                    numlist.Add(num);
                }
                numlist.Sort();
                num = numlist.Last();
                num++;
            }
            else
            {
                num = 1;
            }
            var newid = "cmt" + num.ToString();
            DateTime now = DateTime.Now;
            var comment = new Comment()
            {
                Id = newid,
                ServiceId = newCommentViewModel.ServiceId,
                NodePubKey = newCommentViewModel.NodePubKey,
                DateTime = now,
                UserId = GetUserId(),
                Username = User.Identity.Name,
                Body = newCommentViewModel.CommentBody,
                CommentId = newCommentViewModel.CommentId
            };

            var authorizationResult = await authorizationService.AuthorizeAsync(User, comment, "CanCrudOwnComment");

            if (authorizationResult.Succeeded)
            {
                _repository.AddNewComment(comment);
                _unitOfWork.Complete();  
                return Ok(CreateCommentViewModel(comment));
            }
            else if (User.Identity.IsAuthenticated)
            {
                return new ForbidResult();
            }
            else
            {
                return new ChallengeResult();
            }
        }

        [HttpPut("{id}")]
        // [ValidateAntiForgeryToken]
        public async Task<IActionResult> EditComment(string id, [FromBody] SaveCommentViewModel saveCommentViewModel)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var comment = _repository.GetCommentById(id);

            var authorizationResult = await authorizationService.AuthorizeAsync(User, comment, "CanCrudOwnComment");

            if (authorizationResult.Succeeded)
            {
                comment.Body = saveCommentViewModel.Body;
                comment.DateTime = DateTime.Now;
                _unitOfWork.Complete();
                return Ok(CreateCommentViewModel(comment));
            }
            else if (User.Identity.IsAuthenticated)
            {
                return new ForbidResult();
            }
            else
            {
                return new ChallengeResult();
            }            
        }

        [HttpDelete("{id}")]
        // [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteComment(string id)
        {
            var comment = _repository.GetCommentById(id);
            
            var authorizationResult = await authorizationService.AuthorizeAsync(User, comment, "CanCrudOwnComment");

            if (authorizationResult.Succeeded)
            {
                _repository.DeleteComment(comment);
                _unitOfWork.Complete();
                return Ok();
            }
            else if (User.Identity.IsAuthenticated)
            {
                return new ForbidResult();
            }
            else
            {
                return new ChallengeResult();
            }      
        }

        private bool CommentDeleteCheck(string commentid)
        {
            return _repository.CommentDeleteCheck(commentid);
        }

        private CommentViewModel CreateCommentViewModel(Comment comment)
        {
            var replies = new List<CommentViewModel>();
            if(comment.Replies != null)
            {
                foreach (var r in comment.Replies)
                {
                    replies.Add(new CommentViewModel
                    {
                        Body = r.Body,
                        DateTime = r.DateTime.TimeAgo(),
                        Id = r.Id,
                        UserName = r.Username,
                        AvatarUrl = r.User.AvatarHash != null ? "https://cdn.discordapp.com/avatars/" + r.User.Id + "/" + r.User.AvatarHash + ".png" : defaultLogoUrl
                            
                    });
                }
            }

            var model = new CommentViewModel 
            {
                Body = comment.Body,
                DateTime = comment.DateTime.TimeAgo(),
                Id = comment.Id,
                ParentComment = comment.ParentComment == null ? null : new CommentViewModel
                {
                    Id = comment.ParentComment?.Id,
                    Body = comment.ParentComment?.Body,
                    UserName = comment.ParentComment?.Username,
                },
                Replies = replies,
                UserName = comment.Username
            };

            if(comment.User != null)
            {
                model.AvatarUrl = comment.User.AvatarHash != null ? "https://cdn.discordapp.com/avatars/" + comment.User.Id + "/" + comment.User.AvatarHash + ".png" : defaultLogoUrl;
            }
            else
            {
                model.AvatarUrl = GetAvatarUrl();
            }

            if(comment.ParentComment?.User != null)
            {
                model.ParentComment.AvatarUrl = comment.ParentComment?.User.AvatarHash != null ? "https://cdn.discordapp.com/avatars/" + comment.ParentComment.User.Id + "/" + comment.ParentComment.User.AvatarHash + ".png" : defaultLogoUrl;
            }
            
           return model;
        }
    }
}