using System;
using System.Collections.Generic;
using System.Text;

namespace BlocknetLib.Services.Coins.Blocknet.XBridge
{
    public class GetTradingData
    {
        public long Timestamp { get; set; }
        public string Fee_txid { get; set; }
        public string NodePubKey { get; set; }
        public string Id { get; set; }
        public string Taker { get; set; }
        public decimal Taker_size { get; set; }
        public string Maker { get; set; }
        public decimal Maker_size { get; set; }
    }
}
