using CoinInfo.Api.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace CoinInfo.Api.Controllers
{
    [Route("api/coininfo")]
    [ApiController]
    public class CoinInfoController : ControllerBase
    {
        private readonly IEnumerable<ICryptoCurrencyApiAdapter> _cryptoCurrencyApiAdapters;
        public CoinInfoController(IEnumerable<ICryptoCurrencyApiAdapter> cryptoCurrencyApiAdapters)
        {
            _cryptoCurrencyApiAdapters = cryptoCurrencyApiAdapters;
        }

        [HttpGet("[action]")]
        public IActionResult GetAllCoins([FromHeader] string apiName)
        {
            if (string.IsNullOrEmpty(apiName))
                return BadRequest("No ApiName given");

            var adapter = GetAdapter(apiName);
            var coins = adapter.GetAllCoins();

            return Ok(coins);
        }

        [HttpGet("[action]")]
        public IActionResult GetExchangeRates([FromHeader] string apiName, [FromQuery]string coins, [FromQuery]string units)
        {
            if (string.IsNullOrEmpty(apiName))
                return BadRequest("No ApiName given");

            var adapter = GetAdapter(apiName);
            var exchangeRates = adapter.GetExchangeRates(coins, units);

            return Ok(exchangeRates);
        }

        private ICryptoCurrencyApiAdapter GetAdapter(string name)
        {
            return _cryptoCurrencyApiAdapters.FirstOrDefault(a => a.GetApiName().Equals(name));
        }
    }
}
