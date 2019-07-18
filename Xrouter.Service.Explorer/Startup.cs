using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BitcoinLib.CoinConfig;
using BitcoinLib.Services;
using BitcoinLib.Services.Coins.Base;
using BitcoinLib.Services.Coins.Bitcoin;
using BitcoinLib.Services.Coins.Blocknet;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CodeProject.AngularCore.Portal
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
            var rpcSettings = Configuration.GetSection("CoinConfig").Get<CoinRpcConfig>();
            
            services.AddCors();

            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            
            services.AddTransient<ICoinService, CoinService>();
            services.AddTransient<IBitcoinService, BitcoinService>();
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


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();

            app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.Use(async (context, next) => {
                var request = context.Request;
                if (request.Path != "/")
                {
                    context.Response.Redirect("/" + request.Path);
                }
                else
                {
                    await next.Invoke();
                }
            });

            /*app.UseSpa(spa =>
            {
                spa.Options.DefaultPage = "/wwwroot/index.html";
                spa.Options.SourcePath = "src";

                /*
                // If you want to enable server-side rendering (SSR),
                // [1] In AngularSpa.csproj, change the <BuildServerSideRenderer> property
                //     value to 'true', so that the SSR bundle is built during publish
                // [2] Uncomment this code block
                spa.UseSpaPrerendering(options =>
                {
                    options.BootModulePath = $"{spa.Options.SourcePath}/dist-server/main.bundle.js";
                    options.BootModuleBuilder = env.IsDevelopment() ? new AngularCliBuilder(npmScript: "build:ssr") : null;
                    options.ExcludeUrls = new[] { "/sockjs-node" };
                });
                

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "ng serve");
                }

            });*/

        }
    }
}
