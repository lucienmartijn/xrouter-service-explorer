using System;
using System.Linq;
using BlocknetLib.ExceptionHandling.Rpc;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Xrouter.Service.Explorer.Controllers.ViewModels;
using XRouter.Api.Controllers.ViewModels;

namespace XRouter.Api.Controllers
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

        [HttpPost("[action]")]
        public ConnectResponse Connect([FromBody] ConnectRequestViewModel viewModel)
        {
            var resp = xrouterService.xrConnect(viewModel.Service, viewModel.NodeCount);
            return resp;
        }

        [HttpPost("[action]")]
        public IActionResult GetBlockCount([FromBody] BaseXRouterRequestViewModel viewModel)
        {
            if(string.IsNullOrEmpty(viewModel.Token)) 
                return BadRequest("No token parameter supplied");

            try
            {
                if(viewModel.Token.Equals("xr::ETH"))
                    return Ok(xrouterEthereumService.xrGetBlockCount(viewModel.Token, viewModel.NodeCount));

                return Ok(xrouterService.xrGetBlockCount(viewModel.Token, viewModel.NodeCount));
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

        [HttpPost("[action]")]
        public IActionResult DecodeRawTransaction([FromBody] DecodeRawTransactionRequestViewModel viewModel)
        {
            if(string.IsNullOrEmpty(viewModel.Token)) 
                return BadRequest("No blockchain parameter supplied");
            
            try
            {               
                return Ok(xrouterService.xrDecodeRawTransaction(viewModel.Token, viewModel.TxHex, viewModel.NodeCount));                
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
        public IActionResult GetBlockHash([FromBody] BlockHashRequestViewModel viewModel)
        {
            try
            {
                if(viewModel.Token.Equals("xr::ETH"))
                    return Ok(xrouterEthereumService.xrGetBlockHash(viewModel.Token, viewModel.BlockNumber, viewModel.NodeCount));
                return Ok(xrouterService.xrGetBlockHash(viewModel.Token, viewModel.BlockNumber, viewModel.NodeCount));
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
        public IActionResult GetBlock([FromBody] BlockRequestViewModel viewModel)
        {
            try
            {      
                if(viewModel.Token.Equals("xr::ETH"))          
                    return Ok(xrouterEthereumService.xrGetBlock(viewModel.Token, viewModel.BlockHash, viewModel.NodeCount));
                
                return Ok(xrouterService.xrGetBlock(viewModel.Token, viewModel.BlockHash, viewModel.NodeCount));
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
        public IActionResult GetBlocks([FromBody] BlocksRequestViewModel viewModel)
        {
            try
            {
                if(viewModel.Token.Equals("xr::ETH"))
                    return Ok(xrouterEthereumService.xrGetBlocks(viewModel.Token, string.Join(",", viewModel.BlockHashes), viewModel.NodeCount));

                return Ok(xrouterService.xrGetBlocks(viewModel.Token, string.Join(",", viewModel.BlockHashes), viewModel.NodeCount));
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
        public IActionResult GetTransaction([FromBody] TransactionRequestViewModel viewModel)
        {
            try
            {
                if(viewModel.Token.Equals("xr::ETH"))
                    return Ok(xrouterEthereumService.xrGetTransaction(viewModel.Token, viewModel.TxId, viewModel.NodeCount));

                return Ok(xrouterService.xrGetTransaction(viewModel.Token, viewModel.TxId, viewModel.NodeCount));
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
        public IActionResult GetTransactions([FromBody] TransactionsRequestViewModel viewModel)
        {   
            try
            {
                if(viewModel.Token.Equals("xr::ETH"))
                    return Ok(xrouterEthereumService.xrGetTransactions(viewModel.Token, string.Join(",", viewModel.TxIds), viewModel.NodeCount));

                return Ok(xrouterService.xrGetTransactions(viewModel.Token, string.Join(",", viewModel.TxIds), viewModel.NodeCount));
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
                if(viewModel.Token.Equals("xr::ETH"))
                    return Ok(xrouterEthereumService.xrSendTransaction(viewModel.Token, viewModel.SignedTx, viewModel.NodeCount));                

                return Ok(xrouterService.xrSendTransaction(viewModel.Token, viewModel.SignedTx, viewModel.NodeCount));                
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
        public IActionResult ShowConfigs()
        {
            return Ok(xrouterService.xrShowConfigs());
        }

        [HttpGet("[action]")]
        public IActionResult GetReply(string uuid)
        {
            return Ok(xrouterService.xrGetReply(uuid));
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

        [HttpGet]
        public IActionResult Index(string searchString)
        {
            var response = xrouterService.xrGetNetworkServices();

            var services = response.Reply.NodeCounts
                .Join(response.Reply.Services, m => m.Key, m => m.ToString(),
                    (s, sn) => new ServiceViewModel
                    {
                        Name = s.Key,
                        NodeCount = s.Value
                    }).ToList();

            var spvWallets = response.Reply.NodeCounts
                .Join(response.Reply.SpvWallets, m => m.Key, m => m.ToString(),
                    (s, sn) => new ServiceViewModel
                    {
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
