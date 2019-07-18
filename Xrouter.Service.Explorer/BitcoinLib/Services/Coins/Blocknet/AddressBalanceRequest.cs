using System.Collections.Generic;
using Newtonsoft.Json;

namespace BitcoinLib.Services.Coins.Blocknet
{
	public class AddressBalanceRequest
	{
		[JsonProperty("addresses")]
		public List<string> Addresses { get; set; }
	}
}