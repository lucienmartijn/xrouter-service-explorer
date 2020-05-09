using System.Collections.Generic;
using BlocknetLib.CoinParameters.Blocknet;
using BlocknetLib.Services.Coins.Base;
using BlocknetLib.Services.Coins.Blocknet;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased;
using Xrouter.Service.Explorer.BitcoinLib.Services.Coins.Blocknet.XRouter;

public interface IServicenodeService : ICoinService, IBlocknetConstants{
    List<ServiceNodeInfoResponse> serviceNodeList();
}
