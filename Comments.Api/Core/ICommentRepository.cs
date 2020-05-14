using Database.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Comments.Api.Core
{
    public interface ICommentRepository:IDisposable
    {        
        IList<Comment> GetServiceComments(string serviceId, string nodePubKey);
        bool CommentDeleteCheck(int commentid);
        string GetServiceIdByComment(int commentId);
        IList<Comment> GetCommentsByServiceIdAndNodePubKey(string serviceId, string nodePubKey);
        IList<Comment> GetComments();
        void AddNewComment(Comment comment);
        Comment GetCommentById(int id);
        void DeleteComment(Comment comment);
    }
}

