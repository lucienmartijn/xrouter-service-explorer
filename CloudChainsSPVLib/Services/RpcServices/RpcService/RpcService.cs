// Copyright (c) 2014 - 2016 George Kimionis
// See the accompanying file LICENSE for the Software License Aggrement

using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using CloudChainsSPVLib.Requests.CreateRawTransaction;
using CloudChainsSPVLib.Responses;
using CloudChainsSPVLib.RPC.Connector;
using CloudChainsSPVLib.RPC.Specifications;
using CloudChainsSPVLib.Services.Coins.Base;
using CloudChainsSPVLib.SpvParameters;
using Newtonsoft.Json.Linq;

namespace CloudChainsSPVLib.Services
{
    //   Implementation of API calls list, as found at: https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_Calls_list (note: this list is often out-of-date so call "help" in your bitcoin-cli to get the latest signatures)
    public partial class CoinService : ICoinService
    {
        protected readonly IRpcConnector _rpcConnector;

        public CoinService()
        {
            _rpcConnector = new RpcConnector(this);
            Parameters = new CoinParameters(this, null, null, null, null, 0);
        }

        public CoinService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword)
        {
            _rpcConnector = new RpcConnector(this);
            Parameters = new CoinParameters(this, daemonUrl, rpcUsername, rpcPassword, walletPassword, 0);
        }

        //  this provides support for cases where *.config files are not an option
        public CoinService(string daemonUrl, string rpcUsername, string rpcPassword, string walletPassword, short rpcRequestTimeoutInSeconds)
        {
            _rpcConnector = new RpcConnector(this);
            Parameters = new CoinParameters(this, daemonUrl, rpcUsername, rpcPassword, walletPassword, rpcRequestTimeoutInSeconds);
        }

        public string CreateRawTransaction(CreateRawTransactionRequest rawTransaction)
        {
            return _rpcConnector.MakeRequest<string>(RpcMethods.createrawtransaction, rawTransaction.Inputs, rawTransaction.Outputs);
        }

				/// <summary>
				/// Lower level CreateRawTransaction RPC request to allow other kinds of output, e.g.
				/// "data":"text" for OP_RETURN Null Data for chat on the blockchain. CreateRawTransaction(
				/// CreateRawTransactionRequest) only allows for "receiver":amount outputs.
				/// </summary>
				public string CreateRawTransaction(IList<CreateRawTransactionInput> inputs,
					string chatHex, string receiverAddress, decimal receiverAmount)
				{
					// Must be a dictionary to become an json object, an array will fail on the RPC side
					var outputs = new Dictionary<string, string>
					{
						{ "data", chatHex },
						{ receiverAddress, receiverAmount.ToString(NumberFormatInfo.InvariantInfo) }
					};
					return _rpcConnector.MakeRequest<string>(RpcMethods.createrawtransaction, inputs, outputs);
				}

        public DecodeRawTransactionResponse DecodeRawTransaction(string rawTx)
        {
            return _rpcConnector.MakeRequest<DecodeRawTransactionResponse>(RpcMethods.decoderawtransaction, rawTx);
        }

        public string DumpPrivKey(string address)
        {
            return _rpcConnector.MakeRequest<string>(RpcMethods.dumpprivkey, address);
        }

        public GetBlockResponse GetBlock(string hash)
        {
            return _rpcConnector.MakeRequest<GetBlockResponse>(RpcMethods.getblock, hash);
        }

        public GetBlockchainInfoResponse GetBlockchainInfo()
        {
            return _rpcConnector.MakeRequest<GetBlockchainInfoResponse>(RpcMethods.getblockchaininfo);
        }

        public string GetBlockHash(ulong height)
        {
            return _rpcConnector.MakeRequest<string>(RpcMethods.getblockhash, height);
        }

        public GetNetworkInfoResponse GetNetworkInfo()
        {
            return _rpcConnector.MakeRequest<GetNetworkInfoResponse>(RpcMethods.getnetworkinfo);
        }

        public string GetNewAddress()
        {
            return _rpcConnector.MakeRequest<string>(RpcMethods.getnewaddress);
        }


        public List<string> GetRawMemPool()
        {
            return _rpcConnector.MakeRequest<List<string>>(RpcMethods.getrawmempool);
        }

        public GetTransactionResponse GetTransaction(string txId)
        {
            return _rpcConnector.MakeRequest<GetTransactionResponse>(RpcMethods.gettransaction, txId);
        }

        public GetTransactionResponse GetTxOut(string txId, int vout)
        {
            return _rpcConnector.MakeRequest<GetTransactionResponse>(RpcMethods.gettxout, txId, vout);
        }

        public string Help()
        {
            return _rpcConnector.MakeRequest<string>(RpcMethods.help);
        }

        public string ImportPrivKey(string privateKey)
        {
            return _rpcConnector.MakeRequest<string>(RpcMethods.importprivkey, privateKey);
        }

        public List<ListUnspentResponse> ListUnspent()
        {
            return _rpcConnector.MakeRequest<List<ListUnspentResponse>>(RpcMethods.listunspent);
        }

        public string SendRawTransaction(string rawTx)
        {
            return _rpcConnector.MakeRequest<string>(RpcMethods.sendrawtransaction, rawTx);               
        }

        public string SignMessage(string address, string message)
        {
            return _rpcConnector.MakeRequest<string>(RpcMethods.signmessage, address, message);
        }

        public bool VerifyMessage(string address, string signature, string message)
        {
            return _rpcConnector.MakeRequest<bool>(RpcMethods.verifymessage, address, signature, message);
        }

        public GetInfoResponse GetInfo()
        {
            return _rpcConnector.MakeRequest<GetInfoResponse>(RpcMethods.getinfo);
        }

        public List<string> GetAddressesByAccount(string account)
        {
            return _rpcConnector.MakeRequest<List<string>>(RpcMethods.getaddressesbyaccount, account);
        }

        public SignRawTransactionResponse SignRawTransaction(string rawTx)
        {
            return _rpcConnector.MakeRequest<SignRawTransactionResponse>(RpcMethods.signrawtransaction, rawTx);
        }
    }
}
