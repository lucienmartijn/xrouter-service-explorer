using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Diagnostics;
using BlocknetLib.Auxiliary;
using BlocknetLib.ExceptionHandling.Rpc;
using BlocknetLib.ExtensionMethods;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.RPC.Specifications;
using BlocknetLib.Services.Coins.Base;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using BlocknetLib.Responses;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased;
using System.Reflection;

namespace BlocknetLib.RPC.Deserializer
{
    public class ValidOrErrorConverter : JsonConverter
    {
        public override bool CanConvert(Type objectType)
        {
            return true;
        }

        public override bool CanWrite
        {
            get { return false; }
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            var token = JToken.Load(reader);

            if (objectType == typeof(GetBlockCountResponse))
            {
                var instance = new GetBlockCountResponse();
                var error = token.SelectToken("error");

                serializer.Populate(token.CreateReader(), instance);
                return instance;
                
            }

            if(objectType == typeof(GetBlockHashResponse))
            {
                var instance = new GetBlockHashResponse();
                var error = token.SelectToken("error");
                var errors = token.SelectTokens("$.reply.error").ToList();

                serializer.Populate(token.CreateReader(), instance);
                return instance;
                
            }

            if (objectType == typeof(Services.Coins.Blocknet.Xrouter.BitcoinBased.GetBlockResponse))
            {
                var instance = new Services.Coins.Blocknet.Xrouter.BitcoinBased.GetBlockResponse();

                serializer.Populate(token.CreateReader(), instance);
                return instance;
            }

            if (objectType == typeof(Services.Coins.Blocknet.Xrouter.BitcoinBased.GetTransactionResponse))
            {
                var instance = new Services.Coins.Blocknet.Xrouter.BitcoinBased.GetTransactionResponse();

                serializer.Populate(token.CreateReader(), instance);
                return instance;
            }

            if (objectType == typeof(GetBlocksResponse))
            {
                var error = token.SelectToken("$.error");
                //var errors = token.SelectTokens("$.[*].error").ToList();
                var instance = new GetBlocksResponse();

                serializer.Populate(token.CreateReader(), instance);
                return instance;
            }
            if (objectType == typeof(GetTransactionsResponse))
            {
                var error = token.SelectToken("$.error");
                //var errors = token.SelectTokens("$.allreplies[*].reply.error").ToList();
                var instance = new GetTransactionsResponse();

                serializer.Populate(token.CreateReader(), instance);
                return instance;
                
            }

            throw new NotImplementedException();
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            throw new NotImplementedException();
        }
    }
}