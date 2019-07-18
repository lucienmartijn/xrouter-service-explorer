using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BitcoinLib.RPC.RequestResponse;
using BitcoinLib.Services.Coins.Base;
using BitcoinLib.Services.Coins.Bitcoin;
using BitcoinLib.Services.Coins.Blocknet;
using BitcoinLib.Services.Coins.Blocknet.Xrouter;
using blocknet_xrouter.Controllers.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace blocknet_xrouter.Controllers
{
    [Route("api/[controller]")]
    public class BlocknetController : Controller
    {
        private readonly IBlocknetService _blocknetService;
        public BlocknetController(IBlocknetService blocknetService){
            this._blocknetService = blocknetService;
        }

        [HttpGet("[action]")]
        public uint BlockCount(){
            return this._blocknetService.GetBlockCount();
        }

        #region XRouter
        [HttpGet("Xrouter/[action]")]
        public GetBlockCountResponse GetBlockCount(string blockchain, int node_count = 1){
            return this._blocknetService.xrGetBlockCount(blockchain, node_count);
        }

        [HttpGet("Xrouter/[action]")]
        public DecodeRawTransactionResponse DecodeRawTransaction(string blockchain, string tx_hex, int node_count = 1){
            return this._blocknetService.xrDecodeRawTransaction(blockchain, tx_hex, node_count);
        }

        [HttpGet("Xrouter/[action]")]
        public ConnectResponse Connect(string service, int node_count = 1){

            return this._blocknetService.xrConnect(service, node_count);
        }

        [HttpGet("Xrouter/[action]")]
        public IActionResult GetServiceInfo(string service, string nodePubKey = null, int node_count = 1){
            //TODO: refactor this so it becomes a thin controller.

            ConnectedNodeResponse serviceNode;
            List<ConnectedNodeResponse> otherNodes;

            var connectReply = this._blocknetService.xrConnect(service, node_count).Reply;
            var configReply = this._blocknetService.xrShowConfigs();

            if(connectReply == null || configReply == null )
                return BadRequest();
                
            if(string.IsNullOrWhiteSpace(nodePubKey)){
                // Randomly choose a service node from the list if no nodePubKey is given
                var r = new Random();
                var index = r.Next(connectReply.Count);
                serviceNode = connectReply[index];
                // split node list
                otherNodes = connectReply.Skip(index + 1).ToList();
            }
            else{
                serviceNode = connectReply.Find(s => s.NodePubKey == nodePubKey);
                otherNodes = connectReply.Skip(connectReply.IndexOf(serviceNode)+1).ToList();
            }

            var serviceName = service.Replace("xrs::", "");
            var serviceConfig = configReply.Find(c => c.NodePubKey == serviceNode.NodePubKey).Plugins[serviceName];
            var serv = serviceNode.Services[serviceName];
            
            // Try get help key from config string
            var dictConfig = serviceConfig.Split(new string[] {"\n", "\r\n"}, StringSplitOptions.RemoveEmptyEntries)
                    .Select(value => value.Split('='))
                    .ToDictionary(pair => pair[0], pair => pair[1]);
            
            string help;
            dictConfig.TryGetValue("help", out help);
                    
            //TODO: Add AutoMapper to replace this.        
            var viewModel = new GetServiceInfoViewModel
            {
                Service = new XRouterServiceViewModel
                {
                    HelpDescription = help,
                    Disabled = serv.Disabled,
                    Fee = serv.Fee,
                    FetchLimit = serv.FetchLimit,
                    Parameters = serv.Parameters,
                    PaymentAddress = serv.PaymentAddress,
                    RequestLimit = serv.RequestLimit,
                    Config = serviceConfig
                },
                Node = new NodeInfoViewModel
                {
                    Banned = serviceNode.Banned,
                    NodePubKey = serviceNode.NodePubKey,
                    PaymentAddress = serviceNode.PaymentAddress,
                    Score = serviceNode.Score
                },
                OtherNodes = otherNodes.Select(n => new NodeInfoViewModel{
                    Banned = n.Banned,
                    NodePubKey = n.NodePubKey,
                    PaymentAddress = n.PaymentAddress,
                    Score = n.Score
                }).ToList()    
            };

            return Ok(viewModel);
        }

        [HttpGet("Xrouter/[action]")]
        public IActionResult GetNodeInfo(string nodePubKey){
            var connectReply = this._blocknetService.xrConnectedNodes().Reply;
            var serviceNode = connectReply.Find(s => s.NodePubKey == nodePubKey);

            if (string.IsNullOrWhiteSpace(serviceNode.NodePubKey))
                return BadRequest();

            var viewModel = new NodeInfoViewModel
            {
                Banned = serviceNode.Banned,
                FeeDefault = serviceNode.FeeDefault,
                Fees = serviceNode.Fees,
                NodePubKey = serviceNode.NodePubKey,
                PaymentAddress = serviceNode.PaymentAddress,
                Score = serviceNode.Score,
                Services = serviceNode.Services.Select(s => s.Key).ToList(),
                SpvWallets = serviceNode.SpvWallets,
                SpvConfigs = serviceNode.SpvConfigs.Select(s => new SpvConfigViewModel{
                    SpvWallet = s.SpvWallet,
                    Commands = s.Commands.Select(c => new SpvCommandViewModel{
                        Command = c.Command,
                        Disabled = c.Disabled,
                        Fee = c.Fee,
                        PaymentAddress = c.PaymentAddress,
                        RequestLimit = c.RequestLimit
                    }).ToList()
                }).ToList()
            };

            return Ok(viewModel);
        }

        [HttpGet("Xrouter/[action]")]
        public GetBlockHashResponse GetBlockHash(string blockchain, string block_number, int node_count = 1){
            return this._blocknetService.xrGetBlockHash(blockchain, block_number, node_count);
        }

        [HttpGet("Xrouter/[action]")]
        public GetBlockResponse GetBlock(string blockchain, string block_hash, int node_count = 1){
            return this._blocknetService.xrGetBlock(blockchain, block_hash, node_count);
        }

        [HttpGet("Xrouter/[action]")]
        public GetBlocksResponse GetBlocks(string blockchain, [FromQuery] List<string> block_hashes, int node_count = 1){

            return this._blocknetService.xrGetBlocks(blockchain, string.Join(",", block_hashes), node_count);
        }

        [HttpGet("Xrouter/[action]")]
        public GetReplyResponse GetReply(string uuid){
            return this._blocknetService.xrGetReply(uuid);
        }

        [HttpGet("Xrouter/[action]")]
        public GetTransactionResponse GetTransaction(string blockchain, string txid, int node_count = 1){
            return this._blocknetService.xrGetTransaction(blockchain, txid, node_count);
        }

        [HttpGet("Xrouter/[action]")]
        public GetTransactionsResponse GetTransactions(string blockchain, List<string> txids, int node_count = 1){
            
            return this._blocknetService.xrGetTransactions(blockchain, string.Join(",",txids), node_count);
        }

        [HttpPost("Xrouter/[action]")]
        public SendTransactionResponse SendTransaction(string blockchain, string signed_tx){
            return this._blocknetService.xrSendTransaction(blockchain, signed_tx);
        }

        [HttpGet("Xrouter/[action]")]
        public List<ShowConfigsResponse> ShowConfigs(){
            return this._blocknetService.xrShowConfigs();
        }

        [HttpPost("Xrouter/[action]")]
        public UpdateConfigsResponse UpdateConfigs(bool force_check = false){
            return this._blocknetService.xrUpdateConfigs(force_check);
        }

        [HttpGet("Xrouter/[action]")]
        public IActionResult GetNetworkServices(){
            var response = this._blocknetService.xrGetNetworkServices();
            var services = response.Reply.NodeCounts
                .Join(response.Reply.Services, m => m.Key, m => m.ToString(), 
                    (s, sn) => new ServiceViewModel{
                        Name = s.Key,
                        NodeCount = s.Value
                    }).ToList();
                
            var viewModel = new GetNetworkServicesResponseViewModel
            {
                Items = services,
                TotalItems = services.Count
            };
            return Ok(viewModel);
        }

        [HttpGet("Xrouter/[action]")]
        public GetNetworkServicesResponseViewModel GetNetworkSpvWallets(){
            var response = this._blocknetService.xrGetNetworkServices();
            var services = response.Reply.NodeCounts
                .Join(response.Reply.SpvWallets, m => m.Key, m => m.ToString(), 
                    (s, sn) => new ServiceViewModel{
                        Name = s.Key,
                        NodeCount = s.Value
                    }).ToList();
                
            var viewModel = new GetNetworkServicesResponseViewModel
            {
                Items = services,
                TotalItems = services.Count                                   
            };
            return viewModel;
        }

        [HttpGet("Xrouter/[action]")]
        public GetConnectedNodesResponse GetConnectedNodes(){
            return this._blocknetService.xrConnectedNodes();
        }


        #endregion
        #region 
        [HttpGet("Xrouter/[action]")]
        public ServiceResponse Service(string service){
            //TODO: Check if service is already connected
            return this._blocknetService.xrService(service);
        }
        #endregion
    }
}
