using System;
using System.Collections.Generic;
using System.Text;

namespace CloudChainsSPVLib.CoinParameters.Bitcoin
{
    public static class BitcoinConstants
    {
        public sealed class Constants : CoinConstants<Constants>
        {
            public readonly int OneBitcoinInSatoshis = 100000000;
            public readonly decimal OneSatoshiInBTC = 0.00000001M;
            public readonly int SatoshisPerBitcoin = 100000000;
            public readonly string Symbol = "฿";
        }
    }
}
