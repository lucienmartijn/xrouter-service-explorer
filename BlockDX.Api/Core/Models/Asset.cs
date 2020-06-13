using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlockDX.Api.Core.Models
{
    public class Asset
    {
        public string Blockchain { get; set; }
        public string Ticker { get; set; }
        [JsonProperty(PropertyName = "ver_Id")]
        public string VerId { get; set; }
        [JsonProperty(PropertyName = "ver_name")]
        public string VerName { get; set; }
        [JsonProperty(PropertyName = "conf_name")]
        public string ConfName { get; set; }
        [JsonProperty(PropertyName = "dir_name_linux")]
        public string DirNameLinux { get; set; }
        [JsonProperty(PropertyName = "dir_name_mac")]
        public string DirNameMac { get; set; }
        [JsonProperty(PropertyName = "dir_name_win")]
        public string Dir_Name_Win { get; set; }
        [JsonProperty(PropertyName = "repo_url")]
        public string RepoUrl { get; set; }
        public List<string> Versions { get; set; }
        [JsonProperty(PropertyName = "xbridge_conf")]
        public string XBridgeConf { get; set; }
        [JsonProperty(PropertyName = "wallet_conf")]
        public string WalletConf { get; set; }
    }
}
