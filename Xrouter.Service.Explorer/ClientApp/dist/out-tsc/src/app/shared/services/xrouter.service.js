"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var base_service_1 = require("./base.service");
var util_1 = require("util");
var session_service_1 = require("./session.service");
var XrouterApiService = /** @class */ (function (_super) {
    __extends(XrouterApiService, _super);
    function XrouterApiService(http, sessionService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.sessionService = sessionService;
        _this.apiEndpoint = 'blocknet/xrouter';
        _this.baseEndpoint = ''; // http://localhost
        _this.baseEndpoint = sessionService.getApiURI();
        return _this;
    }
    XrouterApiService.prototype.GetNetworkServices = function () {
        return this.http.get(this.baseEndpoint + this.apiEndpoint + '/getNetworkServices');
    };
    XrouterApiService.prototype.GetNetworkSpvWallets = function () {
        return this.http.get(this.baseEndpoint + this.apiEndpoint + '/getNetworkSpvWallets');
    };
    XrouterApiService.prototype.GetServiceInfo = function (service, nodePubKey, node_count) {
        if (node_count === void 0) { node_count = 1; }
        var url = this.baseEndpoint + this.apiEndpoint + '/GetServiceInfo/?service=' + service;
        if (!util_1.isNullOrUndefined(nodePubKey)) {
            url += '&nodePubKey=' + nodePubKey;
        }
        url += '&node_count=' + node_count;
        return this.http.get(url);
    };
    XrouterApiService.prototype.GetSpvWalletInfo = function (service, nodePubKey, node_count) {
        if (node_count === void 0) { node_count = 1; }
        var url = this.baseEndpoint + this.apiEndpoint + '/GetSpvWalletInfo/?service=' + service;
        if (!util_1.isNullOrUndefined(nodePubKey)) {
            url += '&nodePubKey=' + nodePubKey;
        }
        url += '&node_count=' + node_count;
        return this.http.get(url);
    };
    XrouterApiService.prototype.GetNodeInfo = function (nodePubKey, service, node_count) {
        if (node_count === void 0) { node_count = 1; }
        var url = this.baseEndpoint + this.apiEndpoint + '/GetNodeInfo/?nodePubKey=' + nodePubKey;
        if (!util_1.isNullOrUndefined(service)) {
            url += '&service=' + service;
        }
        url += '&node_count=' + node_count;
        return this.http.get(url);
    };
    XrouterApiService.prototype.GetServiceNodeList = function () {
        var url = this.baseEndpoint + this.apiEndpoint + '/GetServiceNodeList';
        return this.http.get(url);
    };
    XrouterApiService.prototype.Service = function (request) {
        var url = this.baseEndpoint + this.apiEndpoint + '/Service';
        return this.http.post(url, request);
    };
    XrouterApiService.prototype.GetBlockCount = function (blockchain, node_count) {
        if (node_count === void 0) { node_count = 1; }
        var url = this.baseEndpoint + this.apiEndpoint + '/GetBlockCount?blockchain=' + blockchain;
        url += '&node_count=' + node_count;
        return this.http.get(url);
    };
    XrouterApiService.prototype.GetBlockHash = function (blockchain, blockNumber, node_count) {
        if (node_count === void 0) { node_count = 1; }
        var url = this.baseEndpoint + this.apiEndpoint + '/GetBlockHash?blockchain=' + blockchain;
        url += '&block_number=' + blockNumber;
        url += '&node_count=' + node_count;
        return this.http.get(url);
    };
    XrouterApiService.prototype.GetBlock = function (blockchain, blockHash, node_count) {
        if (node_count === void 0) { node_count = 1; }
        var url = this.baseEndpoint + this.apiEndpoint + '/GetBlock?blockchain=' + blockchain;
        url += '&block_hash=' + blockHash;
        url += '&node_count=' + node_count;
        return this.http.get(url);
    };
    XrouterApiService.prototype.GetBlocks = function (blockchain, blockHashes, node_count) {
        if (node_count === void 0) { node_count = 1; }
        var url = this.baseEndpoint + this.apiEndpoint + '/GetBlocks';
        var params = new http_1.HttpParams();
        params = params.append('blockchain', blockchain);
        params = params.append('block_hashes', JSON.stringify(blockHashes));
        params = params.append('node_count', node_count.toString());
        return this.http.get(url, { params: params });
    };
    XrouterApiService.prototype.GetTransaction = function (blockchain, txid, node_count) {
        if (node_count === void 0) { node_count = 1; }
        var url = this.baseEndpoint + this.apiEndpoint + '/GetTransaction?/blockchain=' + blockchain;
        url += '&txid=' + txid;
        url += '&node_count=' + node_count;
        return this.http.get(url);
    };
    XrouterApiService.prototype.GetTransactions = function (blockchain, txids, node_count) {
        if (node_count === void 0) { node_count = 1; }
        var url = this.baseEndpoint + this.apiEndpoint + '/GetTransactions';
        var params = new http_1.HttpParams();
        params = params.append('blockchain', blockchain);
        params = params.append('txids', JSON.stringify(txids));
        params = params.append('node_count', node_count.toString());
        return this.http.get(url, { params: params });
    };
    XrouterApiService.prototype.DecodeRawTransaction = function (blockchain, txHex, node_count) {
        if (node_count === void 0) { node_count = 1; }
        var url = this.baseEndpoint + this.apiEndpoint + '/DecodeRawTransaction?/blockchain=' + blockchain;
        url += '&txHex=' + txHex;
        url += '&node_count=' + node_count;
        return this.http.get(url);
    };
    XrouterApiService.prototype.SendTransaction = function (blockchain, signedTx) {
        var url = this.baseEndpoint + this.apiEndpoint + '/SendTransaction?/blockchain=' + blockchain;
        url += '&signedTx=' + signedTx;
        return this.http.get(url);
    };
    XrouterApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, session_service_1.SessionService])
    ], XrouterApiService);
    return XrouterApiService;
}(base_service_1.BaseService));
exports.XrouterApiService = XrouterApiService;
//# sourceMappingURL=xrouter.service.js.map