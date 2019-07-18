// Copyright (c) 2014 - 2016 George Kimionis
// See the accompanying file LICENSE for the Software License Aggrement

namespace BitcoinLib.RPC.Specifications
{
    //  Note: Do not alter the capitalization of the enum members as they are being cast as-is to the RPC server
    public enum RpcMethods
    {
        //== Blockchain ==
        getbestblockhash,
        getblock,
        getblockchaininfo,
        getblockcount,
        getblockhash,
        getblockheader,
        getchaintips,
        getdifficulty,
        getmempoolinfo,
        getrawmempool,
        gettxout,
        gettxoutproof,
        gettxoutsetinfo,
        verifychain,
        verifytxoutproof,

        //== Control ==
        getinfo,
        help,
        stop,

        //== Generating ==
        generate,
        getgenerate,
        setgenerate,

        //== Mining ==
        getblocktemplate,
        getmininginfo,
        getnetworkhashps,
        prioritisetransaction,
        submitblock,

        //== Network ==
        addnode,
        clearbanned,
        disconnectnode,
        getaddednodeinfo,
        getconnectioncount,
        getnettotals,
        getnetworkinfo,
        getpeerinfo,
        listbanned,
        ping,
        setban,

        //== Rawtransactions ==
        createrawtransaction,
        decoderawtransaction,
        decodescript,
        fundrawtransaction,
        getrawtransaction,
        sendrawtransaction,
        signrawtransaction,
        signrawtransactionwithkey,
        signrawtransactionwithwallet,
        sighashtype,

        //== Util ==
        createmultisig,
        estimatefee,
        estimatepriority,
        estimatesmartfee,
        estimatesmartpriority,
        validateaddress,
        mirroraddress,
        verifymessage,

        //== Wallet ==
        abandontransaction,
        addmultisigaddress,
        addwitnessaddress,
        backupwallet,
        dumpprivkey,
        dumpwallet,
        getaccount,
        getaccountaddress,
        getaddressesbyaccount,
        getaddressesbylabel,
        getaddressinfo,
        getbalance,
        getnewaddress,
        getrawchangeaddress,
        getreceivedbyaccount,
        getreceivedbyaddress,
        getreceivedbylabel,
        gettransaction,
        getunconfirmedbalance,
        getwalletinfo,
        importaddress,
        importprivkey,
        importpubkey,
        importwallet,
        keypoolrefill,
        listaccounts,
        listaddressgroupings,
        listlabels,
        listlockunspent,
        listreceivedbyaccount,
        listreceivedbyaddress,
        listreceivedbylabel,
        listsinceblock,
        listtransactions,
        listmirrtransactions,
        listunspent,
        lockunspent,
        move,
        sendfrom,
        sendmany,
        sendtoaddress,
        setaccount,
        setlabel,
        settxfee,
        signmessage,
        walletlock,
        walletpassphrase,
        walletpassphrasechange,
        //2018-01-20: added Dash privatesend mixing support
        privatesend,
        //2018-03-02: added getaddressbalance (needs addressindex = 1 in dash.conf)
        getaddressbalance,
        //2018-07-23: Masternode support, usually list command is used
        masternode,
        
        //2019-05-09: Added Blocknet xbridge commands
        //== XBridge ==
        dxCancelOrder,
        dxFlushCancelledOrders,
        dxGetLocalTokens,
        dxGetLockedUtxos,
        dxGetMyOrders,
        dxGetNetworkTokens,
        dxGetOrder,
        dxGetOrderBook,
        dxGetOrderFills,
        dxGetOrderHistory,
        dxGetOrders,
        dxGetTokenBalances,
        dxLoadXBridgeConf,
        dxMakeOrder,
        dxTakeOrder,

        //2019-05-09: Added Blocknet xrouter commands
        //== XRouter ==
        xrConnect,
        xrConnectedNodes,
        xrDecodeRawTransaction,
        xrGetBlock,
        xrGetBlockCount,
        xrGetBlockHash,
        xrGetBlocks,
        xrGetNetworkServices,
        xrGetReply,
        xrGetStatus,
        xrGetTransaction,
        xrGetTransactions,
        xrReloadConfigs,
        xrSendTransaction,
        xrShowConfigs,
        xrStatus,
        xrUpdateConfigs,

        //2019-05-15: Added XCloud commands
        //== XCloud == 
        xrService,
        xrServiceConsensus,
    }
}