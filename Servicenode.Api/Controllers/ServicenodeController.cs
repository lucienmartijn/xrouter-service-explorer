using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using BlocknetLib.ExceptionHandling.Rpc;
using BlocknetLib.RPC.RequestResponse;
using BlocknetLib.Services.Coins.Base;
using BlocknetLib.Services.Coins.Blocknet;
using BlocknetLib.Services.Coins.Blocknet.Xrouter;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.BitcoinBased;
using BlocknetLib.Services.Coins.Blocknet.Xrouter.Ethereum;
using Servicenode.Api.Controllers.ViewModels;
using Servicenode.Api.Core.Models;
using Servicenode.Api.Extensions;
using System.Text;
using Servicenode.Api.Helpers;
using System.Globalization;

namespace Servicenode.Api.Controllers
{
    [Route("api/servicenode")]
    public class ServicenodeController : ControllerBase 
    {
        private readonly IXRouterService xrouterService;
        private readonly IServicenodeService servicenodeService;
        public ServicenodeController(IXRouterService xrouterService, IServicenodeService servicenodeService){
            this.xrouterService = xrouterService;
            this.servicenodeService = servicenodeService;
        }

        [HttpGet("[action]")]
        public IActionResult GetServiceNodeCount()
        {
            var configReply = xrouterService.xrShowConfigs();
            
            return Ok(configReply.Count());
        }

        [HttpGet("[action]")]
        public IActionResult GetNodesByService(string service, int node_count = 1)
        {

            var connectResponse = xrouterService.xrConnect(service, node_count);
            var configReply = xrouterService.xrShowConfigs();

            var connectReply = connectResponse.Reply;

            if(service.Contains("xrs::"))
            {
                connectReply = connectReply.Where(cr => cr.Services.Keys.Contains(service.Replace("xrs::",""))).ToList();
            }
            else
            {
                connectReply = connectReply.Where(cr => cr.SpvWallets.Contains(service.Replace("xr::", ""))).ToList();
            }

            connectReply = connectReply.Where(c => c.NodePubKey != string.Empty).ToList();
            var nodes = connectReply.Select(cr => 
            {
                var serviceNodeConfig = configReply.Find(c => c.NodePubKey == cr.NodePubKey);
                var cfg = configReply.Find(c => c.NodePubKey == cr.NodePubKey);

                var cfgElements = new List<string[]>();
                if (cfg != null)
                {
                    cfgElements = cfg.Config.Split(new string[] { "\n", "\r\n" }, StringSplitOptions.RemoveEmptyEntries)
                        .Select(value => value.Split('=')).ToList();
                }

                string port = null;
                if (cfgElements.Any(lc => lc[0] == "port"))
                {
                    port = cfgElements.FirstOrDefault(e => e[0] == "port")[1];
                }

                return new NodeInfoViewModel
                {
                    Type = (port == "41412" || string.IsNullOrEmpty(port)) ? "Regular" : "Enterprise",
                    Banned = cr.Banned,
                    NodePubKey = cr.NodePubKey,
                    PaymentAddress = cr.PaymentAddress,
                    Score = cr.Score
                };
            }).ToList();
            return Ok(nodes);
        }

        [HttpGet("[action]")]
        public IActionResult GetSpvWalletInfo(string service, string nodePubKey = null, int node_count = 1)
        {
            ConnectedNodeResponse serviceNode;
            List<ConnectedNodeResponse> otherNodes;

            var connectResponse = xrouterService.xrConnect(service, node_count);    
            var configReply = xrouterService.xrShowConfigs();

            var connectReply = connectResponse.Reply;                

            if(string.IsNullOrWhiteSpace(nodePubKey)){
                serviceNode = connectReply.OrderByDescending(n => n.Score).FirstOrDefault();
                // split node list
                otherNodes = connectReply.Where(s => s.NodePubKey != serviceNode.NodePubKey).ToList();
            }
            else{
                serviceNode = connectReply.Find(s => s.NodePubKey == nodePubKey);
                otherNodes = connectReply.Where(s => s.NodePubKey != nodePubKey).ToList();
            }

            if(serviceNode == null)
                return StatusCode(StatusCodes.Status500InternalServerError, "Service node not reachable with xrConnect");

            var serviceNodeConfig = configReply.Find(c => c.NodePubKey == serviceNode.NodePubKey);

            var serviceNodeConfigElements = serviceNodeConfig.Config.Split(new string[] { "\n", "\r\n" }, StringSplitOptions.RemoveEmptyEntries)
                        .Select(value => value.Split('='));

            string serviceNodeHost = null;
            
            if(serviceNodeConfigElements.Any(lc => lc[0] == "host"))
            {
                serviceNodeHost = serviceNodeConfigElements.FirstOrDefault(e => e[0] == "host")[1];
            }

            string serviceNodePort = null;
            if(serviceNodeConfigElements.Any(lc => lc[0] == "port"))
            {
                serviceNodePort = serviceNodeConfigElements.FirstOrDefault(e => e[0] == "port")[1];
            }

            var serviceName = service.Replace("xr::", "");
                
            var spvConfig = serviceNode.SpvConfigs.Find(c => c.SpvWallet == serviceName);

            //TODO: Add AutoMapper to replace         
            var viewModel = new SpvWalletResultViewModel
            {
                SpvConfig = new SpvConfigViewModel
                {
                    SpvWallet = spvConfig.SpvWallet,
                    Commands = spvConfig.Commands.Where(c => c.Command != "xrGetConfig").Select(c => new SpvCommandViewModel{
                        Command = c.Command,
                        Disabled = c.Disabled,
                        Fee = c.Fee,
                        PaymentAddress = c.PaymentAddress,
                        RequestLimit = c.RequestLimit,
                        FetchLimit = c.FetchLimit
                    }).ToList()
                },
                Node = new NodeInfoViewModel
                {
                    Type = (serviceNodePort == "41412" || string.IsNullOrEmpty(serviceNodePort)) ? "Regular" : "Enterprise",
                    Host = serviceNodeHost,
                    Port = serviceNodePort,
                    Banned = serviceNode.Banned,
                    NodePubKey = serviceNode.NodePubKey,
                    PaymentAddress = serviceNode.PaymentAddress,
                    Score = serviceNode.Score
                },
                OtherNodes = otherNodes.Select(n => {
                    var cfg = configReply.Find(c => c.NodePubKey == n.NodePubKey);

                    var cfgElements = new List<string[]>();
                    if(cfg != null)
                    {
                        cfgElements = cfg.Config.Split(new string[] { "\n", "\r\n" }, StringSplitOptions.RemoveEmptyEntries)
                            .Select(value => value.Split('=')).ToList();
                    }

                    string port = null;
                    if(cfgElements.Any(lc => lc[0] == "port"))
                    {
                        port = cfgElements.FirstOrDefault(e => e[0] == "port")[1];
                    }
                    return new NodeInfoViewModel{
                        Type = (port == "41412" || string.IsNullOrEmpty(port)) ? "Regular" : "Enterprise",
                        Banned = n.Banned,
                        NodePubKey = n.NodePubKey,
                        PaymentAddress = n.PaymentAddress,
                        Score = n.Score
                    };
                }).ToList()   
            };
            
            return Ok(viewModel);
        }

        [HttpGet("[action]")]
        public IActionResult GetServiceInfo(string service, string nodePubKey = null, int node_count = 1)
        {
            //TODO: refactor this into a class so it becomes a thin controller.

            ConnectedNodeResponse serviceNode;
            List<ConnectedNodeResponse> otherNodes;

            var connectResponse = xrouterService.xrConnect(service, node_count);    
            var configReply = xrouterService.xrShowConfigs();

            var connectReply = connectResponse.Reply;
                
            if(string.IsNullOrWhiteSpace(nodePubKey)){  
                serviceNode = serviceNode = connectReply.OrderByDescending(n => n.Score).FirstOrDefault();
                // split node list
                otherNodes = connectReply.Where(s => s.NodePubKey != serviceNode.NodePubKey).ToList();
            }
            else{
                serviceNode = connectReply.Find(s => s.NodePubKey == nodePubKey);
                otherNodes = connectReply.Where(s => s.NodePubKey != nodePubKey).ToList();
            }

            if (string.IsNullOrEmpty(serviceNode.NodePubKey))
                return StatusCode(StatusCodes.Status500InternalServerError, "Service node SnodeKey is empty.");

            var serviceNodeConfig = configReply.Find(c => c.NodePubKey == serviceNode.NodePubKey);

            var serviceNodeConfigElements = serviceNodeConfig.Config.Split(new string[] { "\n", "\r\n" }, StringSplitOptions.RemoveEmptyEntries)
                        .Select(value => value.Split('='));

            string serviceNodeHost = null;
            
            if(serviceNodeConfigElements.Any(lc => lc[0] == "host"))
            {
                serviceNodeHost = serviceNodeConfigElements.FirstOrDefault(e => e[0] == "host")[1];
            }

            string serviceNodePort = null;
            if(serviceNodeConfigElements.Any(lc => lc[0] == "port"))
            {
                serviceNodePort = serviceNodeConfigElements.FirstOrDefault(e => e[0] == "port")[1];
            }
           

            var serviceName = service.Replace("xrs::", "");
            var serviceConfig = serviceNode.Services[serviceName];

            var configReader = new ConfigReader(serviceNodeConfig.Config);

            var mainSectionSettings = configReader.EnumSection("Main");

            string xcloudConfig = string.Empty;

            if (!string.IsNullOrEmpty(serviceConfig.Parameters))
                xcloudConfig += ("parameters=" + serviceConfig.Parameters + "\n");

            var mainFee = configReader.GetSetting("Main", "fee");
            if (!string.IsNullOrEmpty(mainFee))
            {
                if (serviceConfig.Fee != double.Parse(mainFee))
                {
                    xcloudConfig += ("fee=" + serviceConfig.Fee.ToString(new NumberFormatInfo() { NumberDecimalSeparator = "."}) + "\n");
                }
            }
            else
            {
                xcloudConfig += ("fee=" + serviceConfig.Fee.ToString(new NumberFormatInfo() { NumberDecimalSeparator = "." } + "\n"));
            }

            if (serviceConfig.Disabled)
                xcloudConfig += ("disabled=" + Convert.ToByte(serviceConfig.Disabled) + "\n");

            var mainFetchLimit = configReader.GetSetting("Main", "fetchlimit");
            if (!string.IsNullOrEmpty(mainFetchLimit))
            {
                if (serviceConfig.FetchLimit != int.Parse(mainFetchLimit))
                {
                    xcloudConfig += ("fetchlimit=" + serviceConfig.FetchLimit + "\n");
                }
            }
            else
            {
                xcloudConfig += ("fetchlimit=" + serviceConfig.FetchLimit + "\n");
            }

            var mainClientRequestLimit = configReader.GetSetting("Main", "clientrequestlimit");
            if (!string.IsNullOrEmpty(mainClientRequestLimit))
            {
                if (serviceConfig.RequestLimit != int.Parse(mainClientRequestLimit))
                {
                    xcloudConfig += ("clientrequestlimit=" + serviceConfig.RequestLimit + "\n");
                }
            }
            else
            {
                xcloudConfig += ("clientrequestlimit=" + int.Parse(mainClientRequestLimit) + "\n");
            }

            string help = string.Empty;
            string description = string.Empty;
            if (serviceNodeConfig?.Plugins.Count > 0)
            {
                // Try get help key from config string
                var configDictionary = serviceNodeConfig.Plugins[serviceName]
                        .Split(new string[] { "\n", "\r\n" }, StringSplitOptions.RemoveEmptyEntries)
                        .Select(value => value.Split('=')).ToDictionary(l => l[0], l => string.Join("", l.Skip(1).ToArray()));

                if (configDictionary.ContainsKey("help"))
                    help = configDictionary["help"];

                if(configDictionary.ContainsKey("description"))
                    description = configDictionary["description"];
            }

            //TODO: Add AutoMapper to replace      
            var viewModel = new XCloudServiceResultViewModel
            {
                Service = new XCloudServiceViewModel
                {
                    Help = help,
                    Description = description,
                    Disabled = serviceConfig.Disabled,
                    Fee = serviceConfig.Fee,
                    FetchLimit = serviceConfig.FetchLimit,
                    Parameters = serviceConfig.Parameters,
                    ParametersList = serviceConfig.Parameters != string.Empty ? serviceConfig.Parameters.Split(',').ToList() : null,
                    PaymentAddress = serviceConfig.PaymentAddress,
                    RequestLimit = serviceConfig.RequestLimit,
                    Config = xcloudConfig
                },
                Node = new NodeInfoViewModel
                {
                    Type = (serviceNodePort == "41412" || string.IsNullOrEmpty(serviceNodePort)) ? "Regular" : "Enterprise",
                    Host = serviceNodeHost,
                    Port = serviceNodePort,
                    Banned = serviceNode.Banned,
                    NodePubKey = serviceNode.NodePubKey,
                    PaymentAddress = serviceNode.PaymentAddress,
                    Score = serviceNode.Score
                },
                OtherNodes = otherNodes.Select(n => new NodeInfoViewModel{
                    Banned = n.Banned,
                    NodePubKey = n.NodePubKey,
                    PaymentAddress = n.PaymentAddress,
                    Score = n.Score
                }).ToList()    
            };       

            return Ok(viewModel);
        }

        [HttpGet("[action]")]
        public IActionResult GetNodeInfo(string nodePubKey, string service = null, int node_count = 1)
        {
            if (string.IsNullOrWhiteSpace(nodePubKey))
                return BadRequest("NodePubKey was not supplied");

            var getConnectedResponse = xrouterService.xrConnectedNodes();    
            var connectReply = getConnectedResponse.Reply;

            var serviceNode = connectReply.Find(s => s.NodePubKey == nodePubKey);
            if (serviceNode == null)
            {
                if(service == null) 
                    service = "xr::BLOCK";
                
                var connectResponse = xrouterService.xrConnect(service, node_count);                    
                 
                serviceNode = connectResponse.Reply.Find(s => s.NodePubKey == nodePubKey);

                if(serviceNode == null)
                    return StatusCode(StatusCodes.Status500InternalServerError, new JsonRpcXrError
                    {
                        Error = "Servicenode info cannot be retrieved." + Environment.NewLine + "Node Public Key: " + nodePubKey,
                    });
            }
            string config = string.Empty;
               
            var configReply = xrouterService.xrShowConfigs();            

            var serviceNodeConfig = configReply.Find(c => c.NodePubKey == serviceNode.NodePubKey);
            
            if(serviceNodeConfig != null)
                config = serviceNodeConfig.Config;
            
            var serviceNodeConfigElements = config.Split(new string[] { "\n", "\r\n" }, StringSplitOptions.RemoveEmptyEntries)
                        .Select(value => value.Split('='));

            string serviceNodeHost = null;
            
            if(serviceNodeConfigElements.Any(lc => lc[0] == "host"))
            {
                serviceNodeHost = serviceNodeConfigElements.FirstOrDefault(e => e[0] == "host")[1];
            }

            string serviceNodePort = null;
            if(serviceNodeConfigElements.Any(lc => lc[0] == "port"))
            {
                serviceNodePort = serviceNodeConfigElements.FirstOrDefault(e => e[0] == "port")[1];
            }

            var viewModel = new NodeInfoViewModel
            {
                Type = (serviceNodePort == "41412" || string.IsNullOrEmpty(serviceNodePort))? "Regular" : "Enterprise",
                Host = serviceNodeHost,
                Port = serviceNodePort,
                Banned = serviceNode.Banned,
                FeeDefault = serviceNode.FeeDefault,
                Fees = serviceNode.Fees,
                NodePubKey = serviceNode.NodePubKey,
                PaymentAddress = serviceNode.PaymentAddress,
                Score = serviceNode.Score,
                Config = config,
                Services = serviceNode.Services.Select(s => s.Key).ToList(),
                SpvWallets = serviceNode.SpvWallets,
                SpvConfigs = serviceNode.SpvConfigs.Select(s => new SpvConfigViewModel{
                    SpvWallet = s.SpvWallet,
                    Commands = s.Commands.Select(c => new SpvCommandViewModel{
                        Command = c.Command,
                        Disabled = c.Disabled,
                        Fee = c.Fee,
                        PaymentAddress = c.PaymentAddress,
                        RequestLimit = c.RequestLimit
                    }).ToList()
                }).ToList()
            };

            return Ok(viewModel);
        }

        [HttpGet("[action]")]
        public IActionResult GetServiceNodeList([FromQuery]ServiceNodeQueryViewModel filterViewModel)
        {
            var result = new ServiceNodeQueryResult<Core.Models.ServiceNodeInfoResponse>();
            
            var configs = xrouterService.xrShowConfigs();
            var servicenodes = servicenodeService.serviceNodeList();

            var xrouterEnabledServicenodes = servicenodes.Join(configs, sn => sn.SNodeKey, c => c.NodePubKey, (sn, c) => new {
                Config = c, ServiceNode = sn
            });
            
            var query = xrouterEnabledServicenodes.Select(q => {
                return new Core.Models.ServiceNodeInfoResponse
                { 
                    Type = q.ServiceNode.Exr ? "Enterprise" : "Regular",
                    Address = q.ServiceNode.Address,
                    Score = q.ServiceNode.Score,
                    SNodeKey = q.ServiceNode.SNodeKey,
                    Status = q.ServiceNode.Status,
                    Tier = q.ServiceNode.Tier,
                    TimeLastSeen = q.ServiceNode.TimeLastSeen,
                    TimeLastSeenStr = q.ServiceNode.TimeLastSeenStr,
                    SpvWallets = q.ServiceNode.Services.Where(xw => xw.Split(':')[0].Equals("xr")).Where(xw => !xw.Equals("xr")).ToList(),
                    XCloudServices = q.ServiceNode.Services.Where(xw => xw.Split(':')[0].Equals("xrs")).Where(xw => !xw.Equals("xrs")).ToList()
                };
            }).AsQueryable();

            if(filterViewModel.Page != null && filterViewModel.PageSize != null)
            {
                var queryObj = new ServiceNodeQuery
                {
                    Page = (int) filterViewModel.Page,
                    PageSize = (byte) filterViewModel.PageSize,
                    Type = filterViewModel.Type,
                    SpvWallet = filterViewModel.SpvWallet,
                    XCloudService = filterViewModel.XCloudService,
                    Search = filterViewModel.Search
                };
                query = query.ApplyServiceNodeFiltering(queryObj);

                result.TotalItems = query.Count();

                result.TotalSpvWallets = query.SelectMany(sn => sn.SpvWallets)
                    .Distinct()
                    .Count();
                result.TotalXCloudServices = query.SelectMany(sn => sn.XCloudServices)
                    .Distinct()
                    .Count();

                query = query.ApplyPaging(queryObj);
            } 
            else
            {
                result.TotalItems = query.Count();

                result.TotalSpvWallets = query.SelectMany(sn => sn.SpvWallets)
                    .Distinct()
                    .Count();
                result.TotalXCloudServices = query.SelectMany(sn => sn.XCloudServices)
                    .Distinct()
                    .Count();
            }

            result.Items = query.ToList();

            //TODO: Add an automapper module
            var viewModel = new ServiceNodeQueryResultViewModel<ServiceNodeViewModel>
            {
                Items = result.Items.Select(sn => new ServiceNodeViewModel
                {
                    Type = sn.Type,
                    Score = sn.Score,
                    Tier = sn.Tier,
                    TimeLastSeen = sn.TimeLastSeen,
                    TimeLastSeenStr = sn.TimeLastSeenStr,
                    Address = sn.Address,
                    SNodeKey = sn.SNodeKey,
                    Status = sn.Status,
                    SpvWallets = sn.SpvWallets,
                    XCloudServices = sn.XCloudServices

                }).ToList(),
                TotalItems = result.TotalItems,
                TotalSpvWallets = result.TotalSpvWallets,
                TotalXCloudServices = result.TotalXCloudServices
            };

            return Ok(viewModel);
        }

        [HttpGet("[action]")]
        public IActionResult Ping()
        {
            return Ok("Pong");
        }
    }
}
