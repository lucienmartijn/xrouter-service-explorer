using System;
using System.Linq;
using AutoMapper;
using BlocknetLib.ExceptionHandling.Rpc;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using XRouter.Api.Controllers.ViewModels;
using XRouter.Api.Controllers.ViewModels.BitcoinBased;
using XRouter.Api.Controllers.ViewModels.Ethereum;

namespace XRouter.Api.Controllers
{
    [Route("api/xr")]
    public class XRouterController : ControllerBase 
    {
        private readonly IMapper mapper;


        private readonly IXRouterService xrouterService;
        private readonly IXRouterEthereumService xrouterEthereumService;
        public XRouterController(
            IMapper mapper,
            IXRouterService xrouterService, 
            IXRouterEthereumService xrouterEthereumService){
            this.mapper = mapper;
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
                    var blockCountETHResponse = xrouterEthereumService.xrGetBlockCount(viewModel.Token, viewModel.NodeCount);

                    if (blockCountETHResponse.Error != null)
                        return Ok(new ErrorResponseViewModel
                        {
                            Error = blockCountETHResponse.Error,
                            Code = blockCountETHResponse.Code,
                            Id = blockCountETHResponse.Id
                        });
                    return Ok(mapper.Map<ViewModels.Ethereum.BlockCountResponseViewModel>(blockCountETHResponse));
                }

                var blockCountResponse = xrouterService.xrGetBlockCount(viewModel.Token, viewModel.NodeCount);

                if (blockCountResponse.Error != null)
                    return Ok(new ErrorResponseViewModel
                    {
                        Error = blockCountResponse.Error,
                        Code = blockCountResponse.Code,
                        Id = blockCountResponse.Id
                    });

                return Ok(mapper.Map<ViewModels.BitcoinBased.BlockCountResponseViewModel>(blockCountResponse));
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
                if (viewModel.Token.Equals("xr::ETH"))
                {
                    var decodeRawTransactionETHResponse = xrouterEthereumService.xrDecodeRawTransaction(viewModel.Token, viewModel.TxHex, viewModel.NodeCount);

                    if (decodeRawTransactionETHResponse.Error != null)
                        return Ok(new ErrorResponseViewModel
                        {
                            Error = decodeRawTransactionETHResponse.Error,
                            Code = decodeRawTransactionETHResponse.Code,
                            Id = decodeRawTransactionETHResponse.Id
                        });
                    return Ok(mapper.Map<ViewModels.Ethereum.DecodeRawTransactionResponseViewModel>(decodeRawTransactionETHResponse));
                }

                var decodeRawTransactionResponse = xrouterService.xrDecodeRawTransaction(viewModel.Token, viewModel.TxHex, viewModel.NodeCount);
                if (decodeRawTransactionResponse.Error != null)
                    return Ok(new ErrorResponseViewModel
                    {
                        Error = decodeRawTransactionResponse.Error,
                        Code = decodeRawTransactionResponse.Code,
                        Id = decodeRawTransactionResponse.Id
                    });

                return Ok(mapper.Map<ViewModels.BitcoinBased.DecodeRawTransactionResponseViewModel>(decodeRawTransactionResponse));
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
                if (viewModel.Token.Equals("xr::ETH"))
                {
                    var getBlockHashETHResponse = xrouterEthereumService.xrGetBlockHash(viewModel.Token, viewModel.BlockNumber, viewModel.NodeCount);

                    if (getBlockHashETHResponse.Error != null)
                        return Ok(new ErrorResponseViewModel
                        {
                            Error = getBlockHashETHResponse.Error,
                            Code = getBlockHashETHResponse.Code,
                            Id = getBlockHashETHResponse.Id
                        });
                    return Ok(mapper.Map<ViewModels.Ethereum.BlockHashResponseViewModel>(getBlockHashETHResponse));
                }

                var blockHashResponse = xrouterService.xrGetBlockHash(viewModel.Token, viewModel.BlockNumber, viewModel.NodeCount);
                if (blockHashResponse.Error != null)
                    return Ok(new ErrorResponseViewModel
                    {
                        Error = blockHashResponse.Error,
                        Code = blockHashResponse.Code,
                        Id = blockHashResponse.Id
                    });

                return Ok(mapper.Map<ViewModels.BitcoinBased.BlockHashResponseViewModel>(blockHashResponse));
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
                if (viewModel.Token.Equals("xr::ETH"))
                {
                    var getBlockETHResponse = xrouterEthereumService.xrGetBlock(viewModel.Token, viewModel.BlockHash, viewModel.NodeCount);

                    if (getBlockETHResponse.Error != null)
                        return Ok(new ErrorResponseViewModel
                        {
                            Error = getBlockETHResponse.Error,
                            Code = getBlockETHResponse.Code,
                            Id = getBlockETHResponse.Id
                        });
                    return Ok(mapper.Map<ViewModels.Ethereum.BlockResponseViewModel>(getBlockETHResponse));
                }          

                var blockResponse = xrouterService.xrGetBlock(viewModel.Token, viewModel.BlockHash, viewModel.NodeCount);
                if (blockResponse.Error != null)
                    return Ok(new ErrorResponseViewModel
                    {
                        Error = blockResponse.Error,
                        Code = blockResponse.Code,
                        Id = blockResponse.Id
                    });

                return Ok(mapper.Map<ViewModels.BitcoinBased.BlockResponseViewModel>(blockResponse));

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
                if (viewModel.Token.Equals("xr::ETH"))
                {
                    var getBlocksETHResponse = xrouterEthereumService.xrGetBlocks(viewModel.Token, string.Join(",", viewModel.BlockHashes), viewModel.NodeCount);

                    if (getBlocksETHResponse.Error != null)
                        return Ok(new ErrorResponseViewModel
                        {
                            Error = getBlocksETHResponse.Error,
                            Code = getBlocksETHResponse.Code,
                            Id = getBlocksETHResponse.Id
                        });
                    return Ok(mapper.Map<ViewModels.Ethereum.BlocksResponseViewModel>(getBlocksETHResponse));
                }

                var blocksResponse = xrouterService.xrGetBlocks(viewModel.Token, string.Join(",", viewModel.BlockHashes), viewModel.NodeCount);

                if (blocksResponse.Error != null)
                    return Ok(new ErrorResponseViewModel
                    {
                        Error = blocksResponse.Error,
                        Code = blocksResponse.Code,
                    });

                return Ok(mapper.Map<ViewModels.BitcoinBased.BlocksResponseViewModel>(blocksResponse));
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
                if (viewModel.Token.Equals("xr::ETH"))
                {
                    var getTransactionETHResponse = xrouterEthereumService.xrGetTransaction(viewModel.Token, viewModel.TxId, viewModel.NodeCount);

                    if (getTransactionETHResponse.Error != null)
                        return Ok(new ErrorResponseViewModel
                        {
                            Error = getTransactionETHResponse.Error,
                            Code = getTransactionETHResponse.Code,
                            Id = getTransactionETHResponse.Id
                        });
                    return Ok(mapper.Map<ViewModels.Ethereum.TransactionResponseViewModel>(getTransactionETHResponse));
                }

                var transactionResponse = xrouterService.xrGetTransaction(viewModel.Token, viewModel.TxId, viewModel.NodeCount);

                if (transactionResponse.Error != null)
                    return Ok(new ErrorResponseViewModel
                    {
                        Error = transactionResponse.Error,
                        Code = transactionResponse.Code,
                        Id = transactionResponse.Id
                    });

                return Ok(mapper.Map<ViewModels.BitcoinBased.TransactionResponseViewModel>(transactionResponse));
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
                if (viewModel.Token.Equals("xr::ETH"))
                {
                    var getTransactionsETHResponse = xrouterEthereumService.xrGetTransactions(viewModel.Token, string.Join(",", viewModel.TxIds), viewModel.NodeCount);

                    if (getTransactionsETHResponse.Error != null)
                        return Ok(new ErrorResponseViewModel
                        {
                            Error = getTransactionsETHResponse.Error,
                            Code = getTransactionsETHResponse.Code,
                            Id = getTransactionsETHResponse.Id
                        });
                    return Ok(mapper.Map<ViewModels.Ethereum.TransactionsResponseViewModel>(getTransactionsETHResponse));
                }

                var transactionsResponse = xrouterService.xrGetTransactions(viewModel.Token, string.Join(",", viewModel.TxIds), viewModel.NodeCount);

                if (transactionsResponse.Error != null)
                    return Ok(new ErrorResponseViewModel
                    {
                        Error = transactionsResponse.Error,
                        Code = transactionsResponse.Code,
                    });

                return Ok(mapper.Map<ViewModels.BitcoinBased.TransactionsResponseViewModel>(transactionsResponse));
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
                if (viewModel.Token.Equals("xr::ETH"))
                {
                    var sendTransactionETHResponse = xrouterEthereumService.xrSendTransaction(viewModel.Token, viewModel.SignedTx, viewModel.NodeCount);

                    if (sendTransactionETHResponse.Error != null)
                        return Ok(new ErrorResponseViewModel
                        {
                            Error = sendTransactionETHResponse.Error,
                            Code = sendTransactionETHResponse.Code,
                            Id = sendTransactionETHResponse.Id
                        });
                    return Ok(mapper.Map<ViewModels.Ethereum.SendTransactionResponseViewModel>(sendTransactionETHResponse));
                }

                var sendTransactionResponse = xrouterService.xrSendTransaction(viewModel.Token, viewModel.SignedTx, viewModel.NodeCount);

                if (sendTransactionResponse.Error != null)
                    return Ok(new ErrorResponseViewModel
                    {
                        Error = sendTransactionResponse.Error,
                        Code = sendTransactionResponse.Code,
                        Id = sendTransactionResponse.Id
                    });

                return Ok(mapper.Map<SendTransactionRequestViewModel>(sendTransactionResponse));               
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
        public IActionResult GetNetworkServices()
        {
            GetNetworkServicesResponse networkServices;
            try
            {
                networkServices = xrouterService.xrGetNetworkServices();
            }
            catch (RpcInternalServerErrorException e)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError
                {
                    Error = e.Message,
                    Code = (int)e.RpcErrorCode.Value
                });
            }
            catch (RpcRequestTimeoutException e)
            {
                return StatusCode(StatusCodes.Status408RequestTimeout, new JsonRpcXrError
                {
                    Error = e.Message,
                });
            }
            var model = mapper.Map<GetNetworkServicesResponseViewModel>(networkServices);
            model.Reply.NodeCounts = model.Reply.NodeCounts.OrderByDescending(s => s.Value).ToDictionary(x => x.Key, x => x.Value);
            return Ok(model);
        }

        [HttpGet]
        public IActionResult Index(string searchString)
        {
            var response = xrouterService.xrGetNetworkServices();

            if (!String.IsNullOrEmpty(searchString))
                response.Reply.NodeCounts = response.Reply.NodeCounts.Where(s => s.Key
                    .IndexOf(searchString, StringComparison.OrdinalIgnoreCase) != -1)
                    .ToDictionary(x => x.Key, x => x.Value);
            
            return Ok(new NetworkServicesResponseViewModel
            {
                SpvWallets = response.Reply.SpvWallets,
                Services = response.Reply.Services,
                NodeCounts = response.Reply.NodeCounts.OrderByDescending(s => s.Value).ToDictionary(x => x.Key, x => x.Value)
            });
        }

        [HttpGet("[action]")]
        public IActionResult Health()
        {
            return Ok("Working");
        }
    }
}
