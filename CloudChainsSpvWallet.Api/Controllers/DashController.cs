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
using CloudChainsSPVLib.Services.Coins.Dash;
using CloudChainsSPVLib.Services.Coins.Blocknet;
using CloudChainsSPVLib.Services.Coins.Litecoin;
using CloudChainsSpvWallet.Api.Controllers.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using CloudChainsSpvWallet.Api.Hubs;

namespace CloudChainsSpvWallet.Api.Controllers
{
    [Route("api/dash")]
    public class DashController : CoinController
    {
        public DashController(IMapper mapper, IHubContext<ListUnspentHub> hub, IDashService DashService) : base(mapper, hub, DashService)
        {
        }

    }
}