using System;
using System.Collections.Generic;
using System.Text;

namespace BlocknetLib.Responses.Neo.SharedComponents
{
    public class Vout
    {
        public int N { get; set; }
        public string Asset { get; set; }
        public decimal Value { get; set; }
        public string Address { get; set; }
    }
}
