using System.Collections.Generic;
using BitcoinLib.Responses;
using BitcoinLib.Responses.SharedComponents;

namespace BitcoinLib.Services.Coins.Blocknet.Xrouter.BitcoinBased
{
    public class RawTransactionResponse:GetRawTransactionResponse
    {
        public int Size { get; set; }
    }

    
}