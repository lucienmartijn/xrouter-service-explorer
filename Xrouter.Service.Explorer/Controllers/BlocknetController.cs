using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using BlocknetLib.ExceptionHandling.Rpc;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.Services.Coins.Base;
using BlocknetLib.Services.Coins.Blocknet;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using blocknet_xrouter.Controllers.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Xrouter.Service.Explorer.Controllers.ViewModels;
using Xrouter.Service.Explorer.Extensions;
using Xrouter.Service.Explorer.Core.Models;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum;

namespace blocknet_xrouter.Controllers
{
    [Route("api/[controller]")]
    public class BlocknetController : ControllerBase 
    {
        private readonly IBlocknetService _blocknetService;
        public BlocknetController(IBlocknetService blocknetService){
            _blocknetService = blocknetService;
        }

        [HttpGet("[action]")]
        public uint BlockCount(){
            return _blocknetService.GetBlockCount();
        }

        [HttpGet("[action]")]
        public bool VerifyMessage(string address, string signature, string message)
        {
            return _blocknetService.VerifyMessage(address, signature, message);
        }

        #region XRouter
        [HttpGet("Xrouter/[action]")]
        public ConnectResponse Connect(string service, int node_count = 1)
        {
            var resp = _blocknetService.xrConnect(service, node_count);
            return resp;
        }
        
        [HttpGet("Xrouter/[action]")]
        public IActionResult GetSpvWalletInfo(string service, string nodePubKey = null, int node_count = 1)
        {
            ConnectedNodeResponse serviceNode;
            List<ConnectedNodeResponse> otherNodes;

            ConnectResponse connectResponse;
            try
            {
                connectResponse = _blocknetService.xrConnect(service, node_count);    
            }
            catch (RpcRequestTimeoutException e)
            {
                return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcXrError{
                    Error = e.Message
                });                
            }
            
            if(connectResponse.Error != null){
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError{
                    Error = connectResponse.Error,
                    Code = connectResponse.Code
                });
            }

            var connectReply = connectResponse.Reply;                
            var configReply = _blocknetService.xrShowConfigs();

            if(string.IsNullOrWhiteSpace(nodePubKey)){
                serviceNode = connectReply.OrderByDescending(n => n.Score).FirstOrDefault();
                // split node list
                otherNodes = connectReply.Where(s => s.NodePubKey != serviceNode.NodePubKey).ToList();
            }
            else{
                serviceNode = connectReply.Find(s => s.NodePubKey == nodePubKey);
                otherNodes = connectReply.Where(s => s.NodePubKey != nodePubKey).ToList();
            }

            var serviceNodeConfig = configReply.Find(c => c.NodePubKey == serviceNode.NodePubKey);
            var serviceName = service.Replace("xr::", "");
                
            var spvConfig = serviceNode.SpvConfigs.Find(c => c.SpvWallet == serviceName);

            //TODO: Add AutoMapper to replace         
            var viewModel = new SpvWalletResultViewModel
            {
                SpvConfig = new SpvConfigViewModel
                {
                    SpvWallet = spvConfig.SpvWallet,
                    Commands = spvConfig.Commands.Where(c => c.Command != "xrGetConfig").Select(c => new SpvCommandViewModel{
                        Command = c.Command,
                        Disabled = c.Disabled,
                        Fee = c.Fee,
                        PaymentAddress = c.PaymentAddress,
                        RequestLimit = c.RequestLimit
                    }).ToList()
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
        public IActionResult GetServiceInfo(string service, string nodePubKey = null, int node_count = 1)
        {
            //TODO: refactor this into a class so it becomes a thin controller.

            ConnectedNodeResponse serviceNode;
            List<ConnectedNodeResponse> otherNodes;

            ConnectResponse connectResponse;
            try
            {
                connectResponse = _blocknetService.xrConnect(service, node_count);    
            }
            catch (RpcRequestTimeoutException e)
            {
                 return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcXrError{
                    Error = e.Message
                });                
            }

            if(connectResponse.Error != null){
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError{
                    Error = connectResponse.Error,
                    Code = connectResponse.Code
                });
            }

            var connectReply = connectResponse.Reply;
            var configReply = _blocknetService.xrShowConfigs();
                
            if(string.IsNullOrWhiteSpace(nodePubKey)){  
                serviceNode = serviceNode = connectReply.OrderByDescending(n => n.Score).FirstOrDefault();
                // split node list
                otherNodes = connectReply.Where(s => s.NodePubKey != serviceNode.NodePubKey).ToList();
            }
            else{
                serviceNode = connectReply.Find(s => s.NodePubKey == nodePubKey);
                otherNodes = connectReply.Where(s => s.NodePubKey != nodePubKey).ToList();
            }

            var serviceNodeConfig = configReply.Find(c => c.NodePubKey == serviceNode.NodePubKey);
            
            var serviceName = service.Replace("xrs::", "");
            var serv = serviceNode.Services[serviceName];
            
            string help = string.Empty;
            string xcloudConfig = string.Empty;


            if(serviceNodeConfig?.Plugins.Count > 0){
                // Try get help key from config string
                var listConfig = serviceNodeConfig.Plugins[serviceName]
                        .Split(new string[] { "\n", "\r\n" }, StringSplitOptions.RemoveEmptyEntries)
                        .Select(value => value.Split('=')).ToList();

                if(listConfig.Any(lc => lc[0] == "help"))
                {
                    int i = 0;
                    foreach (var config in listConfig)
                    {
                        if (config[0] == "help")
                            break;
                        i++;
                    }
                    //FIXME: i out of bounds when there is no help key in config. Check for help key
                    help = listConfig[i][1];
                    // if(i < listConfig.Count())
                    // {
                    //     foreach (var config in listConfig.Skip(i))
                    //     {
                    //         help += '\n' + config[0];
                    //     }
                    // }
                    xcloudConfig = serviceNodeConfig.Plugins[serviceName];
                }
            }

            //TODO: Add AutoMapper to replace      
            var viewModel = new XCloudServiceResultViewModel
            {
                Service = new XCloudServiceViewModel
                {
                    HelpDescription = help,
                    Disabled = serv.Disabled,
                    Fee = serv.Fee,
                    FetchLimit = serv.FetchLimit,
                    Parameters = serv.Parameters,
                    ParametersList = serv.Parameters != string.Empty ? serv.Parameters.Split(',').ToList() : null,
                    PaymentAddress = serv.PaymentAddress,
                    RequestLimit = serv.RequestLimit,
                    Config = xcloudConfig
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
        public IActionResult GetNodeInfo(string nodePubKey, string service = null, int node_count = 1)
        {
            if (string.IsNullOrWhiteSpace(nodePubKey))
                return BadRequest("NodePubKey was not supplied");

            GetConnectedNodesResponse getConnectedResponse;
            try
            {
                getConnectedResponse = _blocknetService.xrConnectedNodes();    
            }
            catch (RpcInternalServerErrorException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError{
                    Error = e.Message + Environment.NewLine + "Node Public Key: " + nodePubKey,
                    Code = (int) e.RpcErrorCode.Value
                });
            }
            catch (RpcRequestTimeoutException e)
            {
                 return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcXrError{
                    Error = e.Message + Environment.NewLine + "Node Public Key: " + nodePubKey,
                });                
            }

            var connectReply = getConnectedResponse.Reply;

            ConnectResponse connectResponse;
            var serviceNode = connectReply.Find(s => s.NodePubKey == nodePubKey);
            if (serviceNode == null)
            {
                if(service == null) service = "xr::BLOCK";
                try
                {
                    connectResponse = _blocknetService.xrConnect(service, node_count);    
                }
                catch (RpcInternalServerErrorException e)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError{
                        Error = e.Message + Environment.NewLine + "Node Public Key: " + nodePubKey,
                        Code = (int) e.RpcErrorCode.Value
                    });
                }
                catch (RpcRequestTimeoutException e)
                {
                    return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcXrError{
                        Error = e.Message + Environment.NewLine + "Node Public Key: " + nodePubKey,
                    });                
                }
                 
                serviceNode = connectResponse.Reply.Find(s => s.NodePubKey == nodePubKey);

                if(serviceNode == null)
                    return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError
                    {
                        Error = "Servicenode info cannot be retrieved." + Environment.NewLine + "Node Public Key: " + nodePubKey,
                    });
            }
               
            var configReply = _blocknetService.xrShowConfigs();            

            string config = string.Empty;
            var serviceNodeConfig = configReply.Find(c => c.NodePubKey == serviceNode.NodePubKey);
            
            if(serviceNodeConfig != null)
                config = serviceNodeConfig.Config;

            var viewModel = new NodeInfoViewModel
            {
                Banned = serviceNode.Banned,
                FeeDefault = serviceNode.FeeDefault,
                Fees = serviceNode.Fees,
                NodePubKey = serviceNode.NodePubKey,
                PaymentAddress = serviceNode.PaymentAddress,
                Score = serviceNode.Score,
                Config = config,
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
        public IActionResult FilterXCloudServiceServiceNode(XCloudServiceQueryViewModel filterViewModel)
        {
            var connectedResponse = _blocknetService.xrConnectedNodes();

            var serviceNode = connectedResponse.Reply.Find(c => c.NodePubKey == filterViewModel.NodePubKey);

            if(serviceNode == null){
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError
                    {
                        Error = "Servicenode info cannot be retrieved." + Environment.NewLine + "Node Public Key: " + filterViewModel.NodePubKey,
                    });
            }

            var result = new QueryResult<string>();
            var query = serviceNode.Services.Select(s => s.Key).AsQueryable();
            var queryObj = new XCloudQuery
            {
                Page = (int) filterViewModel.Page,
                PageSize = (byte) filterViewModel.PageSize,
            };
            result.TotalItems = query.Count();

            query = query.ApplyPaging(queryObj);

            result.Items = query.ToList();

            var viewModel = new QueryResultViewModel<string>
            {
                Items = result.Items,
                TotalItems = result.TotalItems
            };

            return Ok(viewModel);


        }

        [HttpGet("Xrouter/[action]")]
        public IActionResult GetBlockCount([FromQuery(Name = "blockchain")]string blockchain,[FromQuery(Name = "node_count")] int node_count = 1)
        {
            if(string.IsNullOrEmpty(blockchain)) 
                return BadRequest("No blockchain parameter supplied");

            try
            {
                if(blockchain == "xr::ETH"){
                    return Ok(_blocknetService.xrGetBlockCount<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetBlockCountResponse>(blockchain, node_count));
                }
                return Ok(_blocknetService.xrGetBlockCount<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.GetBlockCountResponse>(blockchain, node_count));
            }
            catch (RpcInternalServerErrorException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError{
                    Error = e.Message,
                    Code = (int) e.RpcErrorCode.Value
                });
            }
            catch (RpcRequestTimeoutException e)
            {
                return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcXrError{
                    Error = e.Message,
                });                
            }
            catch (RpcResponseDeserializationException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError{
                    Error = e.Message,
                });                
            }
            
        }

        [HttpGet("Xrouter/[action]")]
        public IActionResult DecodeRawTransaction(string blockchain, string tx_hex, int node_count = 1)
        {
            if(string.IsNullOrEmpty(blockchain)) 
                return BadRequest("No blockchain parameter supplied");
            
            try
            {
                if(blockchain == "xr::ETH"){
                    return Ok(_blocknetService.xrDecodeRawTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetDecodeRawTransactionResponse>(blockchain, tx_hex, node_count));
                }
                return Ok(_blocknetService.xrDecodeRawTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.GetDecodeRawTransactionResponse>(blockchain, tx_hex, node_count));
            }
            catch (RpcInternalServerErrorException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError{
                    Error = e.Message,
                    Code = (int) e.RpcErrorCode.Value
                });
            }
            catch (RpcRequestTimeoutException e)
            {
                return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcXrError{
                    Error = e.Message,
                });                
            }
        }

        [HttpGet("Xrouter/[action]")]
        public IActionResult GetBlockHash(string blockchain, string block_number, int node_count = 1)
        {
            try
            {
                if(blockchain == "xr::ETH"){
                    return Ok(_blocknetService.xrGetBlockHash<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetBlockHashResponse>(blockchain, block_number, node_count));
                }
                return Ok(_blocknetService.xrGetBlockHash<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.GetBlockHashResponse>(blockchain, block_number, node_count));
            }
            catch (RpcInternalServerErrorException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError{
                    Error = e.Message,
                    Code = (int) e.RpcErrorCode.Value
                });
            }
            catch (RpcRequestTimeoutException e)
            {
                return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcXrError{
                    Error = e.Message,
                });                
            }
        }

        [HttpGet("Xrouter/[action]")]
        public IActionResult GetBlock(string blockchain, string block_hash, int node_count = 1)
        {
            try
            {
                if(blockchain == "xr::ETH"){
                    return Ok(_blocknetService.xrGetBlock<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetBlockResponse>(blockchain, block_hash, node_count));
                }
                return Ok(_blocknetService.xrGetBlock<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.GetBlockResponse>(blockchain, block_hash, node_count));
            }
            catch (RpcInternalServerErrorException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError{
                    Error = e.Message,
                    Code = (int) e.RpcErrorCode.Value
                });
            }
            catch (RpcRequestTimeoutException e)
            {
                return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcXrError{
                    Error = e.Message,
                });                
            }
            
        }

        [HttpGet("Xrouter/[action]")]
        public IActionResult GetBlocks(string blockchain, [FromQuery(Name = "block_hashes")] string block_hashes, int node_count = 1)
        {

            var result = JsonConvert.DeserializeObject<List<string>>(block_hashes);
            try
            {
                if(blockchain == "xr::ETH"){
                    return Ok(_blocknetService.xrGetBlock<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetBlocksResponse>(blockchain, string.Join(",",result), node_count));
                }
                return Ok(_blocknetService.xrGetBlocks<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.GetBlocksResponse>(blockchain, string.Join(",", result), node_count));
            }
            catch (RpcInternalServerErrorException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError{
                    Error = e.Message,
                    Code = (int) e.RpcErrorCode.Value
                });
            }
            catch (RpcRequestTimeoutException e)
            {
                return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcXrError{
                    Error = e.Message,
                });                
            }
        }

        [HttpGet("Xrouter/[action]")]
        public IActionResult GetTransaction([FromQuery(Name = "blockchain")]string blockchain, string txid, int node_count = 1)
        {
            try
            {
                if(blockchain == "xr::ETH"){
                    return Ok(_blocknetService.xrGetTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetTransactionResponse>(blockchain, txid, node_count));
                }
                return Ok(_blocknetService.xrGetTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.GetTransactionResponse>(blockchain, txid, node_count));
            }
            catch (RpcInternalServerErrorException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError{
                    Error = e.Message,
                    Code = (int) e.RpcErrorCode.Value
                });
            }
            catch (RpcRequestTimeoutException e)
            {
                return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcXrError{
                    Error = e.Message,
                });                
            }
        }

        [HttpGet("Xrouter/[action]")]
        public IActionResult GetTransactions([FromQuery(Name = "blockchain")]string blockchain, [FromQuery(Name = "txids")] string txids, int node_count = 1)
        {  
            var result = JsonConvert.DeserializeObject<List<string>>(txids);        
            try
            {
                if(blockchain == "xr::ETH"){
                    return Ok(_blocknetService.xrGetTransactions<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetTransactionsResponse>(blockchain, string.Join(",",result), node_count));
                }
                return Ok(_blocknetService.xrGetTransactions<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.GetTransactionsResponse>(blockchain, string.Join(",",result), node_count));
            }
            catch (RpcInternalServerErrorException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError{
                    Error = e.Message,
                    Code = (int) e.RpcErrorCode.Value
                });
            }
            catch (RpcRequestTimeoutException e)
            {
                return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcXrError{
                    Error = e.Message,
                });                
            }
        }

        [HttpPost("Xrouter/[action]")]
        public IActionResult SendTransaction([FromBody]SendTransactionRequestViewModel viewModel)
        {
            try
            {
                if(viewModel.Blockchain == "xr::ETH"){
                    return Ok(_blocknetService.xrSendTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.SendTransactionResponse>(viewModel.Blockchain, viewModel.SignedTx, viewModel.NodeCount));
                }
                return Ok(_blocknetService.xrSendTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.SendTransactionResponse>(viewModel.Blockchain, viewModel.SignedTx, viewModel.NodeCount));
            }
            catch (RpcInternalServerErrorException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError{
                    Error = e.Message,
                    Code = (int) e.RpcErrorCode.Value
                });
            }
            catch (RpcRequestTimeoutException e)
            {
                return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcXrError{
                    Error = e.Message,
                });                
            }
            catch(RpcResponseDeserializationException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError
                {
                    Error = e.Message,
                });
            }
        }

        [HttpGet("Xrouter/[action]")]
        public GetReplyResponse GetReply(string uuid)
        {
            return _blocknetService.xrGetReply(uuid);
        }

        [HttpGet("Xrouter/[action]")]
        public List<ShowConfigsResponse> ShowConfigs()
        {
            return _blocknetService.xrShowConfigs();
        }

        [HttpPost("Xrouter/[action]")]
        public UpdateNetworkServicesResponse UpdateNetworkServices(short num_servicenodes)
        {
            return _blocknetService.xrUpdateNetworkServices(num_servicenodes);
        }

        [HttpGet("Xrouter/[action]")]
        public IActionResult GetAllServices()
        {
            var response = _blocknetService.xrGetNetworkServices();
            var services = response.Reply.NodeCounts
                .Select(s => new ServiceViewModel{
                    Name = s.Key,
                    NodeCount = s.Value
                }).OrderByDescending(c => c.NodeCount).ToList();

            return Ok(new NetworkServicesResponseViewModel{
                Items = services,
                TotalItems = services.Count
            });
        }
        [HttpGet("Xrouter/[action]")]
        public IActionResult GetNetworkServices()
        {
            var response = _blocknetService.xrGetNetworkServices();
            var services = response.Reply.NodeCounts
                .Join(response.Reply.Services, m => m.Key, m => m.ToString(), 
                    (s, sn) => new ServiceViewModel{
                        Name = s.Key,
                        NodeCount = s.Value
                    }).ToList();
                
            var viewModel = new NetworkServicesResponseViewModel
            {
                Items = services,
                TotalItems = services.Count
            };
            return Ok(viewModel);
        }

        [HttpGet("Xrouter/[action]")]
        public IActionResult GetNetworkSpvWallets()
        {
            var response = _blocknetService.xrGetNetworkServices();
            var services = response.Reply.NodeCounts
                .Join(response.Reply.SpvWallets, m => m.Key, m => m.ToString(), 
                    (s, sn) => new ServiceViewModel{
                        Name = s.Key,
                        NodeCount = s.Value
                    }).OrderByDescending(s => s.NodeCount).ToList();
                
            var viewModel = new NetworkServicesResponseViewModel
            {
                Items = services,
                TotalItems = services.Count                                   
            };
            return Ok(viewModel);
        }

        [HttpGet("Xrouter/[action]")]
        public GetConnectedNodesResponse GetConnectedNodes()
        {
            return _blocknetService.xrConnectedNodes();
        }


        #endregion
        #region XCloud
        [HttpPost("Xrouter/[action]")]
        public IActionResult Service([FromBody]ServiceRequestViewModel request)
        {
            if(request == null)
                return BadRequest("No service request supplied");
            return Ok(_blocknetService.xrService(request.Service, request.Parameters));
        }
        #endregion

        [HttpGet("Xrouter/[action]")]
        public IActionResult GetServiceNodeCount()
        {
            return Ok(_blocknetService.serviceNodeList().Count());
        }

        [HttpGet("Xrouter/[action]")]
        public IActionResult GetServiceNodeList([FromQuery]ServiceNodeQueryViewModel filterViewModel)
        {
            var result = new ServiceNodeQueryResult<Xrouter.Service.Explorer.Core.Models.ServiceNodeInfoResponse>();
            var query = _blocknetService.serviceNodeList().Select(q => new Xrouter.Service.Explorer.Core.Models.ServiceNodeInfoResponse 
            { 
                Address = q.Address,
                Score = q.Score,
                SNodeKey = q.SNodeKey,
                Status = q.Status,
                Tier = q.Tier,
                TimeLastSeen = q.TimeLastSeen,
                TimeLastSeenStr = q.TimeLastSeenStr,
                SpvWallets = q.Services.Where(xw => xw.Split(':')[0].Equals("xr")).Where(xw => !xw.Equals("xr")).ToList(),
                XCloudServices = q.Services.Where(xw => xw.Split(':')[0].Equals("xrs")).Where(xw => !xw.Equals("xrs")).ToList()
            }).AsQueryable();

            if(filterViewModel.Page != null && filterViewModel.PageSize != null)
            {
                var queryObj = new ServiceNodeQuery
                {
                    Page = (int) filterViewModel.Page,
                    PageSize = (byte) filterViewModel.PageSize,
                    AtleastOneSpvWallet = filterViewModel.AtleastOneSpvWallet,
                    SpvWallet = filterViewModel.SpvWallet,
                    XCloudService = filterViewModel.XCloudService,
                    Search = filterViewModel.Search
                };
                query = query.ApplyServiceNodeFiltering(queryObj);

                result.TotalItems = query.Count();

                result.TotalSpvWallets = query.SelectMany(sn => sn.SpvWallets)
                    .Distinct()
                    .Count();
                result.TotalXCloudServices = query.SelectMany(sn => sn.XCloudServices)
                    .Distinct()
                    .Count();

                query = query.ApplyPaging(queryObj);
            }

            result.Items = query.ToList();

            //TODO: Add an automapper module
            var viewModel = new ServiceNodeQueryResultViewModel<ServiceNodeViewModel>
            {
                Items = result.Items.Select(sn => new ServiceNodeViewModel
                {
                    Score = sn.Score,
                    Tier = sn.Tier,
                    TimeLastSeen = sn.TimeLastSeen,
                    TimeLastSeenStr = sn.TimeLastSeenStr,
                    Address = sn.Address,
                    SNodeKey = sn.SNodeKey,
                    Status = sn.Status,
                    SpvWallets = sn.SpvWallets,
                    XCloudServices = sn.XCloudServices

                }).ToList(),
                TotalItems = result.TotalItems,
                TotalSpvWallets = result.TotalSpvWallets,
                TotalXCloudServices = result.TotalXCloudServices
            };

            return Ok(viewModel);
        }

        [HttpGet("Xrouter")]
        public IActionResult Index(string searchString)
        {
            var response = _blocknetService.xrGetNetworkServices();

            var services = response.Reply.NodeCounts
                .Join(response.Reply.Services, m => m.Key, m => m.ToString(), 
                    (s, sn) => new ServiceViewModel{
                        Name = s.Key,
                        NodeCount = s.Value
                    }).ToList();

            var spvWallets = response.Reply.NodeCounts
                .Join(response.Reply.SpvWallets, m => m.Key, m => m.ToString(), 
                    (s, sn) => new ServiceViewModel{
                        Name = s.Key,
                        NodeCount = s.Value
                    }).ToList();
            
            var allServices = services.Union(spvWallets).ToList();

            if (!String.IsNullOrEmpty(searchString))
                allServices = allServices.Where(s => s.Name
                    .IndexOf(searchString, StringComparison.OrdinalIgnoreCase) != -1)
                    .ToList();
            
            var viewModel = new NetworkServicesResponseViewModel
            {
                Items = allServices,
                TotalItems = allServices.Count
            };
            return Ok(viewModel);
        }

    }
}
