using AutoMapper;
using CoinInfo.Api.Core.Models;
using System.Collections.Generic;

namespace CoinInfo.Api.Mapper
{
    public class CryptoCompareMappingProfile : Profile
    {
        public CryptoCompareMappingProfile()
        {
            CreateMap<KeyValuePair<string, decimal>, ExchangeRate>()
                .ConstructUsing(x => new ExchangeRate
                {
                    Quote = x.Key,
                    Rate = x.Value,
                });

            //CreateMap<KeyValuePair<string, KeyValuePair<string, decimal>>, CoinExchangeRate>()
            //    .ForMember(dest => dest.CoinName, opt => opt.MapFrom(src => src.Key))
            //    .ConstructUsing(src => _mapper.Map)

        }
    }
}
