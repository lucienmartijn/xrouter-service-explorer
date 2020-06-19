using AutoMapper;
using BlocknetLib.Responses;
using BlocknetLib.Responses.SharedComponents;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using XRouter.Api.Controllers.ViewModels;
using XRouter.Api.Controllers.ViewModels.BitcoinBased;
using static BlocknetLib.Responses.BlockResponse;
using static BlocknetLib.Responses.BlockResponse.AuxilliaryPow;

namespace XRouter.Api.Mapper
{
    public class XRouterMappingProfile : Profile
    {
        public XRouterMappingProfile()
        {
            CreateMap<AuxilliaryPow, AuxilliaryPowViewModel>();
            CreateMap<Transaction, TransactionViewModel>();
            CreateMap<ScriptSig, ScriptSigViewModel>();
            CreateMap<ScriptPubKey, ScriptPubKeyViewModel>();
            CreateMap<Vin, VinViewModel>();
            CreateMap<Vout, VoutViewModel>();
            CreateMap<BlockResponse, BlockViewModel>();

            CreateMap<GetRawTransactionResponse, GetRawTransactionResponseViewModel>();
            CreateMap<RawTransactionResponse, RawTransactionResponseViewModel>();
            CreateMap<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.GetBlockResponse, BlockResponseViewModel>();
            CreateMap<GetBlocksResponse, BlocksResponseViewModel>();
            CreateMap<BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased.GetTransactionResponse, TransactionResponseViewModel>();
            CreateMap<GetTransactionsResponse, TransactionsResponseViewModel>();
            CreateMap<SendTransactionResponse, SendTransactionResponseViewModel>();
            CreateMap<GetBlockCountResponse, BlockCountResponseViewModel>()
                .ForSourceMember(bc => bc.Code, opt => opt.DoNotValidate())
                .ForSourceMember(bc => bc.Error, opt => opt.DoNotValidate())
                .ForSourceMember(bc => bc.Id, opt => opt.DoNotValidate());
            CreateMap<GetBlockHashResponse, BlockHashResponseViewModel>()
                .ForSourceMember(bc => bc.Code, opt => opt.DoNotValidate())
                .ForSourceMember(bc => bc.Error, opt => opt.DoNotValidate())
                .ForSourceMember(bc => bc.Id, opt => opt.DoNotValidate());

            CreateMap<NetworkServicesResponse, NetworkServicesResponseViewModel>();
            CreateMap<GetNetworkServicesResponse, NetworkServicesResponseViewModel>();
            CreateMap<GetNetworkServicesResponse, GetNetworkServicesResponseViewModel>();
        }
    }
}
