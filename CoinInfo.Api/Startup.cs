using AutoMapper;
using CoinInfo.Api.Core.Adapters;
using CoinInfo.Api.Core.Interfaces;
using CoinInfo.Api.Core.Models;
using CoinInfo.Api.Mapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;

namespace CoinInfo.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(corsOptions =>
            {
                corsOptions.AddPolicy("fully permissive", configurePolicy => configurePolicy
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                );
                //.WithOrigins("http://localhost:44305")
                // .AllowCredentials()); //localhost:4200 is the default port an angular runs in dev mode with ng serve

            });

            var coinApiSettings = Configuration.GetSection("CoinApiConfiguration").GetSection("CoinApi").Get<CoinApiSettings>();
            var coinMarketCapSettings = Configuration.GetSection("CoinApiConfiguration").GetSection("CoinMarketCap").Get<CoinApiSettings>();
            var cryptoCompareSettings = Configuration.GetSection("CoinApiConfiguration").GetSection("CryptoCompare").Get<CoinApiSettings>();

            services.Configure<CoinApiConfiguration>(Configuration.GetSection("CoinApiConfiguration"));

            services.AddHttpClient("CoinApi", c =>
            {
                c.BaseAddress = new Uri(coinApiSettings.BaseEndpoint);
            });

            services.AddHttpClient("CoinMarketCap", c =>
            {
                c.BaseAddress = new Uri(coinMarketCapSettings.BaseEndpoint);
            });

            services.AddHttpClient("CryptoCompare", c =>
            {
                c.BaseAddress = new Uri(cryptoCompareSettings.BaseEndpoint);
            });

            services.AddControllers();

            services.AddTransient<ICryptoCurrencyApiAdapter, CoinApiAdapter>();
            services.AddTransient<ICryptoCurrencyApiAdapter, CryptoCompareAdapter>();

            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new CoinApiMappingProfile());
                mc.AddProfile(new CryptoCompareMappingProfile());
            });

            IMapper mapper = mappingConfig.CreateMapper();
            services.AddSingleton(mapper);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }


            //app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("fully permissive");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
