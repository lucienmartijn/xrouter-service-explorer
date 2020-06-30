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
using CloudChainsSpvWallet.Api.Controllers.TimerFeatures;
using CloudChainsSpvWallet.Api.Controllers.ViewModels;
using CloudChainsSpvWallet.Api.DataStorage;
using CloudChainsSpvWallet.Api.Hubs;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace CloudChainsSpvWallet.Api.Controllers
{
    public class CoinController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IHubContext<ListUnspentHub> _hub;
        private readonly ICoinService _coinService;

        public CoinController(IMapper mapper, IHubContext<ListUnspentHub> hub, ICoinService coinService)
        {
            _mapper = mapper;
            _coinService = coinService;
            _hub = hub;
        }

        [HttpGet("[action]")]
        public IActionResult DecodeRawTransaction(string rawtx)
        {
            return Ok(_coinService.DecodeRawTransaction(rawtx));
        }

        [HttpGet("[action]")]
        public IActionResult GetBlock(string hash)
        {
            return Ok(_coinService.GetBlock(hash));
        }

        [HttpGet("[action]")]
        public IActionResult GetBlockchainInfo()
        {
            return Ok(_coinService.GetBlockchainInfo());
        }
        [HttpGet("[action]")]
        public IActionResult GetBlockHash(ulong height)
        {
            return Ok(_coinService.GetBlockHash(height));
        }

        [HttpGet("[action]")]
        public IActionResult GetNewAddress()
        {
            return Ok(_coinService.GetNewAddress());
        }

        [HttpGet("[action]")]
        public IActionResult GetAddress()
        {
            var addresses = _coinService.GetAddressesByAccount("main");

            if (addresses.Count.Equals(0))
                return StatusCode(500, "No addresses found in main account");

            var random = new Random();

            var address = addresses[random.Next(0, addresses.Count - 1)];

            return Ok(address);
        }

        [HttpGet("[action]")]
        public IActionResult GetRawMemPool()
        {
            return Ok(_coinService.GetRawMemPool());
        }

        [HttpGet("[action]")]
        public IActionResult GetTransaction(string txId)
        {
            return Ok(_coinService.GetTransaction(txId));
        }

        [HttpGet("[action]")]
        public IActionResult GetTxOut(string txId, int vout)
        {
            return Ok(_coinService.GetTxOut(txId, vout));
        }

        [HttpGet("[action]")]
        public IActionResult ListUnspent()
        {
            var timerManager = new TimerManager(() => _hub.Clients.All.SendAsync("transferlistunspent", _coinService.ListUnspent()));

            return Ok(new { Message = "List Unspent Request Completed" });
        }

        [HttpGet("[action]")]
        public IActionResult SignMessage(string address, string message)
        {
            return Ok(_coinService.SignMessage(address, message));
        }

        [HttpGet("[action]")]
        public IActionResult VerifyMessage(string address, string signature, string message)
        {
            return Ok(_coinService.VerifyMessage(address, signature, message));
        }
        [HttpGet("[action]")]
        public IActionResult GetAddressesByAccount()
        {
            return Ok(_coinService.GetAddressesByAccount("main"));
        }


        [HttpPost("[action]")]
        public IActionResult SignRawTransaction([FromBody]string rawTx)
        {
            return Ok(_coinService.SignRawTransaction(rawTx));
        }


        [HttpPost("[action]")]
        public IActionResult SendRawTransaction([FromBody]string rawTx)
        {
            return Ok(_coinService.SendRawTransaction(rawTx));
        }

        [HttpPost("[action]")]
        public IActionResult CreateRawTransaction([FromBody]CreateRawTransactionRequestViewModel rawTransactionViewModel)
        {
            if (rawTransactionViewModel.Inputs == null)
                return BadRequest("No Inputs provided");

            if (rawTransactionViewModel.Outputs == null)
                return BadRequest("No Outputs provided");

            
            var rawTransaction = _mapper.Map<CreateRawTransactionRequest>(rawTransactionViewModel);
            var rawTransactionResponse = _coinService.CreateRawTransaction(rawTransaction);
            
            return Ok(rawTransactionResponse);
        }

        [HttpGet("[action]")]
        public IActionResult GetNetworkInfo()
        {
            var networkInfoResponse = _coinService.GetNetworkInfo();

            return Ok(networkInfoResponse);
        }

    }
}