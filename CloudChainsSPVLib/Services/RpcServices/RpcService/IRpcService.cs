using CloudChainsSPVLib.Requests.CreateRawTransaction;
using CloudChainsSPVLib.Responses;
using CloudChainsSPVLib.SpvParameters;
using System;
using System.Collections.Generic;
using System.Text;

namespace CloudChainsSPVLib.Services
{
    public interface IRpcService
    {
        #region Blockchain

        // gettxout <txid> <vout> - Get info about an unspent transaction output
        GetTransactionResponse GetTxOut(string txId, int vout);
        #endregion

        #region Network

        // getinfo - Get information such as balances, protocol version, and more
        GetInfoResponse GetInfo();
        // getnetworkinfo - Get network information
        GetNetworkInfoResponse GetNetworkInfo();
        // getrawmempool - Get raw mempool
        List<string> GetRawMemPool();
        // getblockchaininfo - Get blockchain info
        GetBlockchainInfoResponse GetBlockchainInfo();
        // getblockhash<height> - Get the hash of a block at a given height
        string GetBlockHash(ulong height);
        // getblock<hash> - Get a block's JSON representation given its hash
        GetBlockResponse GetBlock(string hash);
        #endregion

        #region Wallet
        // listunspent - Get all UTXOs in the wallet
        List<ListUnspentResponse> ListUnspent();
        // getnewaddress - Generate a new address
        string GetNewAddress();
        // gettransaction<txid> - Get a transaction given its TXID
        GetTransactionResponse GetTransaction(string txId);
        // getaddressesbyaccount<account> - Get addresses belonging to a given account.The only account available is 'main' which contains all addresses
        List<string> GetAddressesByAccount(string account);
        // importprivkey<privkey> - Import an address given it's privkey
        string ImportPrivKey(string privateKey);
        // dumpprivkey<address> - Dump an addresses private key
        string DumpPrivKey(string address);
        #endregion

        #region Utilities
        // signmessage<address> <message> - Sign a message with a given address' private key
        string SignMessage(string address, string message);
        // verifymessage<address> <signature> <message> - Verify a signature for a message signed by a given address
        bool VerifyMessage(string address, string signature, string message);
        #endregion

        #region RawTransactions
        // createrawtransaction<inputs> <outputs> - Create a raw transaction given inputs and outputs in JSON format.For more info, run createrawtransaction with no arguments.
        string CreateRawTransaction(CreateRawTransactionRequest rawTransaction);
        // decoderawtransaction<rawtx> - Get a raw transaction's JSON representation
        DecodeRawTransactionResponse DecodeRawTransaction(string rawTx);
        // signrawtransaction<rawtx> - Sign a raw transaction
        SignRawTransactionResponse SignRawTransaction(string rawTx);
        // sendrawtransaction<rawtx> - Broadcast a signed raw transaction to the network
        string SendRawTransaction(string rawTx);

        #endregion

    }
}
