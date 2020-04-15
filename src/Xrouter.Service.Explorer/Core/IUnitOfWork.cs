using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Xrouter.Service.Explorer.Core
{
    public interface IUnitOfWork
    {
        void Complete();
    }
}
