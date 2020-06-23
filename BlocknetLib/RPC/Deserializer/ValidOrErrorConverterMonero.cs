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
using BlocknetLib.Services.Coins.Blocknet.Xrouter.Monero;
using System.Reflection;

namespace BlocknetLib.RPC.Deserializer
{
    public class ValidOrErrorConverterMonero : JsonConverter
    {
        public override bool CanConvert(Type objectType)
        {
            return true;
        }

        public override bool CanWrite
        {
            get { return false; }
        }

        private T Populate<T>(JToken token, Type objectType, JsonSerializer serializer) where T : ErrorResponse, new()
        {

            var instance = new T();
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

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            var token = JToken.Load(reader);

            if (objectType == typeof(GetBlockCountResponse))
            {
                return Populate<GetBlockCountResponse>(token, objectType, serializer);
            }

            if(objectType == typeof(GetBlockHashResponse))
            {
                return Populate<GetBlockHashResponse>(token, objectType, serializer);
            }

            if (objectType == typeof(Services.Coins.Blocknet.Xrouter.Monero.GetBlockResponse))
            {
                return Populate<Services.Coins.Blocknet.Xrouter.Monero.GetBlockResponse>(token, objectType, serializer);
            }

            if (objectType == typeof(Services.Coins.Blocknet.Xrouter.Monero.GetTransactionResponse))
            {
                return Populate<Services.Coins.Blocknet.Xrouter.Monero.GetTransactionResponse>(token, objectType, serializer);
            }

            if (objectType == typeof(GetBlocksResponse))
            {
                return Populate<GetBlocksResponse>(token, objectType, serializer);
            }

            if (objectType == typeof(GetTransactionsResponse))
            {
                return Populate<GetTransactionsResponse>(token, objectType, serializer);                
            }

            if (objectType == typeof(GetDecodeRawTransactionResponse))
            {
                return Populate<GetDecodeRawTransactionResponse>(token, objectType, serializer);
            }

            if (objectType == typeof(SendTransactionResponse))
            {
                return Populate<SendTransactionResponse>(token, objectType, serializer);
            }

            throw new NotImplementedException();
            }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            throw new NotImplementedException();
        }
    }
}