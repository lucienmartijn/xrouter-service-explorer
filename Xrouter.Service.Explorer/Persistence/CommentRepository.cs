using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xrouter.Service.Explorer.Controllers.ViewModels;
using Xrouter.Service.Explorer.Core;
using Xrouter.Service.Explorer.Core.Models;

namespace Xrouter.Service.Explorer.Persistence
{
    public class CommentRepository : ICommentRepository
    {
        private readonly ApplicationDbContext _context;

        public CommentRepository(ApplicationDbContext context, IUnitOfWork unitOfWork)
        {
            _context = context;
        }
        

        public IList<Comment> GetServiceComments(string serviceId, string nodePubKey)
        {
           return _context.Comments
                .Include(c => c.User)
                .Include(c => c.ParentComment)
                    .ThenInclude(c => c.User)
                .Where(p => p.ServiceId == serviceId && p.NodePubKey == nodePubKey)
                .ToList();
        }
        public IList<Comment> GetCommentsByServiceIdAndNodePubKey(string serviceId, string nodePubKey)
        {
            return _context.Comments.Where(p => p.ServiceId == serviceId && p.NodePubKey == nodePubKey).ToList();
        }

        public bool CommentDeleteCheck(string commentid)
        {
            return _context.Comments.Where(x => x.Id == commentid).Select(x => x.Deleted).FirstOrDefault();
        }

        public string GetServiceIdByComment(string commentId)
        {
            return _context.Comments.Where(x => x.Id == commentId).Select(x => x.ServiceId).FirstOrDefault();
        }


        public IList<Comment> GetComments()
        {
            return _context.Comments.ToList();
        }
        public void AddNewComment(Comment comment)
        {
            _context.Comments.Add(comment);
        }

        public Comment GetCommentById(string id)
        {
            return _context.Comments
                .Include(c => c.User)
                .Include(c => c.ParentComment)
                    .ThenInclude(c => c.User)
                .Include(c => c.Replies)
                .SingleOrDefault(c => c.Id == id);
        }

        public void DeleteComment(Comment comment)
        {
            _context.Comments.Remove(comment);
        }

        private bool disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
