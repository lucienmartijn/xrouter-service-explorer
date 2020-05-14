using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Comments.Api.Core;
using Database.Core;
using Database.Core.Models;
using Database.Persistence;
using Microsoft.EntityFrameworkCore;

namespace Comments.Api.Persistence
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
                    .ThenInclude(c => c.MyServiceNodes)
                .Include(c => c.ParentComment)
                    .ThenInclude(c => c.User)
                .Where(p => p.ServiceId == serviceId && p.NodePubKey == nodePubKey)
                .ToList();
        }
        public IList<Comment> GetCommentsByServiceIdAndNodePubKey(string serviceId, string nodePubKey)
        {
            return _context.Comments.Where(p => p.ServiceId == serviceId && p.NodePubKey == nodePubKey).ToList();
        }

        public bool CommentDeleteCheck(int commentid)
        {
            return _context.Comments.Where(x => x.Id == commentid).Select(x => x.Deleted).FirstOrDefault();
        }

        public string GetServiceIdByComment(int commentId)
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

        public Comment GetCommentById(int id)
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
