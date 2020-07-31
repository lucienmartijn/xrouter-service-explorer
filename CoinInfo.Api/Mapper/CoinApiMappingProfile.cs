using AutoMapper;
using CoinInfo.Api.Core.Models;

namespace CoinInfo.Api.Mapper
{
    public class CoinApiMappingProfile : Profile
    {
        public CoinApiMappingProfile()
        {
            CreateMap<CoinAPI.REST.V1.Rate, ExchangeRate>()
                .ForMember(
                     dest => dest.Rate,
                     opt => opt.MapFrom(src => src.rate)
                 )
                .ForMember(
                     dest => dest.Quote,
                     opt => opt.MapFrom(src => src.asset_id_quote)
                 );
            CreateMap<CoinAPI.REST.V1.ExchangeCurrentrate, CoinExchangeRate>()
                 .ForMember(
                     dest => dest.Coin,
                     opt => opt.MapFrom(src => src.asset_id_base)
                 );
        }
    }
}
