using System;
using System.Linq;
using AutoMapper;
using BlocknetLib.ExceptionHandling.Rpc;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.RPC.Specifications;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.Neo;
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
        public XRouterController(
            IMapper mapper,
            IXRouterService xrouterService
            )
        {
            this.mapper = mapper;
            this.xrouterService = xrouterService;
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
            if (viewModel.Token.Equals("xr::ETH"))
            {
                var blockCountETHResponse = xrouterService.xrGetBlockCount<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetBlockCountResponse>
                    (viewModel.Token, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Ethereum.GetBlockCountResponseViewModel>(blockCountETHResponse));
            }

            if (viewModel.Token.Equals("xr::ETC"))
            {
                var blockCountETCResponse = xrouterService.xrGetBlockCount<BlocknetLib.Services.Coins.Blocknet.Xrouter.EthereumClassic.GetBlockCountResponse>
                    (viewModel.Token, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.EthereumClassic.GetBlockCountResponseViewModel>(blockCountETCResponse));
            }

            if (viewModel.Token.Equals("xr::NEO"))
            {
                var blockCountNEOResponse = xrouterService.xrGetBlockCount<BlocknetLib.Services.Coins.Blocknet.Xrouter.Neo.GetBlockCountResponse>
                    (viewModel.Token, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Neo.GetBlockCountResponseViewModel>(blockCountNEOResponse));
            }

            if (viewModel.Token.Equals("xr::XMR"))
            {
                var blockCountXMRResponse = xrouterService.xrGetBlockCount<BlocknetLib.Services.Coins.Blocknet.Xrouter.Monero.GetBlockCountResponse>
                    (viewModel.Token, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Monero.GetBlockCountResponseViewModel>(blockCountXMRResponse));
            }

            var blockCountResponse = xrouterService.xrGetBlockCount<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.GetBlockCountResponse>
                (viewModel.Token, viewModel.NodeCount);

            return Ok(mapper.Map<ViewModels.BitcoinBased.BlockCountResponseViewModel>(blockCountResponse));
        }

        [HttpPost("[action]")]
        public IActionResult DecodeRawTransaction([FromBody] DecodeRawTransactionRequestViewModel viewModel)
        {
            if (viewModel.Token.Equals("xr::ETH"))
            {
                var decodeRawTransactionETHResponse = xrouterService.xrDecodeRawTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetDecodeRawTransactionResponse>
                    (viewModel.Token, viewModel.TxHex, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Ethereum.GetDecodeRawTransactionResponseViewModel>(decodeRawTransactionETHResponse));
            }

            if (viewModel.Token.Equals("xr::ETC"))
            {
                var decodeRawTransactionETCResponse = xrouterService.xrDecodeRawTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.EthereumClassic.GetDecodeRawTransactionResponse>
                    (viewModel.Token, viewModel.TxHex, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.EthereumClassic.GetDecodeRawTransactionResponseViewModel>(decodeRawTransactionETCResponse));
            }

            if (viewModel.Token.Equals("xr::NEO"))
            {
                var decodeRawTransactionNEOResponse = xrouterService.xrDecodeRawTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.Neo.GetDecodeRawTransactionResponse>
                    (viewModel.Token, viewModel.TxHex, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Neo.GetDecodeRawTransactionResponseViewModel>(decodeRawTransactionNEOResponse));
            }

            if (viewModel.Token.Equals("xr::XMR"))
            {
                var decodeRawTransactionXMRResponse = xrouterService.xrDecodeRawTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.Monero.GetDecodeRawTransactionResponse>
                    (viewModel.Token, viewModel.TxHex, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Monero.GetDecodeRawTransactionResponseViewModel>(decodeRawTransactionXMRResponse));
            }

            var decodeRawTransactionResponse = xrouterService.xrDecodeRawTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.GetDecodeRawTransactionResponse>
                (viewModel.Token, viewModel.TxHex, viewModel.NodeCount);

            return Ok(mapper.Map<ViewModels.BitcoinBased.DecodeRawTransactionResponseViewModel>(decodeRawTransactionResponse));
        }

        [HttpPost("[action]")]
        public IActionResult GetBlockHash([FromBody] BlockHashRequestViewModel viewModel)
        {
            if (viewModel.Token.Equals("xr::ETH"))
            {
                var getBlockHashETHResponse = xrouterService.xrGetBlockHash<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetBlockHashResponse>
                    (viewModel.Token, viewModel.BlockNumber, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Ethereum.GetBlockHashResponseViewModel>(getBlockHashETHResponse));
            }

            if (viewModel.Token.Equals("xr::ETC"))
            {
                var getBlockHashETCResponse = xrouterService.xrGetBlockHash<BlocknetLib.Services.Coins.Blocknet.Xrouter.EthereumClassic.GetBlockHashResponse>
                    (viewModel.Token, viewModel.BlockNumber, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.EthereumClassic.GetBlockHashResponseViewModel>(getBlockHashETCResponse));
            }

            if (viewModel.Token.Equals("xr::NEO"))
            {
                var getBlockHashNeoResponse = xrouterService.xrGetBlockHash<BlocknetLib.Services.Coins.Blocknet.Xrouter.Neo.GetBlockHashResponse>
                    (viewModel.Token, viewModel.BlockNumber, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Neo.GetBlockHashResponseViewModel>(getBlockHashNeoResponse));
            }

            if (viewModel.Token.Equals("xr::XMR"))
            {
                var getBlockHashXMRResponse = xrouterService.xrGetBlockHash<BlocknetLib.Services.Coins.Blocknet.Xrouter.Monero.GetBlockHashResponse>
                    (viewModel.Token, viewModel.BlockNumber, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Monero.GetBlockHashResponseViewModel>(getBlockHashXMRResponse));
            }

            var blockHashResponse = xrouterService.xrGetBlockHash<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.GetBlockHashResponse>
                (viewModel.Token, viewModel.BlockNumber, viewModel.NodeCount);

            return Ok(mapper.Map<ViewModels.BitcoinBased.BlockHashResponseViewModel>(blockHashResponse));
        }

        [HttpPost("[action]")]
        public IActionResult GetBlock([FromBody] BlockRequestViewModel viewModel)
        {
            if (viewModel.Token.Equals("xr::ETH"))
            {
                var getBlockETHResponse = xrouterService.xrGetBlock<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetBlockResponse>
                    (viewModel.Token, viewModel.BlockHash, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Ethereum.GetBlockResponseViewModel>(getBlockETHResponse));
            }

            if (viewModel.Token.Equals("xr::ETC"))
            {
                var getBlockETCResponse = xrouterService.xrGetBlock<BlocknetLib.Services.Coins.Blocknet.Xrouter.EthereumClassic.GetBlockResponse>
                    (viewModel.Token, viewModel.BlockHash, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.EthereumClassic.GetBlockResponseViewModel>(getBlockETCResponse));
            }

            if (viewModel.Token.Equals("xr::NEO"))
            {
                var getBlockNEOResponse = xrouterService.xrGetBlock<BlocknetLib.Services.Coins.Blocknet.Xrouter.Neo.GetBlockResponse>
                    (viewModel.Token, viewModel.BlockHash, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Neo.GetBlockResponseViewModel>(getBlockNEOResponse));
            }

            if (viewModel.Token.Equals("xr::XMR"))
            {
                var getBlockXMRResponse = xrouterService.xrGetBlock<BlocknetLib.Services.Coins.Blocknet.Xrouter.Monero.GetBlockResponse>
                    (viewModel.Token, viewModel.BlockHash, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Monero.GetBlockResponseViewModel>(getBlockXMRResponse));
            }

            var blockResponse = xrouterService.xrGetBlock<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.GetBlockResponse>
                (viewModel.Token, viewModel.BlockHash, viewModel.NodeCount);

            return Ok(mapper.Map<ViewModels.BitcoinBased.BlockResponseViewModel>(blockResponse));
        }

        [HttpPost("[action]")]
        public IActionResult GetBlocks([FromBody] BlocksRequestViewModel viewModel)
        {
            if (viewModel.Token.Equals("xr::ETH"))
            {
                var getBlocksETHResponse = xrouterService.xrGetBlocks<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetBlocksResponse>
                    (viewModel.Token, string.Join(",", viewModel.BlockHashes), viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Ethereum.GetBlocksResponseViewModel>(getBlocksETHResponse));
            }

            if (viewModel.Token.Equals("xr::ETC"))
            {
                var getBlocksETCResponse = xrouterService.xrGetBlocks<BlocknetLib.Services.Coins.Blocknet.Xrouter.EthereumClassic.GetBlocksResponse>
                    (viewModel.Token, string.Join(",", viewModel.BlockHashes), viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.EthereumClassic.GetBlocksResponseViewModel>(getBlocksETCResponse));
            }

            if (viewModel.Token.Equals("xr::NEO"))
            {
                var getBlocksNEOResponse = xrouterService.xrGetBlocks<BlocknetLib.Services.Coins.Blocknet.Xrouter.Neo.GetBlocksResponse>
                    (viewModel.Token, string.Join(",", viewModel.BlockHashes), viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Neo.GetBlocksResponseViewModel>(getBlocksNEOResponse));
            }

            if (viewModel.Token.Equals("xr::XMR"))
            {
                var getBlocksXMRResponse = xrouterService.xrGetBlocks<BlocknetLib.Services.Coins.Blocknet.Xrouter.Monero.GetBlocksResponse>
                    (viewModel.Token, string.Join(",", viewModel.BlockHashes), viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Monero.GetBlocksResponseViewModel>(getBlocksXMRResponse));
            }

            var blocksResponse = xrouterService.xrGetBlocks<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.GetBlocksResponse>
                (viewModel.Token, string.Join(",", viewModel.BlockHashes), viewModel.NodeCount);

            return Ok(mapper.Map<ViewModels.BitcoinBased.BlocksResponseViewModel>(blocksResponse));
        }

        [HttpPost("[action]")]
        public IActionResult GetTransaction([FromBody] TransactionRequestViewModel viewModel)
        {
            if (viewModel.Token.Equals("xr::ETH"))
            {
                var getTransactionETHResponse = xrouterService.xrGetTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetTransactionResponse>
                    (viewModel.Token, viewModel.TxId, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Ethereum.GetTransactionResponseViewModel>(getTransactionETHResponse));
            }

            if (viewModel.Token.Equals("xr::ETC"))
            {
                var getTransactionETCResponse = xrouterService.xrGetTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.EthereumClassic.GetTransactionResponse>
                    (viewModel.Token, viewModel.TxId, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.EthereumClassic.GetTransactionResponseViewModel>(getTransactionETCResponse));
            }

            if (viewModel.Token.Equals("xr::NEO"))
            {
                var getTransactionNEOResponse = xrouterService.xrGetTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.Neo.GetTransactionResponse>
                    (viewModel.Token, viewModel.TxId, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Neo.GetTransactionResponseViewModel>(getTransactionNEOResponse));
            }

            if (viewModel.Token.Equals("xr::XMR"))
            {
                var getTransactionXMRResponse = xrouterService.xrGetTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.Monero.GetTransactionResponse>
                    (viewModel.Token, viewModel.TxId, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Monero.GetTransactionResponseViewModel>(getTransactionXMRResponse));
            }

            var transactionResponse = xrouterService.xrGetTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.GetTransactionsResponse>
                (viewModel.Token, viewModel.TxId, viewModel.NodeCount);

            return Ok(mapper.Map<ViewModels.BitcoinBased.TransactionResponseViewModel>(transactionResponse));
        }

        [HttpPost("[action]")]
        public IActionResult GetTransactions([FromBody] TransactionsRequestViewModel viewModel)
        {   
            if (viewModel.Token.Equals("xr::ETH"))
            {
                var getTransactionsETHResponse = xrouterService.xrGetTransactions<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetTransactionsResponse>
                    (viewModel.Token, string.Join(",", viewModel.TxIds), viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Ethereum.GetTransactionsResponseViewModel>(getTransactionsETHResponse));
            }

            if (viewModel.Token.Equals("xr::ETC"))
            {
                var getTransactionsETCResponse = xrouterService.xrGetTransactions<BlocknetLib.Services.Coins.Blocknet.Xrouter.EthereumClassic.GetTransactionsResponse>
                    (viewModel.Token, string.Join(",", viewModel.TxIds), viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.EthereumClassic.GetTransactionsResponseViewModel>(getTransactionsETCResponse));
            }

            if (viewModel.Token.Equals("xr::NEO"))
            {
                var getTransactionsNEOResponse = xrouterService.xrGetTransactions<BlocknetLib.Services.Coins.Blocknet.Xrouter.Neo.GetTransactionsResponse>
                    (viewModel.Token, string.Join(",", viewModel.TxIds), viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Neo.GetTransactionsResponseViewModel>(getTransactionsNEOResponse));
            }

            if (viewModel.Token.Equals("xr::XMR"))
            {
                var getTransactionsXMRResponse = xrouterService.xrGetTransactions<BlocknetLib.Services.Coins.Blocknet.Xrouter.Monero.GetTransactionsResponse>
                    (viewModel.Token, string.Join(",", viewModel.TxIds), viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Monero.GetTransactionsResponseViewModel>(getTransactionsXMRResponse));
            }

            var transactionsResponse = xrouterService.xrGetTransactions<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.GetTransactionsResponse>
                (viewModel.Token, string.Join(",", viewModel.TxIds), viewModel.NodeCount);

            return Ok(mapper.Map<ViewModels.BitcoinBased.TransactionsResponseViewModel>(transactionsResponse));
        }

        [HttpPost("[action]")]
        public IActionResult SendTransaction([FromBody]SendTransactionRequestViewModel viewModel)
        {
            if (viewModel.Token.Equals("xr::ETH"))
            {
                var sendTransactionETHResponse = xrouterService.xrSendTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.SendTransactionResponse>
                    (viewModel.Token, viewModel.SignedTx, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Ethereum.SendTransactionResponseViewModel>(sendTransactionETHResponse));
            }

            if (viewModel.Token.Equals("xr::ETC"))
            {
                var sendTransactionETCResponse = xrouterService.xrSendTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.EthereumClassic.SendTransactionResponse>
                    (viewModel.Token, viewModel.SignedTx, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.EthereumClassic.SendTransactionResponseViewModel>(sendTransactionETCResponse));
            }

            if (viewModel.Token.Equals("xr::NEO"))
            {
                var sendTransactionNEOResponse = xrouterService.xrSendTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.Neo.SendTransactionResponse>
                    (viewModel.Token, viewModel.SignedTx, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Neo.SendTransactionResponseViewModel>(sendTransactionNEOResponse));
            }

            if (viewModel.Token.Equals("xr::XMR"))
            {
                var sendTransactionXMRResponse = xrouterService.xrSendTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.Monero.SendTransactionResponse>
                    (viewModel.Token, viewModel.SignedTx, viewModel.NodeCount);

                return Ok(mapper.Map<ViewModels.Monero.SendTransactionResponseViewModel>(sendTransactionXMRResponse));
            }

            var sendTransactionResponse = xrouterService.xrSendTransaction<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.SendTransactionResponse>
                (viewModel.Token, viewModel.SignedTx, viewModel.NodeCount);

            return Ok(mapper.Map<SendTransactionRequestViewModel>(sendTransactionResponse));               
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

            networkServices = xrouterService.xrGetNetworkServices();
            
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
