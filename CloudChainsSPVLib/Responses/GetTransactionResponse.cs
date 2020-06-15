using System.Collections.Generic;
using CloudChainsSPVLib.Responses.Bridges;
using CloudChainsSPVLib.Responses.SharedComponents;

namespace CloudChainsSPVLib.Responses
{
    //  Note: Local wallet transactions only
    public class GetTransactionResponse : ITransactionResponse
    {
        public string TxId { get; set; }
        public string Hash { get; set; }
        public long Version { get; set; }
        public int Size { get; set; }
        public int VSize { get; set; }
        public uint LockTime { get; set; }
        public List<Vin> Vin { get; set; }
        public List<Vout> Vout { get; set; }
        public string Hex { get; set; }
        public string BlockHash { get; set; }
        public int Confirmations { get; set; }
        public uint Time { get; set; }
        public uint BlockTime { get; set; }
    }
}
