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
using CloudChainsSPVLib.Services.Coins.Bitcoin;
using CloudChainsSPVLib.Services.Coins.Blocknet;
using CloudChainsSPVLib.Services.Coins.Litecoin;
using CloudChainsSpvWallet.Api.Controllers.ViewModels;
using CloudChainsSpvWallet.Api.Hubs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace CloudChainsSpvWallet.Api.Controllers
{
    [Route("api/bitcoin")]
    public class BitcoinController : CoinController
    {
        public BitcoinController(IMapper mapper, IHubContext<ListUnspentHub> hub, IBitcoinService bitcoinService) : base(mapper, hub, bitcoinService)
        {
        }

    }
}