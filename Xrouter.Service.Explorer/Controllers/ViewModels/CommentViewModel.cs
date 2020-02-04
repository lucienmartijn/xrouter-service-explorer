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
        public DateTime DateTime { get; set; }
        public IList<CommentViewModel> Replies { get; set; }
        public string Body { get; set; }
        public string Id { get; set; }
        public CommentViewModel ParentComment { get; set; }
        public string UserName { get; set; }
        public string AvatarUrl { get; set; }
    }
}
