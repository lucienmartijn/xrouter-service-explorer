using System.Collections.Generic;
using BlocknetLib.CoinParameters.Blocknet;
using BlocknetLib.Services.Coins.Base;
using BlocknetLib.Services.Coins.Blocknet;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased;
using Xrouter.Service.Explorer.BitcoinLib.Services.Coins.Blocknet.XRouter;

public interface IXRouterService{
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
    T xrSendTransaction<T>(string blockchain, string signed_tx, int node_count);
    List<ShowConfigsResponse> xrShowConfigs();
    UpdateNetworkServicesResponse xrUpdateNetworkServices(short num_servicenodes);
}
