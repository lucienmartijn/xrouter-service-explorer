using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xrouter.Service.Explorer.BitcoinLib.Services.Coins.Blocknet.XRouter;

namespace Xrouter.Service.Explorer.BitcoinLib.Services
{
    public delegate TResponseType WebserviceMethod<TResponseType>()
        where TResponseType : ResponseBase, new();

    public delegate TResponseType WebserviceMethod<TRequestType, TResponseType>(TRequestType request)
        where TResponseType : ResponseBase, new();

    public class ErrorMessage
    {
        public string Message { get; set; }

        public string Code { get; set; }
    }

    public class ErrorHandler
    {
        public ErrorHandler() { }

        public TResponseType Call<TRequestType, TResponseType>(
           TRequestType request,
           WebserviceMethod<TRequestType, TResponseType> method)
           where TResponseType : ResponseBase, new()
        {
            return Handler(() =>
            {
                if (method == null)
                    throw new ArgumentNullException("method");
                if (request == null)
                    throw new ArgumentNullException("request");

                TResponseType response = method(request);

                //if (response == null || response.Result == null)
                if (response == null)
                        throw new InvalidOperationException("No response returned");

                return response;

            }, method != null ? method.Method.Name : null, request);
        }

        /// <summary>
        /// Error handling
        /// </summary>
        private TResponseType Handler<TResponseType>(Func<TResponseType> method, string methodName, object request)
            where TResponseType : ResponseBase, new()
        {
            methodName = methodName ?? "unknown";
            try
            {
                if (method == null)
                    throw new ArgumentNullException("method");

                return method();
            }
            //catch (AudionovaValidationException ex)
            //{
            //    LogException(Log, ex, methodName, request);
            //    return CreateResponseMessage<TResponseType>(ex.BrokenRuleDescriptions.Select(e => new ErrorMessage { Message = e }));
            //}
            //catch (FrameworkException ex)
            //{
            //    LogException(Log, ex, methodName, request);
            //    return CreateResponseMessage<TResponseType>(ex.Message, ex.Code);
            //}
            catch (Exception ex)
            {
                //LogException(Log, ex, methodName, request);
                //LogException(EventLog, ex, methodName, request);
                throw;
            }
        }
    }
}
