using AutoMapper;
using BlocknetLib.Responses;
using BlocknetLib.Responses.SharedComponents;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.EthereumClassic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using XRouter.Api.Controllers.ViewModels;
using XRouter.Api.Controllers.ViewModels.EthereumClassic;

namespace XRouter.Api.Mapper
{
    public class XRouterEthereumClassicMappingProfile : Profile
    {
        public XRouterEthereumClassicMappingProfile()
        {
            CreateMap<BlocknetLib.Responses.EthereumClassic.BlockHashResponse, BlockHashResponseViewModel>();
            CreateMap<BlocknetLib.Responses.EthereumClassic.BlockResponse, BlockResponseViewModel>();
            CreateMap<BlocknetLib.Responses.EthereumClassic.TransactionResponse, TransactionResponseViewModel>();
            CreateMap<BlocknetLib.Services.Coins.Blocknet.Xrouter.EthereumClassic.GetBlockResponse, GetBlockResponseViewModel>();
            CreateMap<GetBlocksResponse, GetBlocksResponseViewModel>();
            CreateMap<BlocknetLib.Services.Coins.Blocknet.Xrouter.EthereumClassic.GetTransactionResponse, GetTransactionResponseViewModel>();
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
