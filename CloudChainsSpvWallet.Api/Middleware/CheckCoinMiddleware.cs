using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CloudChainsSPVLib.CoinConfig;
using System.Net.Http;
using Newtonsoft.Json;
using CloudChainsSpvWallet.Api.Controllers.ViewModels;

namespace CloudChainsSpvWallet.Api.Middleware
{
    public class CheckCoinMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IHttpClientFactory _httpClientFactory;

        public CheckCoinMiddleware(RequestDelegate next, IHttpClientFactory httpClientFactory)
        {
            _next = next;
            _httpClientFactory = httpClientFactory;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            var path = context.Request.Path;

            if(path.Value.Contains("lw"))
            {
                var pathComponents = path.Value.Split('/');

                if (pathComponents != null && pathComponents.Length > 2)
                {
                    var coin = pathComponents[3];
                    var client = _httpClientFactory.CreateClient();

                    string baseUrl = "https://plugin-api.core.cloudchainsinc.com/height";

                    var getCoinsTask = client.GetStringAsync(baseUrl);

                    var coins = JsonConvert.DeserializeObject<CloudChainCoinViewModel>(await getCoinsTask);

                    if (!coins.Result.Keys.Any(c => c.Equals(coin.ToUpper())))
                    {
                        context.Response.StatusCode = 500;
                        await context.Response.WriteAsync("Coin not available");
                        return;
                    }
                    else
                    {
                        await _next(context);
                        return;
                    }
                }
                else
                {
                    context.Response.StatusCode = 404;
                    await context.Response.WriteAsync("Endpoint not found");
                    return;
                }
            }
            await _next(context);

        }
    }
}
