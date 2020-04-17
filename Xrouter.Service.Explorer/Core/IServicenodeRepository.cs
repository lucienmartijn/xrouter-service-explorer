using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xrouter.Service.Explorer.Core.Models;

namespace Xrouter.Service.Explorer.Core
{
    public interface IServicenodeRepository
    {
        List<MyServicenode> GetServiceNodes(string id);
        void AddServiceNode(MyServicenode node);
        void RemoveServiceNode(MyServicenode node);

        MyServicenode GetServicenode(int id);
        MyServicenode GetServicenode(string sNodeKey);
    }
}
