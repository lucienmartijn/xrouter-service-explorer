using System;
using System.Collections.Generic;
using System.Linq;
using BlocknetLib.ExceptionHandling.Rpc;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using blocknet_xrouter.Controllers.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Xrouter.Service.Explorer.Controllers.ViewModels;
using Xrouter.Service.Explorer.Extensions;
using Xrouter.Service.Explorer.Core.Models;

namespace blocknet_xrouter.Controllers
{
    [Route("api/[controller]")]
    public class BlocknetController : ControllerBase 
    {
        private readonly IXRouterService _blocknetService;
        public BlocknetController(IXRouterService blocknetService){
            _blocknetService = blocknetService;
        }

        [HttpGet("[action]")]
        public uint BlockCount(){
            return _blocknetService.GetBlockCount();
        }

        [HttpGet("[action]")]
        public bool VerifyMessage(string address, string signature, string message)
        {
            return _blocknetService.VerifyMessage(address, signature, message);
        }
    }
}
