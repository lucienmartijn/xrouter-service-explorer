using System;
using System.Collections.Generic;
using System.Text;

namespace BlocknetLib.Responses.Neo.SharedComponents
{
    public class Vin
    {
        public string TxId { get; set; }
        public int Vout { get; set; }
    }
}
