namespace CloudChainsSPVLib.RPC.Specifications
{
    //  Note: Do not alter the capitalization of the enum members as they are being cast as-is to the RPC server
    public enum RpcMethods
    {
        help,
        //== Blockchain ==
        gettxout,

        //== Network ==
        getinfo,
        getnetworkinfo,
        getrawmempool,
        getblockchaininfo,
        getblockhash,
        getblock,

        //== Wallet ==
        
        getnewaddress,
        gettransaction,
        getaddressesbyaccount,
        importprivkey,
        dumpprivkey,   
        listunspent,

        //== Util ==
        signmessage,
        verifymessage,

        //== Rawtransactions ==
        createrawtransaction,
        decoderawtransaction,
        signrawtransaction,
        sendrawtransaction,
    }
}