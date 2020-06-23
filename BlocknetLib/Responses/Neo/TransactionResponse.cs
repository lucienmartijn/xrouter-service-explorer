using BlocknetLib.Responses.Neo.SharedComponents;
using Newtonsoft.Json;

namespace BlocknetLib.Responses.Neo
{
    public class TransactionResponse
    {
        public string TxId { get; set; }
        public int Size { get; set; }
        public string Type { get; set; }
        public int Version { get; set; }
        public Attribute[] Attributes { get; set; }
        public Vin[] Vin { get; set; }
        public Vout[] Vout { get; set; }
        [JsonProperty("sys_fee")]
        public int SysFee { get; set; }
        [JsonProperty("net_fee")]
        public int NetFee { get; set; }
        public Script[] Scripts { get; set; }
        public long Nonce { get; set; }
    }
}