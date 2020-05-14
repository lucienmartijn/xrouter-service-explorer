using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Servicenode.Api.Core.Models
{
    public class ServiceNodeInfoResponse
    {
        public string SNodeKey { get; set; }
        public string Tier { get; set; }
        public string Status { get; set; }
        public string Address { get; set; }
        public int Score { get; set; }
        public string Type { get; set; }
        public DateTime TimeLastSeenStr { get; set; }
        public long TimeLastSeen { get; set; }
        public List<string> SpvWallets { get; set; }
        public List<string> XCloudServices { get; set; }
    }
}
