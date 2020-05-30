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

            if (objectType == typeof(ServiceResponse))
            {
                var instance = new ServiceResponse();
                var error = token.SelectToken("error");

                if (error != null)
                {

                    var errorMessage = error.SelectToken("message");
                    if (errorMessage != null)
                    {
                        serializer.Populate(token.CreateReader(), instance);
                        return instance;
                    }

                    instance.Error = new JsonRpcError { Message = error.ToObject<string>(), Code = (RpcErrorCode)token.SelectToken("code").ToObject<int>() };
                    return instance;
                }

                serializer.Populate(token.CreateReader(), instance);
                return instance;

            }
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

                if (error != null)
                {

                    var errorMessage = error.SelectToken("message");
                    if (errorMessage != null)
                    {
                        serializer.Populate(token.CreateReader(), instance);
                        return instance;
                    }

                    instance.Error = new JsonRpcError { Message = error.ToObject<string>(), Code = (RpcErrorCode)token.SelectToken("code").ToObject<int>() };
                    return instance;
                }

                serializer.Populate(token.CreateReader(), instance);
                return instance;
                
            }

            if (objectType == typeof(Services.Coins.Blocknet.Xrouter.BitcoinBased.GetBlockResponse))
            {
                var instance = new Services.Coins.Blocknet.Xrouter.BitcoinBased.GetBlockResponse();
                var error = token.SelectToken("error");

                if(error != null)
                {

                    var errorMessage = error.SelectToken("message");
                    if(errorMessage != null)
                    {
                        serializer.Populate(token.CreateReader(), instance);
                        return instance;
                    }
                    
                    instance.Error = new JsonRpcError { Message = error.ToObject<string>(), Code = (RpcErrorCode) token.SelectToken("code").ToObject<int>() };
                    return instance;
                }

                
                serializer.Populate(token.CreateReader(), instance);
                return instance;
            }

            if (objectType == typeof(Services.Coins.Blocknet.Xrouter.BitcoinBased.GetTransactionResponse))
            {
                var instance = new Services.Coins.Blocknet.Xrouter.BitcoinBased.GetTransactionResponse();

                var error = token.SelectToken("error");
                if (error != null)
                {

                    var errorMessage = error.SelectToken("message");
                    if (errorMessage != null)
                    {
                        serializer.Populate(token.CreateReader(), instance);
                        return instance;
                    }

                    instance.Error = new JsonRpcError { Message = error.ToObject<string>(), Code = (RpcErrorCode)token.SelectToken("code").ToObject<int>() };
                    return instance;
                }

                serializer.Populate(token.CreateReader(), instance);
                return instance;
            }

            if (objectType == typeof(GetBlocksResponse))
            {
                var instance = new GetBlocksResponse();

                var error = token.SelectToken("$.error");

                if (error != null)
                {

                    var errorMessage = error.SelectToken("message");
                    if (errorMessage != null)
                    {
                        serializer.Populate(token.CreateReader(), instance);
                        return instance;
                    }

                    instance.Error = new JsonRpcError { Message = error.ToObject<string>(), Code = (RpcErrorCode)token.SelectToken("code").ToObject<int>() };
                    return instance;
                }

                serializer.Populate(token.CreateReader(), instance);
                return instance;
            }

            if (objectType == typeof(GetTransactionsResponse))
            {                
                var instance = new GetTransactionsResponse();

                var error = token.SelectToken("$.error");

                if (error != null)
                {

                    var errorMessage = error.SelectToken("message");
                    if (errorMessage != null)
                    {
                        serializer.Populate(token.CreateReader(), instance);
                        return instance;
                    }

                    instance.Error = new JsonRpcError { Message = error.ToObject<string>(), Code = (RpcErrorCode)token.SelectToken("code").ToObject<int>() };
                    return instance;
                }

                serializer.Populate(token.CreateReader(), instance);
                return instance;
                
            }

            if (objectType == typeof(GetDecodeRawTransactionResponse))
            {
                var instance = new GetDecodeRawTransactionResponse();

                var error = token.SelectToken("error");
                if (error != null)
                {

                    var errorMessage = error.SelectToken("message");
                    if (errorMessage != null)
                    {
                        serializer.Populate(token.CreateReader(), instance);
                        return instance;
                    }

                    instance.Error = new JsonRpcError { Message = error.ToObject<string>(), Code = (RpcErrorCode)token.SelectToken("code").ToObject<int>() };
                    return instance;
                }

                serializer.Populate(token.CreateReader(), instance);
                return instance;
            }

            if (objectType == typeof(SendTransactionResponse))
            {
                var instance = new SendTransactionResponse();

                var error = token.SelectToken("error");
                if (error != null)
                {

                    var errorMessage = error.SelectToken("message");
                    if (errorMessage != null)
                    {
                        serializer.Populate(token.CreateReader(), instance);
                        return instance;
                    }

                    instance.Error = new JsonRpcError { Message = error.ToObject<string>(), Code = (RpcErrorCode)token.SelectToken("code").ToObject<int>() };
                    return instance;
                }

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