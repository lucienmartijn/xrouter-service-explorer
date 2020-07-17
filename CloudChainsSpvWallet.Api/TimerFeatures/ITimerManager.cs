using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudChainsSpvWallet.Api.TimerFeatures
{
    public interface ITimerManager
    {
        void Execute(object stateInfo);
    }
}
