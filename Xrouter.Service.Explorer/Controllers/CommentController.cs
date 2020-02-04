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

namespace Xrouter.Service.Explorer.Controllers
{
    [Route("api/[controller]")]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _repository;
        private readonly IUnitOfWork _unitOfWork;
        private readonly string defaultLogoUrl = "../../assets/discord-default-logo.png";
        public CommentController(ICommentRepository repository, IUnitOfWork unitOfWork)
        {
            _repository = repository;
            _unitOfWork = unitOfWork;
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

        private string GetAvatarUrl()
        {
            var avatarClaim = User.FindFirst(DiscordAuthenticationDefaults.AvatarClaimType);
            var id = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            string avatarUrl = defaultLogoUrl;
            if (avatarClaim != null)
            {
                avatarUrl = "https://cdn.discordapp.com/avatars/" + id + "/" + avatarClaim.Value + ".png";
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
                var replies = new List<CommentViewModel>();
                if(comment.Replies != null)
                {
                    foreach (var r in comment.Replies)
                    {
                        replies.Add(new CommentViewModel
                        {
                            Body = r.Body,
                            DateTime = r.DateTime,
                            Id = r.Id,
                            UserName = r.Username,
                            AvatarUrl = r.User.AvatarHash != null ? "https://cdn.discordapp.com/avatars/" + r.User.Id + "/" + r.User.AvatarHash + ".png" : defaultLogoUrl
                              
                        });
                    }
                }
                commentsViewModel.Add(new CommentViewModel
                {
                    AvatarUrl = comment.User.AvatarHash != null ? "https://cdn.discordapp.com/avatars/" + comment.User.Id + "/" + comment.User.AvatarHash + ".png" : defaultLogoUrl,
                    Body = comment.Body,
                    DateTime = comment.DateTime,
                    Id = comment.Id,
                    ParentComment = comment.ParentComment == null ? null : new CommentViewModel
                    {
                        Id = comment.ParentComment?.Id,
                        Body = comment.ParentComment?.Body,
                        UserName = comment.ParentComment?.Username,
                        AvatarUrl = comment.ParentComment?.User.AvatarHash != null ? "https://cdn.discordapp.com/avatars/" + comment.ParentComment.User.Id + "/" + comment.ParentComment.User.AvatarHash + ".png" : defaultLogoUrl
                    },
                    Replies = replies,
                    UserName = comment.User.UserName
                });
            }
            return Ok(commentsViewModel);
        }

        [HttpPost("[action]")]
        // [ValidateAntiForgeryToken]
        public IActionResult NewComment([FromBody] NewCommentViewModel newCommentViewModel)
        {
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
            _repository.AddNewComment(comment);
            _unitOfWork.Complete();

            var commentViewModel = new CommentViewModel
            {
                AvatarUrl = GetAvatarUrl(),
                Body = newCommentViewModel.CommentBody,
                DateTime = now,
                Id = newid,
                UserName = User.Identity.Name,
                Replies = new List<CommentViewModel>()
            };

            return Ok(commentViewModel);
        }

        [HttpPut("{id}")]
        // [ValidateAntiForgeryToken]
        public IActionResult EditComment(string id, string body)
        {
            var comment = _repository.GetCommentById(id);
            comment.Body = body;
            comment.DateTime = DateTime.Now;
            _unitOfWork.Complete();
            return Ok(comment);
        }

        [HttpDelete("{id}")]
        // [ValidateAntiForgeryToken]
        public IActionResult DeleteComment(string id)
        {
            var comment = _repository.GetCommentById(id);
            

            if (comment == null)
                return NotFound();

            _repository.DeleteComment(comment);
            _unitOfWork.Complete();

            return Ok();
        }

        private bool CommentDeleteCheck(string commentid)
        {
            return _repository.CommentDeleteCheck(commentid);
        }

        private CommentViewModel CreateCommentViewModel(string serviceId, string nodePubKey, string sortOrder)
        {
            CommentViewModel model = new CommentViewModel();

            var comments = _repository.GetCommentsByServiceIdAndNodePubKey(serviceId, nodePubKey).OrderByDescending(d => d.DateTime).ToList();
            foreach (var comment in comments)
            {

                switch (sortOrder)
                {
                    case "date_asc":
                        comments = comments.OrderBy(x => x.DateTime).ToList();
                        break;
                    default:
                        comments = comments.OrderByDescending(x => x.DateTime).ToList();
                        break;
                }

                //model.Comments = comments;
            }
            return model;
        }
    }
}