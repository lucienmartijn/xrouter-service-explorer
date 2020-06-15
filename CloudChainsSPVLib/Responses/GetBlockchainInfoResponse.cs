namespace CloudChainsSPVLib.Responses
{
    public class GetBlockchainInfoResponse
    {
        public string Chain { get; set; }
        public ulong Blocks { get; set; }
        public ulong Headers { get; set; }
        public double VerificationProgress { get; set; }
        public double Difficulty { get; set; }
        public bool InitialBlockDownload { get; set; }
        public bool Pruned { get; set; }
    }
}