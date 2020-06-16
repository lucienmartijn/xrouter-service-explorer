using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CloudChainsSPVLib.ExceptionHandling.Rpc;
using CloudChainsSPVLib.Requests.CreateRawTransaction;
using CloudChainsSPVLib.Responses;
using CloudChainsSPVLib.RPC.RequestResponse;
using CloudChainsSPVLib.Services.Coins.Base;
using CloudChainsSPVLib.Services.Coins.Blocknet;
using CloudChainsSpvWallet.Api.Controllers.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CloudChainsSpvWallet.Api.Controllers
{
    public class CoinController : ControllerBase
    {
        private readonly IMapper mapper;
        private readonly ICoinService coinService;

        public CoinController(IMapper mapper, ICoinService coinService)
        {
            this.mapper = mapper;
            this.coinService = coinService;
        }

        [HttpGet("[action]")]
        public IActionResult DecodeRawTransaction(string rawtx)
        {
            return Ok(coinService.DecodeRawTransaction(rawtx));
        }

        [HttpGet("[action]")]
        public IActionResult GetBlock(string hash)
        {
            return Ok(coinService.GetBlock(hash));
        }

        [HttpGet("[action]")]
        public IActionResult GetBlockchainInfo()
        {
            return Ok(coinService.GetBlockchainInfo());
        }
        [HttpGet("[action]")]
        public IActionResult GetBlockHash(ulong height)
        {
            return Ok(coinService.GetBlockHash(height));
        }

        [HttpGet("[action]")]
        public IActionResult GetNewAddress()
        {
            return Ok(coinService.GetNewAddress());
        }

        [HttpGet("[action]")]
        public IActionResult GetRawMemPool()
        {
            return Ok(coinService.GetRawMemPool());
        }

        [HttpGet("[action]")]
        public IActionResult GetTransaction(string txId)
        {
            return Ok(coinService.GetTransaction(txId));
        }

        [HttpGet("[action]")]
        public IActionResult GetTxOut(string txId, int vout)
        {
            return Ok(coinService.GetTxOut(txId, vout));
        }

        [HttpGet("[action]")]
        public IActionResult ListUnspent()
        {
            return Ok(coinService.ListUnspent());
        }

        [HttpGet("[action]")]
        public IActionResult SignMessage(string address, string message)
        {
            return Ok(coinService.SignMessage(address, message));
        }

        [HttpGet("[action]")]
        public IActionResult VerifyMessage(string address, string signature, string message)
        {
            return Ok(coinService.VerifyMessage(address, signature, message));
        }
        [HttpGet("[action]")]
        public IActionResult GetAddressesByAccount()
        {
            return Ok(coinService.GetAddressesByAccount("main"));
        }


        [HttpPost("[action]")]
        public IActionResult SignRawTransaction([FromBody]string rawTx)
        {
            return Ok(coinService.SignRawTransaction(rawTx));
        }


        [HttpPost("[action]")]
        public IActionResult SendRawTransaction([FromBody]string rawTx)
        {
            return Ok(coinService.SendRawTransaction(rawTx));
        }

        [HttpPost("[action]")]
        public IActionResult CreateRawTransaction([FromBody]CreateRawTransactionRequestViewModel rawTransactionViewModel)
        {
            if (rawTransactionViewModel.Inputs == null)
                return BadRequest("No Inputs provided");

            if (rawTransactionViewModel.Outputs == null)
                return BadRequest("No Outputs provided");

            string rawTransactionResponse;
            try
            {
                var rawTransaction = mapper.Map<CreateRawTransactionRequest>(rawTransactionViewModel);
                rawTransactionResponse = coinService.CreateRawTransaction(rawTransaction);
            }
            catch (RpcInternalServerErrorException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcError
                {
                    Message = e.Message,
                    Code = e.RpcErrorCode.Value
                });
            }
            catch (RpcRequestTimeoutException e)
            {
                return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcError
                {
                    Message = e.Message,
                });
            }
            return Ok(rawTransactionResponse);
        }

        [HttpGet("[action]")]
        public IActionResult GetNetworkInfo()
        {
            GetNetworkInfoResponse networkInfoResponse;
            try
            {
                networkInfoResponse = coinService.GetNetworkInfo();
            }
            catch (RpcInternalServerErrorException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcError
                {
                    Message = e.Message,
                    Code = e.RpcErrorCode.Value
                });
            }
            catch (RpcRequestTimeoutException e)
            {
                return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcError
                {
                    Message = e.Message,
                });
            }
            return Ok(networkInfoResponse);
        }

    }
}