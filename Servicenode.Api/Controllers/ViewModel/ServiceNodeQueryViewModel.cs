using System.Collections.Generic;
using BlocknetLib.RPC.RequestResponse;
using Newtonsoft.Json;

namespace Servicenode.Api.Controllers.ViewModels
{
    public class ServiceNodeQueryViewModel : QueryViewModel
    {
        public string SpvWallet{ get; set; }
        public string XCloudService{ get; set; }
        public string Type { get; set; }
        public string Search { get; set; }
    }
}
