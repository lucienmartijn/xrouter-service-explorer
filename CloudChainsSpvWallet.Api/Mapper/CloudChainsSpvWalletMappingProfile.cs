using AutoMapper;
using CloudChainsSPVLib.Requests.CreateRawTransaction;
using CloudChainsSpvWallet.Api.Controllers.ViewModels;

namespace XRouter.Api.Mapper
{
    public class CloudChainsSpvWalletMappingProfile : Profile
    {
        public CloudChainsSpvWalletMappingProfile()
        {
            CreateMap<CreateRawTransactionInputViewModel, CreateRawTransactionInput>();
            CreateMap<CreateRawTransactionRequestViewModel, CreateRawTransactionRequest>();

        }
    }
}
