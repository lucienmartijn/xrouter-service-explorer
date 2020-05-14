using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Comments.Api.Controllers.ViewModels
{
    public class ReplyViewModel
    {
        public string Id { get; set; }
        public string CommentId { get; set; }
        public string ParentReplyId { get; set; }
        public DateTime DateTime { get; set; }
        public string Username { get; set; }        

        public string Body { get; set; }
    }
}
