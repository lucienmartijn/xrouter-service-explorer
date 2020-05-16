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

namespace XRouter.Api.Serializer
{
    public class SkipEmptyValuesConverter : JsonConverter
    {
        public override bool CanConvert(Type objectType)
        {
            return false;
        }

        public override bool CanWrite
        {
            get { return true; }
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            throw new NotImplementedException();
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            if (value.GetType().IsValueType || value is String)
            {
                JValue jv = new JValue(value);
                jv.WriteTo(writer);
            }
            else if (value is IList && value.GetType().IsGenericType)
            {
                JArray ja = new JArray();
                foreach (var item in value as IList)
                {
                    JObject jo = new JObject();
                    foreach (PropertyInfo prop in item.GetType().GetProperties())
                    {
                        if (prop.CanRead)
                        {
                            object propVal = prop.GetValue(item, null);
                            Type propType = prop.PropertyType;
                            if (propVal != null)
                            {
                                if(propType.IsValueType)
                                {
                                    if (!propVal.Equals(Convert.ChangeType(0, propVal.GetType())))
                                    {
                                        jo.Add(prop.Name, JToken.FromObject(propVal, serializer));
                                    }
                                }
                                else if(propVal is IList && propVal.GetType().IsGenericType)
                                {
                                    if(((IList)propVal).Count > 0)
                                        jo.Add(prop.Name, JToken.FromObject(propVal, serializer));
                                }
                                else
                                {
                                    jo.Add(prop.Name, JToken.FromObject(propVal, serializer));
                                }
                            }
                        }
                    }
                    ja.Add(jo);
                }
                ja.WriteTo(writer);
            }
            else
            {
                JObject jo = new JObject();
                foreach (PropertyInfo prop in value.GetType().GetProperties())
                {
                    if (prop.CanRead)
                    {
                        object propVal = prop.GetValue(value, null);
                        Type propType = prop.PropertyType;
                        if (propVal != null)
                        {
                            if (propType.IsValueType)
                            {
                                if (!propVal.Equals(Convert.ChangeType(0, propVal.GetType())))
                                {
                                    jo.Add(prop.Name, JToken.FromObject(propVal, serializer));
                                }
                            }
                            else if (propVal is IList && propVal.GetType().IsGenericType)
                            {
                                if (((IList)propVal).Count > 0)
                                    jo.Add(prop.Name, JToken.FromObject(propVal, serializer));
                            }
                            else
                            {
                                jo.Add(prop.Name, JToken.FromObject(propVal, serializer));
                            }
                        }
                    }
                }
                jo.WriteTo(writer);
            } 
        }
    }
}