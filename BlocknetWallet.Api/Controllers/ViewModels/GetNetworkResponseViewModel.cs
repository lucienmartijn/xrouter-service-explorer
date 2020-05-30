using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlocknetWallet.Api.Controllers.ViewModels
{
    public class GetNetworkResponseViewModel
    {
        public uint Version { get; set; }
        public string Subversion { get; set; }
        public uint ProtocolVersion { get; set; }
        public uint XBridgeProtocolVersion { get; set; }
        public uint XRouterProtocolVersion { get; set; }
    }
}
