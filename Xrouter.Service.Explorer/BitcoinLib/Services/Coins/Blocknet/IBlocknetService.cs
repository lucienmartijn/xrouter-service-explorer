using System.Collections.Generic;
using BitcoinLib.CoinParameters.Blocknet;
using BitcoinLib.Services.Coins.Base;
using BitcoinLib.Services.Coins.Blocknet;
using BitcoinLib.Services.Coins.Blocknet.Xrouter;
using BitcoinLib.Services.Coins.Blocknet.Xrouter.BitcoinBased;
using Microsoft.AspNetCore.Mvc;
using Xrouter.Service.Explorer.BitcoinLib.Services.Coins.Blocknet.XRouter;

public interface IBlocknetService : ICoinService, IBlocknetConstants{
    #region Blocknetdx
    List<ServiceNodeInfoResponse> serviceNodeList();
    #endregion
    #region XCloud
    ServiceResponse xrService(string service, object[] parameters);
    ServiceConsensusResponse xrServiceConsensus(string service, List<string> parameters);
    
    #endregion
    #region XRouter
    ConnectResponse xrConnect(string service, int node_count);
    T xrDecodeRawTransaction<T>(string blockchain, string tx_hex, int node_count);
    T xrGetBlockCount<T>(string blockchain, int node_count);
    T xrGetBlockHash<T>(string blockchain, string block_number, int node_count);
    T xrGetBlock<T>(string blockchain, string block_hash, int node_count);
    T xrGetBlocks<T>(string blockchain, string block_hashes, int node_count);
    GetConnectedNodesResponse xrConnectedNodes();
    GetNetworkServicesResponse xrGetNetworkServices();
    GetReplyResponse xrGetReply(string uuid);
    GetStatusResponse xrGetStatus();
    T xrGetTransaction<T>(string blockchain, string txid, int node_count);
    T xrGetTransactions<T>(string blockchain, string txids, int node_count);
    T xrSendTransaction<T>(string blockchain, string signed_tx);
    List<ShowConfigsResponse> xrShowConfigs();
    UpdateConfigsResponse xrUpdateConfigs(bool force_check = false);

    #endregion
    #region XBridge
    #endregion
}
