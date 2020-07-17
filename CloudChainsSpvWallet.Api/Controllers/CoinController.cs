using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using CloudChainsSPVLib.Requests.CreateRawTransaction;

using CloudChainsSPVLib.Services.Coins.Base;
using CloudChainsSpvWallet.Api.TimerFeatures;
using CloudChainsSpvWallet.Api.Controllers.ViewModels;
using CloudChainsSpvWallet.Api.Hubs;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using BlocknetLib.Responses;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased;

namespace CloudChainsSpvWallet.Api.Controllers
{
    [Route("api/lw/{coin}")]
    public class CoinController : ControllerBase
    {
        private readonly IMapper _mapper;
        private readonly IHubContext<ListUnspentHub> _hub;
        private readonly IEnumerable<ICoinService> _coinServices;
        private readonly IXRouterService _xRouterService;

        public CoinController(IMapper mapper, IHubContext<ListUnspentHub> hub, IEnumerable<ICoinService> coinServices, IXRouterService xRouterService)
        {
            _mapper = mapper;
            _coinServices = coinServices;
            _xRouterService = xRouterService;
            _hub = hub;
        }

        [HttpPost("[action]")]
        public IActionResult HandleOverPayment(string coin, [FromBody] OverPaymentRequestViewModel overPaymentRequestViewModel)
        {
            var coinService = getCoinService(coin);

            if (coinService.ListUnspent().Count == 0)
                return StatusCode(500, "No UTXO's found");

            // Get original senders
            var transactions = new List<CloudChainsSPVLib.Responses.GetTransactionResponse>();
            foreach (var txId in overPaymentRequestViewModel.TxIds)
            {
                transactions.Add(coinService.GetTransaction(txId));
            }

            var refundAddressesPerTx = new List<List<string>>();
            foreach (var tx in transactions)
            {
                var refundAddresses = new List<string>();
                foreach (var input in tx.Vin)
                {
                    var transaction = coinService.GetTransaction(input.TxId);
                    if (transaction != null)
                    {
                        var inputRawTx = _xRouterService.xrDecodeRawTransaction<GetDecodeRawTransactionResponse>(coinService.Parameters.CoinShortName, transaction.Hex, 1);

                        refundAddresses.Add(inputRawTx.Reply.Vout.FirstOrDefault(v => v.N.Equals(int.Parse(input.Vout))).ScriptPubKey.Addresses.FirstOrDefault());
                    }
                }
                refundAddressesPerTx.Add(refundAddresses);
            }


            //var rawTransactionRequest = createNewRawTransactionRequest(coinService, overPaymentRequestViewModel.Amount, "", overPaymentRequestViewModel.ChangeAddress);

            //var rawTransactionResponse = coinService.CreateRawTransaction(rawTransactionRequest);

            //var signedTransaction = coinService.SignRawTransaction(rawTransactionResponse);

            //var sentRawTransaction = coinService.SendRawTransaction(signedTransaction.Hex);

            //return Ok(sentRawTransaction);
            return Ok("");
        }

        [HttpPost("[action]")]
        public IActionResult HandleEnterpriseXRouterPayment(string coin, [FromBody] EnterpriseXRouterPaymentRequestViewModel enterpriseXRouterPaymentViewModel)
        {
            var coinService = getCoinService(coin);

            if (coinService.ListUnspent().Count == 0)
                return StatusCode(500, "No UTXO's found");

            var addresses = coinService.GetAddressesByAccount("main");

            if (addresses.Count.Equals(0))
                return StatusCode(500, "No addresses found in main account");

            var random = new Random();

            var changeAddress = addresses[random.Next(0, addresses.Count - 1)];

            var rawTransactionRequest = createNewRawTransactionRequest(coinService, enterpriseXRouterPaymentViewModel.ServiceFee, enterpriseXRouterPaymentViewModel.PaymentAddress, changeAddress);
            var rawTransactionResponse = coinService.CreateRawTransaction(rawTransactionRequest);

            var signedTransaction = coinService.SignRawTransaction(rawTransactionResponse);            
            
            var signature = coinService.SignMessage(changeAddress, enterpriseXRouterPaymentViewModel.Hash);

            return Ok(new EnterpriseXRouterPaymentResponseViewModel
            {
                Signature = signature,
                TxHex = signedTransaction.Hex
            });
        }

        [HttpGet("[action]")]
        public IActionResult DecodeRawTransaction(string coin, string rawtx)
        {
            return Ok(getCoinService(coin).DecodeRawTransaction(rawtx));
        }

        [HttpGet("[action]")]
        public IActionResult GetBlock(string coin, string hash)
        {
            return Ok(getCoinService(coin).GetBlock(hash));
        }

        [HttpGet("[action]")]
        public IActionResult GetBlockchainInfo(string coin)
        {
            return Ok(getCoinService(coin).GetBlockchainInfo());
        }
        [HttpGet("[action]")]
        public IActionResult GetBlockHash(string coin, ulong height)
        {
            return Ok(getCoinService(coin).GetBlockHash(height));
        }

        [HttpGet("[action]")]
        public IActionResult GetNewAddress(string coin)
        {
            return Ok(getCoinService(coin).GetNewAddress());
        }

        [HttpGet("[action]")]
        public IActionResult GetAddress(string coin)
        {
            var coinService = getCoinService(coin);
            var addresses = coinService.GetAddressesByAccount("main");

            if (addresses.Count.Equals(0))
                return StatusCode(500, "No addresses found in main account");

            var random = new Random();
            var listUnspent = coinService.ListUnspent();
            var unAvailableAddresses = listUnspent.Where(lu => lu.Confirmations <= 10).Select(lu => lu.Address);
            addresses = addresses.Where(ad => !unAvailableAddresses.Contains(ad)).ToList();
            var address = addresses[random.Next(0, addresses.Count - 1)];

            return Ok(address);
        }

        [HttpGet("[action]")]
        public IActionResult GetRawMemPool(string coin)
        {
            return Ok(getCoinService(coin).GetRawMemPool());
        }

        [HttpGet("[action]")]
        public IActionResult GetTransaction(string coin, string txId)
        {
            var coinService = getCoinService(coin);
            var tx = coinService.GetTransaction(txId);
            return Ok(tx);
        }

        [HttpGet("[action]")]
        public IActionResult GetTxOut(string coin, string txId, int vout)
        {
            return Ok(getCoinService(coin).GetTxOut(txId, vout));
        }

        [HttpGet("[action]")]
        public IActionResult ListUnspent(string coin)
        {
            
            return Ok(getCoinService(coin).ListUnspent());
        }

        [HttpGet("[action]")]
        public IActionResult TransferListUnspent(string coin)
        {
            var timerManager = new TimerManager(() => _hub.Clients.All.SendAsync("transferlistunspent", getCoinService(coin).ListUnspent()));

            return Ok(new { Message = "List Unspent Request Completed" });
        }

        [HttpPost("[action]")]
        public IActionResult SignMessage(string coin, [FromBody]SignMessageRequestViewModel signMessageRequestViewModel)
        {
            return Ok(getCoinService(coin).SignMessage(signMessageRequestViewModel.Address, signMessageRequestViewModel.Message));
        }

        [HttpGet("[action]")]
        public IActionResult VerifyMessage(string coin, string address, string signature, string message)
        {
            return Ok(getCoinService(coin).VerifyMessage(address, signature, message));
        }
        [HttpGet("[action]")]
        public IActionResult GetAddressesByAccount(string coin)
        {
            return Ok(getCoinService(coin).GetAddressesByAccount("main"));
        }


        [HttpPost("[action]")]
        public IActionResult SignRawTransaction(string coin, [FromBody]string rawTx)
        {
            return Ok(getCoinService(coin).SignRawTransaction(rawTx));
        }


        [HttpPost("[action]")]
        public IActionResult SendRawTransaction(string coin, [FromBody]string rawTx)
        {
            return Ok(getCoinService(coin).SendRawTransaction(rawTx));
        }

        [HttpPost("[action]")]
        public IActionResult CreateRawTransaction(string coin, [FromBody]CreateRawTransactionRequestViewModel rawTransactionViewModel)
        {
            if (rawTransactionViewModel.Inputs == null)
                return BadRequest("No Inputs provided");

            if (rawTransactionViewModel.Outputs == null)
                return BadRequest("No Outputs provided");

            
            var rawTransaction = _mapper.Map<CreateRawTransactionRequest>(rawTransactionViewModel);
            var rawTransactionResponse = getCoinService(coin).CreateRawTransaction(rawTransaction);
            
            return Ok(rawTransactionResponse);
        }

        [HttpPost("[action]")]
        public IActionResult SendTransaction(string coin, [FromBody]CreateRawTransactionRequestViewModel rawTransactionViewModel)
        {
            if (rawTransactionViewModel.Inputs == null)
                return BadRequest("No Inputs provided");

            if (rawTransactionViewModel.Outputs == null)
                return BadRequest("No Outputs provided");

            var coinService = getCoinService(coin);
            var rawTransaction = _mapper.Map<CreateRawTransactionRequest>(rawTransactionViewModel);
            var rawTransactionResponse = coinService.CreateRawTransaction(rawTransaction);

            var signedTransaction = coinService.SignRawTransaction(rawTransactionResponse);

            var transactionHex = coinService.SendRawTransaction(signedTransaction.Hex);

            //TODO: Maybe add a concurrent queue for requests
            // https://stackoverflow.com/questions/44668930/lock-web-api-controller-method
            return Ok(transactionHex);
            
        }

        [HttpGet("[action]")]
        public IActionResult GetNetworkInfo(string coin)
        {
            return Ok(getCoinService(coin).GetNetworkInfo());
        }

        private ICoinService getCoinService(string coin)
        {
            return _coinServices.FirstOrDefault(c => c.Parameters.CoinShortName.Equals(coin.ToUpper()));
        }

        private decimal calculateFee(ICoinService coinSvc, int numInputs, int numOutputs)
        {
            decimal relayFee = 10M;
            return 
                coinSvc.Parameters.CoinsPerBaseUnit * 
                ( relayFee * 
                    (
                        coinSvc.Parameters.TransactionSizeBytesContributedByEachInput * numInputs
                        +
                        coinSvc.Parameters.TransactionSizeBytesContributedByEachOutput * numOutputs
                    )
                );
        }

        private CreateRawTransactionRequest createNewRawTransactionRequest(ICoinService coinService, decimal sendAmount, string toAddress, string changeAddress)
        {

            var listUnspent = coinService.ListUnspent().OrderBy(utxo => utxo.Amount);

            //TODO: Read from appdata cloudchains config
            decimal minimumFee = coinService.Parameters.MinimumTransactionFeeInCoins;
            decimal calculatedFee = 0;
            decimal sum = 0;

            var utxos = listUnspent.TakeWhile(x =>
            {
                var temp = sum;
                sum += x.Amount;
                return temp < sendAmount;
            }).ToList();

            var rawTransactionRequest = new CreateRawTransactionRequest();

            foreach (var utxo in utxos)
            {
                rawTransactionRequest.AddInput(new CreateRawTransactionInput
                {
                    TxId = utxo.TxId,
                    Vout = utxo.Vout
                });
            }

            var inputSum = utxos.Sum(utxo => utxo.Amount);

            if (inputSum > sendAmount)
            {
                rawTransactionRequest.AddOutput(new CreateRawTransactionOutput
                {
                    Address = toAddress,
                    Amount = sendAmount
                });

                calculatedFee = calculateFee(coinService, rawTransactionRequest.Inputs.Count(), 2);
                rawTransactionRequest.AddOutput(new CreateRawTransactionOutput
                {
                    Address = changeAddress,
                    Amount = inputSum - sendAmount - (calculatedFee <= minimumFee ? minimumFee : calculatedFee )
                });
            }
            else
            {
                rawTransactionRequest.AddOutput(new CreateRawTransactionOutput
                {
                    Address = toAddress,
                    Amount = sendAmount - calculateFee(coinService, rawTransactionRequest.Inputs.Count(), 1)
                });
            }
            return rawTransactionRequest;
        }

    }
}