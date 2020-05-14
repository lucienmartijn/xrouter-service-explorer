using Database.Core.Models;
using Database.Persistence;
using Microsoft.EntityFrameworkCore;
using MyServicenodes.Api.Core;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyServicenodes.Api.Persistence
{
    public class MyServicenodeRepository : IMyServicenodeRepository
    {
        private readonly ApplicationDbContext context;

        public MyServicenodeRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public void AddServiceNode(MyServicenode node)
        {
            context.ServiceNodes.Add(node);
        }

        public MyServicenode GetServicenode(int id)
        {
            return context.ServiceNodes
                .Include(sn => sn.ApplicationUser)
                .SingleOrDefault(sn => sn.Id == id);
        }

        public MyServicenode GetServicenode(string sNodeKey)
        {
            return context.ServiceNodes
                .Include(sn => sn.ApplicationUser)
                .SingleOrDefault(sn => sn.SNodeKey == sNodeKey);
        }

        public List<MyServicenode> GetServiceNodes(string id)
        {
            return context.ServiceNodes
                .Where(sn => sn.ApplicationUserId == id)
                .ToList();
        }

        public void RemoveServiceNode(MyServicenode node)
        {
            context.ServiceNodes.Remove(node);
        }
    }
}
