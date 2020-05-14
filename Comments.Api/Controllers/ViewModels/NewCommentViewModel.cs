namespace Comments.Api.Controllers.ViewModels
{
    public class NewCommentViewModel
    {
        public int? ParentCommentId { get; set; } = null;
        public string CommentBody { get; set; }
        public string ServiceId { get; set; }
        public string NodePubKey { get; set; }
    }
}