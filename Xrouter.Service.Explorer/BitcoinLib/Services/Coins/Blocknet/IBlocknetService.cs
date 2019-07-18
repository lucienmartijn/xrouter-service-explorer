using System.Collections.Generic;
using BitcoinLib.CoinParameters.Blocknet;
using BitcoinLib.Services.Coins.Base;
using BitcoinLib.Services.Coins.Blocknet;
using BitcoinLib.Services.Coins.Blocknet.Xrouter;
using Microsoft.AspNetCore.Mvc;

public interface IBlocknetService : ICoinService, IBlocknetConstants{
    #region XCloud
    ServiceResponse xrService(string service);
    ServiceConsensusResponse xrServiceConsensus(string service, List<string> parameters);
    
    #endregion
    #region XRouter
    ConnectResponse xrConnect(string service, int node_count);
    DecodeRawTransactionResponse xrDecodeRawTransaction(string blockchain, string tx_hex, int node_count);
    GetBlockCountResponse xrGetBlockCount(string blockchain, int node_count);
    GetBlockHashResponse xrGetBlockHash(string blockchain, string block_number, int node_count);
    GetBlockResponse xrGetBlock(string blockchain, string block_hash, int node_count);
    GetBlocksResponse xrGetBlocks(string blockchain, string block_hashes, int node_count);
    GetConnectedNodesResponse xrConnectedNodes();

    GetNetworkServicesResponse xrGetNetworkServices();
    GetReplyResponse xrGetReply(string uuid);
    GetStatusResponse xrGetStatus();
    GetTransactionResponse xrGetTransaction(string blockchain, string txid, int node_count);
    GetTransactionsResponse xrGetTransactions(string blockchain, string txids, int node_count);
    SendTransactionResponse xrSendTransaction(string blockchain, string signed_tx);
    List<ShowConfigsResponse> xrShowConfigs();
    UpdateConfigsResponse xrUpdateConfigs(bool force_check = false);

    #endregion

    #region XBridge
    #endregion
}