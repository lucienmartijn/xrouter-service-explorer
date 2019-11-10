using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xrouter.Service.Explorer.BitcoinLib.Services.Coins.Blocknet.XRouter;

namespace Xrouter.Service.Explorer.BitcoinLib.Services
{
    public class ServiceBase
    {
        #region Constructor
        /// <summary>
        /// Ctor
        /// </summary>
        public ServiceBase() { }
        #endregion Constructor

        #region Error handling & Logging

        //private static readonly Logger _techeventlog = LoggerFactory.CreateLogger("TechEventLogVecozo");
        private static readonly ErrorHandler _errorHandler = new ErrorHandler();

        ///// <summary>
        ///// Deze logt naar de eventlog
        ///// </summary>
        //public static Logger TechEventLog
        //{
        //    get { return _techeventlog; }
        //}

        /// <summary>
        /// Error handler
        /// </summary>
        public static ErrorHandler Handler
        {
            get
            {
                return _errorHandler;
            }
        }

        /// <summary>
        /// Log een bericht
        /// </summary>
        /// <param name="message"></param>
        /// <param name="args"></param>
        //public static void LogInformation(string message, params object[] args)
        //{
        //    _techeventlog.LogInformation(message, args);
        //}

        /// <summary>
        /// Log een bericht
        /// </summary>
        /// <param name="message"></param>
        /// <param name="args"></param>
        //public static void LogDebug(string message, params object[] args)
        //{
        //    _techeventlog.LogDebug(message, args);
        //}

        /// <summary>
        /// Log een bericht
        /// </summary>
        /// <param name="message"></param>
        /// <param name="args"></param>
        //public static void LogTrace(string message, params object[] args)
        //{
        //    _techeventlog.LogTrace(message, args);
        //}
        #endregion

        #region HandleRequest
        /// <summary>
        /// Start stopwatch om doorlooptijd van service te meten. 
        /// </summary>
        /// <typeparam name="TRequestType"></typeparam>
        /// <typeparam name="TResponseType"></typeparam>
        /// <param name="request"></param>
        /// <param name="method"></param>
        /// <returns></returns>
        protected static TResponseType HandleRequest<TRequestType, TResponseType>(TRequestType request, WebserviceMethod<TRequestType, TResponseType> method)
            where TRequestType : RequestBase
            where TResponseType : ResponseBase, new()
        {
            var resp = Handler.Call(request, method);

            return resp;
        }
        #endregion
    }
    
}
