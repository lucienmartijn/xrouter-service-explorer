using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using BlocknetLib.CoinConfig;
using BlocknetLib.Services;
using BlocknetLib.Services.Coins.Base;
using BlocknetLib.Services.Coins.Blocknet;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OAuth;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using Xrouter.Service.Explorer.Authorization;
using Xrouter.Service.Explorer.Core;
using Xrouter.Service.Explorer.Core.Models;
using Xrouter.Service.Explorer.Persistence;
using Xrouter.Service.Explorer.Validators;

namespace Xrouter.Service.Explorer
{
    public class Startup
    {
        private IWebHostEnvironment _appEnv;
        public Startup(IConfiguration configuration, IWebHostEnvironment appEnv)
        {
            Configuration = configuration;
            _appEnv = appEnv;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                // This lambda determines whether user consent for non-essential cookies is needed for a given request.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });
            services.AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_3_0)
                .AddNewtonsoftJson(opt => opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);
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

            services.AddControllersWithViews();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            services.AddAuthorization(options =>
            {
                options.AddPolicy("CanCrudOwnServicenode", policy =>
                    policy.Requirements.Add(new SameUserServiceNodeRequirement()));
                options.AddPolicy("CanCrudOwnComment", policy => 
                    policy.Requirements.Add(new SameUserCommentRequirement()));
            });

            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlite($"Data Source={_appEnv.ContentRootPath}/serviceexplorer.sqlite",
                            sqliteOptions => sqliteOptions.MigrationsAssembly("Xrouter.Service.Explorer")));
            services.AddIdentity<ApplicationUser, IdentityRole>(options =>{
                options.User.AllowedUserNameCharacters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+#";
            })
            .AddEntityFrameworkStores<ApplicationDbContext>()
            .AddDefaultTokenProviders()
            //.AddUserManager<CustomUserManager<ApplicationUser>>()
            ;

            services.AddAuthentication(options =>
            {
                options.DefaultSignOutScheme = IdentityConstants.ApplicationScheme;
            })
            .AddDiscord(options =>
            {
                options.ClientId = "663786064569303047";
                options.ClientSecret = "awXcE0AsfxUWYySUi9VlzvUsq4st-0q2";
                //options.SaveTokens = true;
                options.Events = new OAuthEvents
                {
                    OnRemoteFailure = (RemoteFailureContext context) =>
                    {
                        context.Response.Redirect("/");
                        context.HandleResponse();
                        return Task.CompletedTask;
                    }
                };
            });

            var rpcSettings = Configuration.GetSection("CoinConfig").Get<CoinRpcConfig>();

            services.AddTransient<ICustomUserValidator<ApplicationUser>, CustomUserValidator<ApplicationUser>>();
            services.AddTransient<ICoinService, CoinService>();
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

            services.AddTransient<IXRouterEthereumService>(service => 
                new XRouterEthereumService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.Blocknet.DaemonUrl,
                    rpcSettings.Blocknet.RpcUserName, 
                    rpcSettings.Blocknet.RpcPassword, 
                    rpcSettings.Blocknet.WalletPassword,
                    rpcSettings.Blocknet.RpcRequestTimeoutInSeconds
                    )
            );

            services.AddTransient<IXCloudService>(service => 
                new XCloudService(
                    //rpcSettings.Blocknet.DaemonUrl_testnet, 
                    rpcSettings.Blocknet.DaemonUrl,
                    rpcSettings.Blocknet.RpcUserName, 
                    rpcSettings.Blocknet.RpcPassword, 
                    rpcSettings.Blocknet.WalletPassword,
                    rpcSettings.Blocknet.RpcRequestTimeoutInSeconds
                    )
            );

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

            services.AddScoped<IServicenodeRepository, ServicenodeRepository>();
            services.AddScoped<ICommentRepository, CommentRepository>();
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            services.AddScoped<IAuthorizationHandler, ServicenodeAuthorizationHandler>();
            services.AddScoped<IAuthorizationHandler, CommentAuthorizationHandler>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ApplicationDbContext context)
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

            app.UseCors("fully permissive");
                
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = Path.Join(env.ContentRootPath, env.ApplicationName,"ClientApp");

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            }); 

            // if (context.Database.GetPendingMigrations().Any()) {
            //     context.Database.Migrate();
            // }

        }
    }
}
