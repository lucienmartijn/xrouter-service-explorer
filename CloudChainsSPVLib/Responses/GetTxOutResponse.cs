using CloudChainsSPVLib.Responses.SharedComponents;
using System;
using System.Collections.Generic;
using System.Text;

namespace CloudChainsSPVLib.Responses
{
    public class GetTxOutResponse
    {
        public int Confirmations { get; set; }
        public decimal Value { get; set; }
        public ScriptPubKey ScriptPubKey { get; set; }
        public bool CoinBase { get; set; }
    }
}
