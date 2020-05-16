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
        public IActionResult GetBlockCount([FromBody] XRouterBaseRequestViewModel viewModel)
        {
            if(string.IsNullOrEmpty(viewModel.Token)) 
                return BadRequest("No token parameter supplied");

            try
            {
                if (viewModel.Token.Equals("xr::ETH"))
                {
                    return Ok(xrouterEthereumService.xrGetBlockCount(viewModel.Token, viewModel.NodeCount));
                }

                var blockCountResponse = xrouterService.xrGetBlockCount(viewModel.Token, viewModel.NodeCount);

                if (blockCountResponse.Error != null)
                    return Ok(new ErrorResponseViewModel
                    {
                        Error = blockCountResponse.Error,
                        Code = blockCountResponse.Code,
                        Id = blockCountResponse.Id
                    });

                return Ok(new BlockCountResponseViewModel 
                {
                    Reply = blockCountResponse.Reply,
                    Uuid = blockCountResponse.Uuid
                });
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
                var decodeRawTransactionResponse = xrouterService.xrDecodeRawTransaction(viewModel.Token, viewModel.TxHex, viewModel.NodeCount);
                if (decodeRawTransactionResponse.Error != null)
                    return Ok(new ErrorResponseViewModel
                    {
                        Error = decodeRawTransactionResponse.Error,
                        Code = decodeRawTransactionResponse.Code,
                        Id = decodeRawTransactionResponse.Id
                    });
                return Ok(new DecodeRawTransactionResponseViewModel
                {
                    Reply = decodeRawTransactionResponse.Reply,
                    Uuid = decodeRawTransactionResponse.Uuid
                });              
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

                var blockHashResponse = xrouterService.xrGetBlockHash(viewModel.Token, viewModel.BlockNumber, viewModel.NodeCount);
                if (blockHashResponse.Error != null)
                    return Ok(new ErrorResponseViewModel
                    {
                        Error = blockHashResponse.Error,
                        Code = blockHashResponse.Code,
                        Id = blockHashResponse.Id
                    });

                return Ok(new BlockHashResponseViewModel 
                {
                    Reply = blockHashResponse.Reply,
                    Uuid = blockHashResponse.Uuid
                });
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

                var blockResponse = xrouterService.xrGetBlock(viewModel.Token, viewModel.BlockHash, viewModel.NodeCount);
                if (blockResponse.Error != null)
                    return Ok(new ErrorResponseViewModel
                    {
                        Error = blockResponse.Error,
                        Code = blockResponse.Code,
                        Id = blockResponse.Id
                    });

                return Ok(new BlockResponseViewModel 
                {
                    Reply = blockResponse.Reply,
                    Uuid = blockResponse.Uuid
                });

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

                var blocksResponse = xrouterService.xrGetBlocks(viewModel.Token, string.Join(",", viewModel.BlockHashes), viewModel.NodeCount);

                return Ok(new BlocksResponseViewModel
                {
                    Reply = blocksResponse.Reply,
                    Uuid = blocksResponse.Uuid
                });
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

                var transactionResponse = xrouterService.xrGetTransaction(viewModel.Token, viewModel.TxId, viewModel.NodeCount);

                if (transactionResponse.Error != null)
                    return Ok(new ErrorResponseViewModel
                    {
                        Error = transactionResponse.Error,
                        Code = transactionResponse.Code,
                        Id = transactionResponse.Id
                    });
                return Ok(new TransactionResponseViewModel 
                {
                    Reply = transactionResponse.Reply,
                    Uuid = transactionResponse.Uuid
                });
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

                var transactionsResponse = xrouterService.xrGetTransactions(viewModel.Token, string.Join(",", viewModel.TxIds), viewModel.NodeCount);
                return Ok(new TransactionsResponseViewModel
                {
                    Reply = transactionsResponse.Reply,
                    Uuid = transactionsResponse.Uuid
                });
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

                var sendTransactionResponse = xrouterService.xrSendTransaction(viewModel.Token, viewModel.SignedTx, viewModel.NodeCount);

                if (sendTransactionResponse.Error != null)
                    return Ok(new ErrorResponseViewModel
                    {
                        Error = sendTransactionResponse.Error,
                        Code = sendTransactionResponse.Code,
                        Id = sendTransactionResponse.Id
                    });

                return Ok(new SendTransactionResponseViewModel
                {
                    Reply = sendTransactionResponse.Reply,
                    Uuid = sendTransactionResponse.Uuid
                });               
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
