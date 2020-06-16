using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CloudChainsSPVLib.CoinConfig;
using CloudChainsSPVLib.Services;
using CloudChainsSPVLib.Services.Coins.Alqocoin;
using CloudChainsSPVLib.Services.Coins.Base;
using CloudChainsSPVLib.Services.Coins.BitBay;
using CloudChainsSPVLib.Services.Coins.Bitcoin;
using CloudChainsSPVLib.Services.Coins.Blocknet;
using CloudChainsSPVLib.Services.Coins.Dash;
using CloudChainsSPVLib.Services.Coins.Digibyte;
using CloudChainsSPVLib.Services.Coins.Dogecoin;
using CloudChainsSPVLib.Services.Coins.Litecoin;
using CloudChainsSPVLib.Services.Coins.Pivx;
using CloudChainsSPVLib.Services.Coins.Polis;
using CloudChainsSPVLib.Services.Coins.Ravencoin;
using CloudChainsSPVLib.Services.Coins.Syscoin;
using CloudChainsSPVLib.Services.Coins.Tezos;
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

            services.AddTransient<IAlqocoinService>(service =>
                new AlqocoinService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.Alqocoin.DaemonUrl,
                    rpcSettings.Alqocoin.RpcUserName,
                    rpcSettings.Alqocoin.RpcPassword,
                    rpcSettings.Alqocoin.WalletPassword,
                    rpcSettings.Alqocoin.RpcRequestTimeoutInSeconds
                    )
            );

            services.AddTransient<IBitBayService>(service =>
                new BitBayService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.BitBay.DaemonUrl,
                    rpcSettings.BitBay.RpcUserName,
                    rpcSettings.BitBay.RpcPassword,
                    rpcSettings.BitBay.WalletPassword,
                    rpcSettings.BitBay.RpcRequestTimeoutInSeconds
                    )
            );

            services.AddTransient<IDashService>(service =>
                new DashService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.Dash.DaemonUrl,
                    rpcSettings.Dash.RpcUserName,
                    rpcSettings.Dash.RpcPassword,
                    rpcSettings.Dash.WalletPassword,
                    rpcSettings.Dash.RpcRequestTimeoutInSeconds
                    )
            );

            services.AddTransient<IDigibyteService>(service =>
                new DigibyteService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.Digibyte.DaemonUrl,
                    rpcSettings.Digibyte.RpcUserName,
                    rpcSettings.Digibyte.RpcPassword,
                    rpcSettings.Digibyte.WalletPassword,
                    rpcSettings.Digibyte.RpcRequestTimeoutInSeconds
                    )
            );

            services.AddTransient<IDogecoinService>(service =>
                new DogecoinService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.Dogecoin.DaemonUrl,
                    rpcSettings.Dogecoin.RpcUserName,
                    rpcSettings.Dogecoin.RpcPassword,
                    rpcSettings.Dogecoin.WalletPassword,
                    rpcSettings.Dogecoin.RpcRequestTimeoutInSeconds
                    )
            );

            services.AddTransient<IPivxService>(service =>
                new PivxService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.Pivx.DaemonUrl,
                    rpcSettings.Pivx.RpcUserName,
                    rpcSettings.Pivx.RpcPassword,
                    rpcSettings.Pivx.WalletPassword,
                    rpcSettings.Pivx.RpcRequestTimeoutInSeconds
                    )
            );

            services.AddTransient<IPolisService>(service =>
                new PolisService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.Polis.DaemonUrl,
                    rpcSettings.Polis.RpcUserName,
                    rpcSettings.Polis.RpcPassword,
                    rpcSettings.Polis.WalletPassword,
                    rpcSettings.Polis.RpcRequestTimeoutInSeconds
                    )
            );

            services.AddTransient<IRavencoinService>(service =>
                new RavencoinService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.Ravencoin.DaemonUrl,
                    rpcSettings.Ravencoin.RpcUserName,
                    rpcSettings.Ravencoin.RpcPassword,
                    rpcSettings.Ravencoin.WalletPassword,
                    rpcSettings.Ravencoin.RpcRequestTimeoutInSeconds
                    )
            );

            services.AddTransient<ISyscoinService>(service =>
                new SyscoinService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.Syscoin.DaemonUrl,
                    rpcSettings.Syscoin.RpcUserName,
                    rpcSettings.Syscoin.RpcPassword,
                    rpcSettings.Syscoin.WalletPassword,
                    rpcSettings.Syscoin.RpcRequestTimeoutInSeconds
                    )
            );

            services.AddTransient<ITezosService>(service =>
                new TezosService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.Tezos.DaemonUrl,
                    rpcSettings.Tezos.RpcUserName,
                    rpcSettings.Tezos.RpcPassword,
                    rpcSettings.Tezos.WalletPassword,
                    rpcSettings.Tezos.RpcRequestTimeoutInSeconds
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
