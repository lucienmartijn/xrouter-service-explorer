using AutoMapper;
using BlocknetLib.Responses;
using BlocknetLib.Responses.Monero;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.Monero;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using XRouter.Api.Controllers.ViewModels;
using XRouter.Api.Controllers.ViewModels.Monero;

namespace XRouter.Api.Mapper
{
    public class XRouterMoneroMappingProfile : Profile
    {
        public XRouterMoneroMappingProfile()
        {
            CreateMap<BlockHeader, BlockHeaderViewModel>();
            CreateMap<Transaction, TransactionViewModel>();

            CreateMap<TransactionResponse, TransactionResponseViewModel>();
            CreateMap<BlocknetLib.Responses.Monero.BlockResponse, BlockResponseViewModel>();
            CreateMap<GetBlockCountResponse, GetBlockCountResponseViewModel>()
                .ForSourceMember(bc => bc.Code, opt => opt.DoNotValidate())
                .ForSourceMember(bc => bc.Error, opt => opt.DoNotValidate())
                .ForSourceMember(bc => bc.Id, opt => opt.DoNotValidate());
            CreateMap<GetBlockHashResponse, GetBlockHashResponseViewModel>()
                .ForSourceMember(bc => bc.Code, opt => opt.DoNotValidate())
                .ForSourceMember(bc => bc.Error, opt => opt.DoNotValidate())
                .ForSourceMember(bc => bc.Id, opt => opt.DoNotValidate());

            CreateMap<BlocknetLib.Services.Coins.Blocknet.Xrouter.Monero.GetBlockResponse, GetBlockResponseViewModel>();
            CreateMap<GetBlocksResponse, GetBlocksResponseViewModel>();
            CreateMap<BlocknetLib.Services.Coins.Blocknet.Xrouter.Monero.GetTransactionResponse, GetTransactionResponseViewModel>();
            CreateMap<GetTransactionsResponse, GetTransactionsResponseViewModel>();
            CreateMap<SendTransactionResponse, SendTransactionResponseViewModel>();
            CreateMap<GetDecodeRawTransactionResponse, GetDecodeRawTransactionResponseViewModel>();            
        }
    }
}
