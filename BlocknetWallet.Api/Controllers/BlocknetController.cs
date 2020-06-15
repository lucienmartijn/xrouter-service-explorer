using System;
using System.Collections.Generic;
using System.Linq;
using BlocknetLib.ExceptionHandling.Rpc;
using BlocknetLib.Responses;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.Services.Coins.Base;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using BlocknetWallet.Api.Controllers.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace BlocknetWallet.Api.Controllers
{
    [Route("api/blocknet")]
    public class BlocknetController : ControllerBase 
    {
        private readonly IBlocknetService blocknetService;
        public BlocknetController(IBlocknetService blocknetService)
        {
            this.blocknetService = blocknetService;
        }

        [HttpGet("[action]")]
        public IActionResult VerifyMessage(string address, string signature, string message)
        {
            return Ok(blocknetService.VerifyMessage(address, signature, message));
        }

        [HttpGet("[action]")]
        public IActionResult GetNetworkInfo()
        {
            GetNetworkInfoResponse networkInfoResponse;
            try
            {
                networkInfoResponse = blocknetService.GetNetworkInfo();
            }
            catch (RpcInternalServerErrorException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError
                {
                    Error = e.Message,
                    Code = (int)e.RpcErrorCode.Value
                });
            }
            catch (RpcRequestTimeoutException e)
            {
                return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcXrError
                {
                    Error = e.Message,
                });
            }
            return Ok(new GetNetworkResponseViewModel
            {
                ProtocolVersion = networkInfoResponse.ProtocolVersion,
                Subversion = networkInfoResponse.Subversion,
                Version = networkInfoResponse.Version,
                XBridgeProtocolVersion = networkInfoResponse.XBridgeProtocolVersion,
                XRouterProtocolVersion = networkInfoResponse.XRouterProtocolVersion
            });
        }
    }
}
