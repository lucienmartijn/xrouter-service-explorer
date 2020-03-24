using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xrouter.Service.Explorer.Core;
using Xrouter.Service.Explorer.Core.Models;

namespace Xrouter.Service.Explorer.Persistence
{
    public class ServicenodeRepository : IServicenodeRepository
    {
        private readonly ApplicationDbContext context;

        public ServicenodeRepository(ApplicationDbContext context)
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
