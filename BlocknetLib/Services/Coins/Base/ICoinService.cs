// Copyright (c) 2014 - 2016 George Kimionis
// See the accompanying file LICENSE for the Software License Aggrement

using BlocknetLib.CoinParameters.Base;
using BlocknetLib.Services.RpcServices.RpcExtenderService;
using BlocknetLib.Services.RpcServices.RpcService;

namespace BlocknetLib.Services.Coins.Base
{
    public interface ICoinService : IRpcService, IRpcExtenderService, ICoinParameters
    {
    }
}