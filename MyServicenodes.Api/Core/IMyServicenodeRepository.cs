using Database.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace MyServicenodes.Api.Core
{
    public interface IMyServicenodeRepository
    {
        List<MyServicenode> GetServiceNodes(string id);
        void AddServiceNode(MyServicenode node);
        void RemoveServiceNode(MyServicenode node);

        MyServicenode GetServicenode(int id);
        MyServicenode GetServicenode(string sNodeKey);
    }
}
