using System;
using System.Collections.Generic;
using System.Linq;
using BlocknetLib.ExceptionHandling.Rpc;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using blocknet_xrouter.Controllers.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Xrouter.Service.Explorer.Controllers.ViewModels;
using Xrouter.Service.Explorer.Extensions;
using Xrouter.Service.Explorer.Core.Models;

namespace blocknet_xrouter.Controllers
{
    [Route("api/xr")]
    public class XRouterController : ControllerBase 
    {
        private readonly IXRouterService xrouterService;
        private readonly IXRouterEthereumService xrouterEthereumService;
        public XRouterController(IXRouterService xrouterService, IXRouterEthereumService xrouterEthereumService){
            this.xrouterService = xrouterService;
            this.xrouterEthereumService = xrouterEthereumService;
        }

        #region XRouter
        [HttpGet("[action]")]
        public ConnectResponse Connect(string service, int node_count = 1)
        {
            var resp = xrouterService.xrConnect(service, node_count);
            return resp;
        }

        [HttpGet("[action]")]
        public IActionResult GetBlockCount([FromQuery(Name = "blockchain")]string blockchain,[FromQuery(Name = "node_count")] int node_count = 1)
        {
            if(string.IsNullOrEmpty(blockchain)) 
                return BadRequest("No blockchain parameter supplied");

            try
            {
                if(blockchain.Equals("xr::ETH"))
                    return Ok(xrouterEthereumService.xrGetBlockCount(blockchain, node_count));

                return Ok(xrouterService.xrGetBlockCount(blockchain, node_count));
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

        [HttpGet("[action]")]
        public IActionResult DecodeRawTransaction(string blockchain, string tx_hex, int node_count = 1)
        {
            if(string.IsNullOrEmpty(blockchain)) 
                return BadRequest("No blockchain parameter supplied");
            
            try
            {               
                return Ok(xrouterService.xrDecodeRawTransaction(blockchain, tx_hex, node_count));                
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

        [HttpGet("[action]")]
        public IActionResult GetBlockHash(string blockchain, string block_number, int node_count = 1)
        {
            try
            {
                if(blockchain.Equals("xr::ETH"))
                    return Ok(xrouterEthereumService.xrGetBlockHash(blockchain, block_number, node_count));
                return Ok(xrouterService.xrGetBlockHash(blockchain, block_number, node_count));
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

        [HttpGet("[action]")]
        public IActionResult GetBlock(string blockchain, string block_hash, int node_count = 1)
        {
            try
            {      
                if(blockchain.Equals("xr::ETH"))          
                    return Ok(xrouterEthereumService.xrGetBlock(blockchain, block_hash, node_count));
                
                return Ok(xrouterService.xrGetBlock(blockchain, block_hash, node_count));
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

        [HttpGet("[action]")]
        public IActionResult GetBlocks(string blockchain, [FromQuery(Name = "block_hashes")] string block_hashes, int node_count = 1)
        {

            var result = JsonConvert.DeserializeObject<List<string>>(block_hashes);
            try
            {
                if(blockchain.Equals("xr::ETH"))
                    return Ok(xrouterEthereumService.xrGetBlocks(blockchain, string.Join(",", result), node_count));

                return Ok(xrouterService.xrGetBlocks(blockchain, string.Join(",", result), node_count));
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

        [HttpGet("[action]")]
        public IActionResult GetTransaction([FromQuery(Name = "blockchain")]string blockchain, string txid, int node_count = 1)
        {
            try
            {
                if(blockchain.Equals("xr::ETH"))
                    return Ok(xrouterEthereumService.xrGetTransaction(blockchain, txid, node_count));

                return Ok(xrouterService.xrGetTransaction(blockchain, txid, node_count));
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

        [HttpGet("[action]")]
        public IActionResult GetTransactions([FromQuery(Name = "blockchain")]string blockchain, [FromQuery(Name = "txids")] string txids, int node_count = 1)
        {  
            var result = JsonConvert.DeserializeObject<List<string>>(txids);        
            try
            {
                if(blockchain.Equals("xr::ETH"))
                    return Ok(xrouterEthereumService.xrGetTransactions(blockchain, string.Join(",",result), node_count));

                return Ok(xrouterService.xrGetTransactions(blockchain, string.Join(",",result), node_count));
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

        [HttpPost("[action]")]
        public IActionResult SendTransaction([FromBody]SendTransactionRequestViewModel viewModel)
        {
            try
            {
                if(viewModel.Blockchain.Equals("xr::ETH"))
                    return Ok(xrouterEthereumService.xrSendTransaction(viewModel.Blockchain, viewModel.SignedTx, viewModel.NodeCount));                

                return Ok(xrouterService.xrSendTransaction(viewModel.Blockchain, viewModel.SignedTx, viewModel.NodeCount));                
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

        [HttpGet("[action]")]
        public GetReplyResponse GetReply(string uuid)
        {
            return xrouterService.xrGetReply(uuid);
        }

        [HttpPost("[action]")]
        public UpdateNetworkServicesResponse UpdateNetworkServices(short num_servicenodes)
        {
            return xrouterService.xrUpdateNetworkServices(num_servicenodes);
        }

        [HttpGet("[action]")]
        public IActionResult GetAllServices()
        {
            var response = xrouterService.xrGetNetworkServices();
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
        [HttpGet("[action]")]
        public IActionResult GetNetworkServices()
        {
            var response = xrouterService.xrGetNetworkServices();
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

        [HttpGet("[action]")]
        public IActionResult GetNetworkSpvWallets()
        {
            var response = xrouterService.xrGetNetworkServices();
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

        [HttpGet("[action]")]
        public GetConnectedNodesResponse GetConnectedNodes()
        {
            return xrouterService.xrConnectedNodes();
        }


        #endregion

        [HttpGet("[action]")]
        public IActionResult ShowConfigs()
        {
            return Ok(xrouterService.xrShowConfigs());
        }
    }
}
