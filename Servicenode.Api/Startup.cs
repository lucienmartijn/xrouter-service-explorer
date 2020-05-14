using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlocknetLib.CoinConfig;
using BlocknetLib.Services;
using BlocknetLib.Services.Coins.Base;
using BlocknetLib.Services.Coins.Blocknet;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Servicenode.Api
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
            services.AddTransient<IServicenodeService>(service =>
                new ServicenodeService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.Blocknet.DaemonUrl,
                    rpcSettings.Blocknet.RpcUserName,
                    rpcSettings.Blocknet.RpcPassword,
                    rpcSettings.Blocknet.WalletPassword,
                    rpcSettings.Blocknet.RpcRequestTimeoutInSeconds
                    )
            );

            services.AddTransient<IXRouterService>(service =>
                new XRouterService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.Blocknet.DaemonUrl,
                    rpcSettings.Blocknet.RpcUserName,
                    rpcSettings.Blocknet.RpcPassword,
                    rpcSettings.Blocknet.WalletPassword,
                    rpcSettings.Blocknet.RpcRequestTimeoutInSeconds
                    )
            );

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
