using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xrouter.Service.Explorer.Controllers.ViewModels;
using Xrouter.Service.Explorer.Core.Models;

namespace Xrouter.Service.Explorer.Core
{
    public interface ICommentRepository:IDisposable
    {        
        IList<Comment> GetServiceComments(string serviceId, string nodePubKey);
        bool CommentDeleteCheck(string commentid);
        string GetServiceIdByComment(string commentId);
        IList<Comment> GetCommentsByServiceIdAndNodePubKey(string serviceId, string nodePubKey);
        IList<Comment> GetComments();
        void AddNewComment(Comment comment);
        Comment GetCommentById(string id);
        void DeleteComment(Comment comment);
    }
}

