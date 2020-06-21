using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using BlocknetLib.CoinParameters.Blocknet;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.RPC.Specifications;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.Neo;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Xrouter.Service.Explorer.BitcoinLib.Services.Coins.Blocknet.XRouter;

namespace BlocknetLib.Services.Coins.Blocknet
{
	/// <summary>
	/// Mostly the same functionality as <see cref="BitcoinService"/>, just adds a bunch more features
	/// for handling InstantSend and PrivateSend, plus better raw tx generation support.
	/// </summary>
	public class XRouterNeoService : BlocknetService, IXRouterNeoService
	{
		public XRouterNeoService(bool useTestnet = false) : base(useTestnet) { }

		public XRouterNeoService(string daemonUrl, string rpcUsername, string rpcPassword,
			string walletPassword) : base(daemonUrl, rpcUsername, rpcPassword, walletPassword) { }

		public XRouterNeoService(string daemonUrl, string rpcUsername, string rpcPassword,
			string walletPassword, short rpcRequestTimeoutInSeconds) : base(daemonUrl, rpcUsername,
			rpcPassword, walletPassword, rpcRequestTimeoutInSeconds) { }

        public GetDecodeRawTransactionResponse xrDecodeRawTransaction(string blockchain, string tx_hex, int node_count)
        {
            return _rpcConnector.MakeRequest<GetDecodeRawTransactionResponse>(RpcMethods.xrDecodeRawTransaction, blockchain, tx_hex, node_count);
        }

        public GetBlockCountResponse xrGetBlockCount(string blockchain, int node_count)
        {
            return _rpcConnector.MakeRequest<GetBlockCountResponse>(RpcMethods.xrGetBlockCount, blockchain, node_count);
        }

        public GetBlockHashResponse xrGetBlockHash(string blockchain, string block_number, int node_count)
        {
            return _rpcConnector.MakeRequest<GetBlockHashResponse>(RpcMethods.xrGetBlockHash, blockchain, block_number, node_count);
        }

        public GetBlockResponse xrGetBlock(string blockchain, string block_hash, int node_count)
        {
            return _rpcConnector.MakeRequest<GetBlockResponse>(RpcMethods.xrGetBlock, blockchain, block_hash, node_count);
        }

        public GetBlocksResponse xrGetBlocks(string blockchain, string block_hashes, int node_count)
        {
            return _rpcConnector.MakeRequest<GetBlocksResponse>(RpcMethods.xrGetBlocks, blockchain, block_hashes, node_count);
        }

        public GetTransactionResponse xrGetTransaction(string blockchain, string txid, int node_count)
        {
            return _rpcConnector.MakeRequest<GetTransactionResponse>(RpcMethods.xrGetTransaction, blockchain, txid, node_count);
        }

        public GetTransactionsResponse xrGetTransactions(string blockchain, string txids, int node_count)
        {
            return _rpcConnector.MakeRequest<GetTransactionsResponse>(RpcMethods.xrGetTransactions, blockchain, txids, node_count);
        }

        public SendTransactionResponse xrSendTransaction(string blockchain, string signed_tx, int node_count)
        {
            return _rpcConnector.MakeRequest<SendTransactionResponse>(RpcMethods.xrSendTransaction, blockchain, signed_tx, node_count);
        }
    }
}
