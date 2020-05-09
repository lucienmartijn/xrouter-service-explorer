using System.Collections.Generic;
using BlocknetLib.CoinParameters.Blocknet;
using BlocknetLib.Services.Coins.Base;
using BlocknetLib.Services.Coins.Blocknet;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum;
using Xrouter.Service.Explorer.BitcoinLib.Services.Coins.Blocknet.XRouter;

public interface IXRouterEthereumService : ICoinService, IBlocknetConstants{
    GetDecodeRawTransactionResponse xrDecodeRawTransaction(string blockchain, string tx_hex, int node_count);
    GetBlockCountResponse xrGetBlockCount(string blockchain, int node_count);     
    GetBlockHashResponse xrGetBlockHash(string blockchain, string block_number, int node_count);
    GetBlockResponse xrGetBlock(string blockchain, string block_hash, int node_count);
    GetBlocksResponse xrGetBlocks(string blockchain, string block_hashes, int node_count);
    GetTransactionResponse xrGetTransaction(string blockchain, string txid, int node_count);
    GetTransactionsResponse xrGetTransactions(string blockchain, string txids, int node_count);
    SendTransactionResponse xrSendTransaction(string blockchain, string signed_tx, int node_count);
}
