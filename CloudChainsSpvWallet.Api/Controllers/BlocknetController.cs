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
using CloudChainsSpvWallet.Api.Hubs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace CloudChainsSpvWallet.Api.Controllers
{
    [Route("api/blocknet")]
    public class BlocknetController : CoinController
    {
        public BlocknetController(IMapper mapper, IHubContext<ListUnspentHub> hub, IBlocknetService blocknetService) : base(mapper, hub, blocknetService)
        {
        }

    }
}