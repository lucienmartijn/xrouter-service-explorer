using System;
using System.Collections.Generic;
using System.Linq;
using BlocknetLib.ExceptionHandling.Rpc;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.Services.Coins.Base;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace BlocknetWallet.Api.Controllers
{
    [Route("api/[controller]")]
    public class BlocknetController : ControllerBase 
    {
        private readonly ICoinService coinService;
        public BlocknetController(ICoinService coinService){
            this.coinService = coinService;
        }

        [HttpGet("[action]")]
        public IActionResult BlockCount(){
            return Ok(coinService.GetBlockCount());
        }

        [HttpGet("[action]")]
        public IActionResult VerifyMessage(string address, string signature, string message)
        {
            return Ok(coinService.VerifyMessage(address, signature, message));
        }
    }
}
