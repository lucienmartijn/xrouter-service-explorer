using System;
using System.Collections.Generic;
using BitcoinLib.CoinParameters.Blocknet;
using BitcoinLib.RPC.Specifications;
using BitcoinLib.Services.Coins.Blocknet.Xrouter;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace BitcoinLib.Services.Coins.Blocknet
{
	/// <summary>
	/// Mostly the same functionality as <see cref="BitcoinService"/>, just adds a bunch more features
	/// for handling InstantSend and PrivateSend, plus better raw tx generation support.
	/// </summary>
	public class BlocknetService : CoinService, IBlocknetService
	{
		public BlocknetService(bool useTestnet = false) : base(useTestnet) { }

		public BlocknetService(string daemonUrl, string rpcUsername, string rpcPassword,
			string walletPassword) : base(daemonUrl, rpcUsername, rpcPassword, walletPassword) { }

		public BlocknetService(string daemonUrl, string rpcUsername, string rpcPassword,
			string walletPassword, short rpcRequestTimeoutInSeconds) : base(daemonUrl, rpcUsername,
			rpcPassword, walletPassword, rpcRequestTimeoutInSeconds) { }
		
		/// <summary>
		/// Adds InstantSend and PrivateSend to SendToAddress from our wallet.
		/// </summary>
		/// <inheritdoc />
		public string SendToAddress(string BlocknetAddress, decimal amount, string comment = null,
			string commentTo = null, bool subtractFeeFromAmount = false, bool useInstantSend = false,
			bool usePrivateSend = false)
			=> _rpcConnector.MakeRequest<string>(RpcMethods.sendtoaddress, BlocknetAddress, amount,
				comment, commentTo, subtractFeeFromAmount, useInstantSend, usePrivateSend);

		/// <summary>
		/// Adds InstantSend support to SendRawTransaction
		/// </summary>
		public string SendRawTransaction(string rawTransactionHexString, bool allowHighFees,
			bool useInstantSend)
			=> _rpcConnector.MakeRequest<string>(RpcMethods.sendrawtransaction, rawTransactionHexString,
				allowHighFees, useInstantSend);
		
		/// <summary>
		/// privatesend "command"
		/// Arguments:
		/// 1. "command"        (string or set of strings, required) The command to execute
		/// Available commands:
		/// start       - Start mixing
		/// stop        - Stop mixing
		/// reset       - Reset mixing
		/// </summary>
		public string SendPrivateSendCommand(string command)
			=> _rpcConnector.MakeRequest<string>(RpcMethods.privatesend, command);

		public AddressBalanceResponse GetAddressBalance(AddressBalanceRequest addresses)
			=> _rpcConnector.MakeRequest<AddressBalanceResponse>(RpcMethods.getaddressbalance, addresses);


		public BlocknetConstants.Constants Constants => BlocknetConstants.Constants.Instance;

        public GetBlockCountResponse xrGetBlockCount(string blockchain, int node_count)
        {
            return _rpcConnector.MakeRequest<GetBlockCountResponse>(RpcMethods.xrGetBlockCount, blockchain.ToUpper(), node_count);
        }

        public ConnectResponse xrConnect(string service, int node_count = 1)
        {
            return _rpcConnector.MakeRequest<ConnectResponse>(RpcMethods.xrConnect, service, node_count);
        }

        public DecodeRawTransactionResponse xrDecodeRawTransaction(string blockchain, string tx_hex, int node_count)
        {
            return _rpcConnector.MakeRequest<DecodeRawTransactionResponse>(RpcMethods.xrDecodeRawTransaction, blockchain.ToUpper(), tx_hex, node_count);
        }

        public GetBlockHashResponse xrGetBlockHash(string blockchain, string block_number, int node_count)
        {
            return _rpcConnector.MakeRequest<GetBlockHashResponse>(RpcMethods.xrGetBlockHash, blockchain.ToUpper(), block_number, node_count);
        }

        public GetBlockResponse xrGetBlock(string blockchain, string block_hash, int node_count)
        {
            return _rpcConnector.MakeRequest<GetBlockResponse>(RpcMethods.xrGetBlock, blockchain.ToUpper(), block_hash, node_count);
        }

        public GetBlocksResponse xrGetBlocks(string blockchain, string block_hashes, int node_count)
        {
            return _rpcConnector.MakeRequest<GetBlocksResponse>(RpcMethods.xrGetBlocks, blockchain.ToUpper(), block_hashes, node_count);
        }

        public GetConnectedNodesResponse xrConnectedNodes()
        {
            return _rpcConnector.MakeRequest<GetConnectedNodesResponse>(RpcMethods.xrConnectedNodes);
        }

        public GetReplyResponse xrGetReply(string uuid)
        {
            return _rpcConnector.MakeRequest<GetReplyResponse>(RpcMethods.xrGetReply, uuid);
        }

        public GetStatusResponse xrGetStatus()
        {
            return _rpcConnector.MakeRequest<GetStatusResponse>(RpcMethods.xrGetStatus);
        }

        public GetTransactionResponse xrGetTransaction(string blockchain, string txid, int node_count)
        {
            return _rpcConnector.MakeRequest<GetTransactionResponse>(RpcMethods.xrGetTransaction, blockchain.ToUpper(), txid, node_count);
        }

        public GetTransactionsResponse xrGetTransactions(string blockchain, string txids, int node_count)
        {
            return _rpcConnector.MakeRequest<GetTransactionsResponse>(RpcMethods.xrGetTransactions, blockchain.ToUpper(), txids, node_count);
        }

        public SendTransactionResponse xrSendTransaction(string blockchain, string signed_tx)
        {
            return _rpcConnector.MakeRequest<SendTransactionResponse>(RpcMethods.xrSendTransaction, blockchain.ToUpper(), signed_tx);
        }

        public List<ShowConfigsResponse> xrShowConfigs()
        {
            var res = _rpcConnector.MakeRequest<string>(RpcMethods.xrShowConfigs);
            return JsonConvert.DeserializeObject<List<ShowConfigsResponse>>(res);
        }

        public UpdateConfigsResponse xrUpdateConfigs(bool force_check = false)
        {
            return _rpcConnector.MakeRequest<UpdateConfigsResponse>(RpcMethods.xrUpdateConfigs, force_check);
        }

        public ServiceResponse xrService(string service, object[] parameters)
        {
            if(parameters == null)
                return _rpcConnector.MakeRequest<ServiceResponse>(RpcMethods.xrService, service);

            return _rpcConnector.MakeRequest<ServiceResponse>(RpcMethods.xrService, service, parameters);
        }

        public ServiceConsensusResponse xrServiceConsensus(string service, List<string> parameters)
        {
            throw new NotImplementedException();
        }

        public GetNetworkServicesResponse xrGetNetworkServices()
        {
            return _rpcConnector.MakeRequest<GetNetworkServicesResponse>(RpcMethods.xrGetNetworkServices);
        }

        public List<ServiceNodeResponse> serviceNodeList()
        {
            var result = _rpcConnector.MakeRequest<List<ServiceNodeResponse>>(RpcMethods.servicenodelist);
			
			return result;
        }
    }
}