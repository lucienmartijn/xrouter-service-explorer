using System.Collections.Generic;
using BlocknetLib.Responses;
using BlocknetLib.Responses.SharedComponents;

namespace BlocknetLib.Responses
{
    public class RawTransactionResponse : GetRawTransactionResponse
    {
        public int Size { get; set; }
    }
}