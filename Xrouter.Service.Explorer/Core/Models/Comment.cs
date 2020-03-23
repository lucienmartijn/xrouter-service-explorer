using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Xrouter.Service.Explorer.Core.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string ServiceId { get; set; }
        public string NodePubKey { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
        public string Username { get; set; }
        [Required]
        [StringLength(1000)]
        public string Body { get; set; }
        [DefaultValue(0)]
        public bool Deleted { get; set; }
        public int? ParentCommentId { get; set; }
        public Comment ParentComment {get; set;}
        public virtual ICollection<Comment> Replies { get; set; }

    }
}
