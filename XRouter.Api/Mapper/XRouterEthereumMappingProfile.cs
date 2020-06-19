using AutoMapper;
using BlocknetLib.Responses;
using BlocknetLib.Responses.SharedComponents;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using XRouter.Api.Controllers.ViewModels;
using XRouter.Api.Controllers.ViewModels.Ethereum;

namespace XRouter.Api.Mapper
{
    public class XRouterEthereumMappingProfile : Profile
    {
        public XRouterEthereumMappingProfile()
        {
            CreateMap<BlocknetLib.Responses.Ethereum.BlockHashResponse, GetBlockHashResponseViewModel>();
            CreateMap<BlocknetLib.Responses.Ethereum.BlockResponse, GetBlockResponseViewModel>();
            CreateMap<BlocknetLib.Responses.Ethereum.TransactionResponse, GetTransactionResponseViewModel>();
            CreateMap<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetBlockResponse, BlockResponseViewModel>();
            CreateMap<GetBlocksResponse, BlocksResponseViewModel>();
            CreateMap<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetTransactionResponse, TransactionResponseViewModel>();
            CreateMap<GetTransactionsResponse, TransactionsResponseViewModel>();
            CreateMap<SendTransactionResponse, SendTransactionResponseViewModel>();
            CreateMap<GetBlockCountResponse, BlockCountResponseViewModel>()
                .ForSourceMember(bc => bc.Code, opt => opt.DoNotValidate())
                .ForSourceMember(bc => bc.Error, opt => opt.DoNotValidate())
                .ForSourceMember(bc => bc.Id, opt => opt.DoNotValidate());
            CreateMap<GetBlockHashResponse, BlockHashResponseViewModel>();
            
        }
    }
}
