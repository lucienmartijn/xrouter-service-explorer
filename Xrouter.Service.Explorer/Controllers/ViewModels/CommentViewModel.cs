using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xrouter.Service.Explorer.Core.Models;

namespace Xrouter.Service.Explorer.Controllers.ViewModels
{
    public class CommentViewModel
    {
        public CommentViewModel() { }
        public int Id { get; set; }
        public string DateCreated { get; set; }
        public string DateCreatedIndication { get; set; }
        public string DateModified { get; set; }
        public string DateModifiedIndication { get; set; }
        public IList<CommentViewModel> Replies { get; set; }
        public string Body { get; set; }
        public CommentViewModel ParentComment { get; set; }
        public string UserName { get; set; }
        public bool Verified { get; set; }
        public string UserId { get; set; }
        public string AvatarUrl { get; set; }
    }
}
