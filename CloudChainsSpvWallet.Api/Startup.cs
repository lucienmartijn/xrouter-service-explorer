using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CloudChainsSPVLib.CoinConfig;
using CloudChainsSPVLib.Services;
using CloudChainsSPVLib.Services.Coins.Base;
using CloudChainsSPVLib.Services.Coins.Bitcoin;
using CloudChainsSPVLib.Services.Coins.Blocknet;
using CloudChainsSPVLib.Services.Coins.Litecoin;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using XRouter.Api.Mapper;

namespace CloudChainsSpvWallet.Api
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
            services.AddControllers();

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

            var rpcSettings = Configuration.GetSection("CoinConfig").Get<CoinRpcConfig>();
            services.AddTransient<ICoinService, CoinService>();
            services.AddTransient<IBlocknetService>(service =>
                new BlocknetService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.Blocknet.DaemonUrl,
                    rpcSettings.Blocknet.RpcUserName,
                    rpcSettings.Blocknet.RpcPassword,
                    rpcSettings.Blocknet.WalletPassword,
                    rpcSettings.Blocknet.RpcRequestTimeoutInSeconds
                    )
            );
            services.AddTransient<IBitcoinService>(service =>
                new BitcoinService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.Bitcoin.DaemonUrl,
                    rpcSettings.Bitcoin.RpcUserName,
                    rpcSettings.Bitcoin.RpcPassword,
                    rpcSettings.Bitcoin.WalletPassword,
                    rpcSettings.Bitcoin.RpcRequestTimeoutInSeconds
                    )
            );
            services.AddTransient<ILitecoinService>(service =>
                new LitecoinService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.Litecoin.DaemonUrl,
                    rpcSettings.Litecoin.RpcUserName,
                    rpcSettings.Litecoin.RpcPassword,
                    rpcSettings.Litecoin.WalletPassword,
                    rpcSettings.Litecoin.RpcRequestTimeoutInSeconds
                    )
            );

            var mappingConfig = new MapperConfiguration(mc =>
            {
                mc.AddProfile(new CloudChainsSpvWalletMappingProfile());
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

            app.UseCors("fully permissive");

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
