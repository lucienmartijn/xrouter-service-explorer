using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Authentication.Api.Validators;
using Database.Core.Models;
using Database.Persistence;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.OAuth;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Authentication.Api
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

            services.AddDbContext<ApplicationDbContext>(options => options.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
                //sqliteOptions => sqliteOptions.MigrationsAssembly("Database")));
            //services.AddIdentity<ApplicationUser, IdentityRole>(options => {
            //    options.User.AllowedUserNameCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+#";
            //})
            //.AddEntityFrameworkStores<ApplicationDbContext>()
            //.AddDefaultTokenProviders()
            ////.AddUserManager<CustomUserManager<ApplicationUser>>()
            //;

            services.AddTransient<ICustomUserValidator<ApplicationUser>, CustomUserValidator<ApplicationUser>>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
