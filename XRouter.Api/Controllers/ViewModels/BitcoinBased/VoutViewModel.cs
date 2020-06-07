namespace XRouter.Api.Controllers.ViewModels.BitcoinBased
{
    public class VoutViewModel
    {
        public decimal Value { get; set; }
        public int N { get; set; }
        public ScriptPubKeyViewModel ScriptPubKey { get; set; }
    }
}