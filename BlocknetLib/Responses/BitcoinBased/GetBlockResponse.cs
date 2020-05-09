// Copyright (c) 2014 - 2016 George Kimionis
// See the accompanying file LICENSE for the Software License Aggrement

using System.Collections.Generic;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;

namespace BlocknetLib.Responses
{
    public class GetBlockResponse : ErrorResponse
    {
        public GetBlockResponse()
        {
            Tx = new List<string>();
        }

    public List<string> Tx { get; set; }
        public int NTx { get; set; }
        public string Hash { get; set; }
        public int Confirmations { get; set; }
        public int StrippedSize { get; set; }
        public int Size { get; set; }
        public int Weight { get; set; }
        public int Height { get; set; }
        public int Version { get; set; }
        public string MerkleRoot { get; set; }
        public double Difficulty { get; set; }
        public string ChainWork { get; set; }
        public string PreviousBlockHash { get; set; }
        public string NextBlockHash { get; set; }
        public string Bits { get; set; }
        public int Time { get; set; }
        public string Nonce { get; set; }
    }
}
