using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using BlocknetLib.CoinParameters.Blocknet;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.RPC.Specifications;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Xrouter.Service.Explorer.BitcoinLib.Services.Coins.Blocknet.XRouter;

namespace BlocknetLib.Services.Coins.Blocknet
{
	/// <summary>
	/// Mostly the same functionality as <see cref="BitcoinService"/>, just adds a bunch more features
	/// for handling InstantSend and PrivateSend, plus better raw tx generation support.
	/// </summary>
	public class XCloudService : CoinService, IXCloudService
	{
		public XCloudService(bool useTestnet = false) : base(useTestnet) { }

		public XCloudService(string daemonUrl, string rpcUsername, string rpcPassword,
			string walletPassword) : base(daemonUrl, rpcUsername, rpcPassword, walletPassword) { }

		public XCloudService(string daemonUrl, string rpcUsername, string rpcPassword,
			string walletPassword, short rpcRequestTimeoutInSeconds) : base(daemonUrl, rpcUsername,
			rpcPassword, walletPassword, rpcRequestTimeoutInSeconds) { }


		public BlocknetConstants.Constants Constants => BlocknetConstants.Constants.Instance;


        public ConnectResponse xrConnect(string service, int node_count = 1)
        {
            return _rpcConnector.MakeRequest<ConnectResponse>(RpcMethods.xrConnect, service, node_count);
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

        public List<ShowConfigsResponse> xrShowConfigs()
        {
            var res = _rpcConnector.MakeRequest<string>(RpcMethods.xrShowConfigs);
            return JsonConvert.DeserializeObject<List<ShowConfigsResponse>>(res);
        }

        public UpdateNetworkServicesResponse xrUpdateNetworkServices(short num_servicenodes)
        {
            return _rpcConnector.MakeRequest<UpdateNetworkServicesResponse>(RpcMethods.xrUpdateNetworkServices, num_servicenodes);
        }

        public ServiceResponse xrService(string service, object[] parameters)
        {
            if(parameters == null)
                return _rpcConnector.MakeRequest<ServiceResponse>(RpcMethods.xrService, service);

            return _rpcConnector.MakeRequest<ServiceResponse>(RpcMethods.xrService, service, parameters);
        }

        public ServiceResponse xrService(string service, List<string> parameters)
        {
            throw new NotImplementedException();
        }

        public GetNetworkServicesResponse xrGetNetworkServices()
        {
            return _rpcConnector.MakeRequest<GetNetworkServicesResponse>(RpcMethods.xrGetNetworkServices);
        }

        public List<ServiceNodeInfoResponse> serviceNodeList()
        {
            return _rpcConnector.MakeRequest<List<ServiceNodeInfoResponse>>(RpcMethods.servicenodelist);
        }

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
