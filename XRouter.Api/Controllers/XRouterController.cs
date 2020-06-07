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

                return Ok(mapper.Map<DecodeRawTransactionResponseViewModel>(decodeRawTransactionResponse));
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

                return Ok(mapper.Map<BlockResponseViewModel>(blockResponse));

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

                if (blocksResponse.Error != null)
                    return Ok(new ErrorResponseViewModel
                    {
                        Error = blocksResponse.Error,
                        Code = blocksResponse.Code,
                    });

                return Ok(mapper.Map<BlocksResponseViewModel>(blocksResponse));
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

                return Ok(mapper.Map<TransactionResponseViewModel>(transactionResponse));
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

                if (transactionsResponse.Error != null)
                    return Ok(new ErrorResponseViewModel
                    {
                        Error = transactionsResponse.Error,
                        Code = transactionsResponse.Code,
                    });

                return Ok(mapper.Map<TransactionsResponseViewModel>(transactionsResponse));
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
