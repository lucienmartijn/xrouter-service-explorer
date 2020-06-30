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
using CloudChainsSPVLib.Services.Coins.Ravencoin;
using CloudChainsSPVLib.Services.Coins.Blocknet;
using CloudChainsSPVLib.Services.Coins.Litecoin;
using CloudChainsSpvWallet.Api.Controllers.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CloudChainsSpvWallet.Api.Hubs;
using Microsoft.AspNetCore.SignalR;

namespace CloudChainsSpvWallet.Api.Controllers
{
    [Route("api/Ravencoin")]
    public class RavencoinController : CoinController
    {
        public RavencoinController(IMapper mapper, IHubContext<ListUnspentHub> hub, IRavencoinService RavencoinService) : base(mapper, hub, RavencoinService)
        {
        }

    }
}