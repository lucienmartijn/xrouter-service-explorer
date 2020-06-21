using AutoMapper;
using BlocknetLib.Responses;
using BlocknetLib.Responses.Neo;
using BlocknetLib.Responses.Neo.SharedComponents;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.Neo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using XRouter.Api.Controllers.ViewModels;
using XRouter.Api.Controllers.ViewModels.Neo;

namespace XRouter.Api.Mapper
{
    public class XRouterNeoMappingProfile : Profile
    {
        public XRouterNeoMappingProfile()
        {
            CreateMap<Vin, VinViewModel>();
            CreateMap<Vout, VoutViewModel>();
            CreateMap<Script, ScriptViewModel>();

            CreateMap<TransactionResponse, TransactionResponseViewModel>();
            CreateMap<BlocknetLib.Responses.Neo.BlockResponse, BlockResponseViewModel>();
            CreateMap<GetBlockCountResponse, GetBlockCountResponseViewModel>()
                .ForSourceMember(bc => bc.Code, opt => opt.DoNotValidate())
                .ForSourceMember(bc => bc.Error, opt => opt.DoNotValidate())
                .ForSourceMember(bc => bc.Id, opt => opt.DoNotValidate());
            CreateMap<GetBlockHashResponse, GetBlockHashResponseViewModel>()
                .ForSourceMember(bc => bc.Code, opt => opt.DoNotValidate())
                .ForSourceMember(bc => bc.Error, opt => opt.DoNotValidate())
                .ForSourceMember(bc => bc.Id, opt => opt.DoNotValidate());

            CreateMap<BlocknetLib.Services.Coins.Blocknet.Xrouter.Neo.GetBlockResponse, GetBlockResponseViewModel>();
            CreateMap<GetBlocksResponse, GetBlocksResponseViewModel>();
            CreateMap<BlocknetLib.Services.Coins.Blocknet.Xrouter.Neo.GetTransactionResponse, GetTransactionResponseViewModel>();
            CreateMap<GetTransactionsResponse, GetTransactionsResponseViewModel>();
            CreateMap<SendTransactionResponse, SendTransactionResponseViewModel>();
            CreateMap<GetDecodeRawTransactionResponse, GetDecodeRawTransactionResponseViewModel>();            
        }
    }
}
