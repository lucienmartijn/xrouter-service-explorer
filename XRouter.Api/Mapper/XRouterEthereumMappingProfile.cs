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
            CreateMap<BlocknetLib.Responses.Ethereum.BlockHashResponse, BlockHashResponseViewModel>();
            CreateMap<BlocknetLib.Responses.Ethereum.BlockResponse, BlockResponseViewModel>();
            CreateMap<BlocknetLib.Responses.Ethereum.TransactionResponse, TransactionResponseViewModel>();
            CreateMap<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetBlockResponse, GetBlockResponseViewModel>();
            CreateMap<GetBlocksResponse, GetBlocksResponseViewModel>();
            CreateMap<BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum.GetTransactionResponse, GetTransactionResponseViewModel>();
            CreateMap<GetTransactionsResponse, GetTransactionsResponseViewModel>();
            CreateMap<SendTransactionResponse, SendTransactionResponseViewModel>();
            CreateMap<GetBlockCountResponse, GetBlockCountResponseViewModel>()
                .ForSourceMember(bc => bc.Code, opt => opt.DoNotValidate())
                .ForSourceMember(bc => bc.Error, opt => opt.DoNotValidate())
                .ForSourceMember(bc => bc.Id, opt => opt.DoNotValidate());
            CreateMap<GetBlockHashResponse, GetBlockHashResponseViewModel>();
            
        }
    }
}
