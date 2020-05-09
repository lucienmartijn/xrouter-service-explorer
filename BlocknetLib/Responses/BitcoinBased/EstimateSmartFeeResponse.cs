using System.Collections.Generic;

namespace BlocknetLib.Responses
{
    public class EstimateSmartFeeResponse
    {
        public decimal? FeeRate { get; set; }
        public uint? Blocks { get; set; }
        public IList<string> Errors { get; set; }
    }
}
