"use strict";
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
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var xrouter_service_1 = require("../shared/services/xrouter.service");
var router_1 = require("@angular/router");
var util_1 = require("util");
var operators_1 = require("rxjs/operators");
var responsetime_service_1 = require("../shared/services/responsetime.service");
var ViewSpvWalletComponent = /** @class */ (function () {
    function ViewSpvWalletComponent(xrouterApiService, responseTimeService, router, route, location) {
        var _this = this;
        this.xrouterApiService = xrouterApiService;
        this.responseTimeService = responseTimeService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.blockHashes = [""];
        this.txIds = [""];
        route.params.subscribe(function (p) {
            _this.spvWalletName = p['name'];
            _this.nodePubKey = p['nodePubKey'];
            if (util_1.isNullOrUndefined(_this.spvWalletName)) {
                router.navigate(['']);
                return;
            }
            _this.loading = true;
        });
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationEnd) {
                _this.initializeData();
            }
        });
    }
    ViewSpvWalletComponent.prototype.initializeData = function () {
        var _this = this;
        this.xrouterApiService.GetSpvWalletInfo(this.spvWalletName, this.nodePubKey)
            .subscribe(function (result) {
            _this.result = result;
            _this.location.replaceState("/spv-wallets/" + _this.spvWalletName + "/" + _this.result.node.nodePubKey);
            _this.spvWalletName = _this.spvWalletName.replace("xr::", "");
            _this.loading = false;
            _this.selectedSpvCommand = _this.result.spvConfig.commands[0].command;
            _this.nodeCount = 1;
            _this.resultLoading = false;
        }, function (error) {
            _this.router.navigate(['/error'], { queryParams: error });
        });
    };
    ViewSpvWalletComponent.prototype.callXrouterCommand = function (callback) {
        var _this = this;
        callback.pipe(operators_1.finalize(function () {
            _this.resultLoading = false;
        }))
            .subscribe(function (result) {
            _this.spvWalletCommandResult = result;
            _this.responseTime = _this.spvWalletCommandResult.elapsed_time;
        }, function (error) {
            _this.spvWalletCommandResult = error;
        });
    };
    ViewSpvWalletComponent.prototype.onSubmit = function () {
        this.resultLoading = true;
        var nodecount = this.spvWalletForm.value.nodeCount;
        switch (this.spvWalletForm.value.selectedSpvCommand) {
            case "xrGetBlockCount": {
                this.callXrouterCommand(this.xrouterApiService.GetBlockCount(this.spvWalletName, nodecount));
                break;
            }
            case "xrGetBlockHash": {
                this.callXrouterCommand(this.xrouterApiService.GetBlockHash(this.spvWalletName, this.spvWalletForm.value.blockNumber, nodecount));
                break;
            }
            case "xrGetBlock": {
                this.callXrouterCommand(this.xrouterApiService.GetBlock(this.spvWalletName, this.spvWalletForm.value.blockHash, nodecount));
                break;
            }
            case "xrGetBlocks": {
                this.callXrouterCommand(this.xrouterApiService.GetBlocks(this.spvWalletName, this.blockHashes, nodecount));
                break;
            }
            case "xrGetTransaction": {
                this.callXrouterCommand(this.xrouterApiService.GetTransaction(this.spvWalletName, this.spvWalletForm.value.txid, nodecount));
                break;
            }
            case "xrGetTransactions": {
                this.callXrouterCommand(this.xrouterApiService.GetTransactions(this.spvWalletName, this.txIds, nodecount));
                break;
            }
            case "xrDecodeRawTransaction": {
                this.callXrouterCommand(this.xrouterApiService.DecodeRawTransaction(this.spvWalletName, this.spvWalletForm.value.txHex, nodecount));
                break;
            }
            case "xrSendTransaction": {
                this.callXrouterCommand(this.xrouterApiService.SendTransaction(this.spvWalletName, this.spvWalletForm.value.signedTx));
                break;
            }
        }
    };
    ViewSpvWalletComponent.prototype.addTxId = function () {
        this.txIds.push("");
    };
    ViewSpvWalletComponent.prototype.removeTxId = function (index) {
        this.txIds.splice(index, 1);
    };
    ViewSpvWalletComponent.prototype.addBlockHash = function () {
        this.blockHashes.push("");
    };
    ViewSpvWalletComponent.prototype.removeBlockHash = function (index) {
        this.blockHashes.splice(index, 1);
    };
    ViewSpvWalletComponent.prototype.ngOnInit = function () { };
    ViewSpvWalletComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    __decorate([
        core_1.ViewChild('spvWalletForm'),
        __metadata("design:type", forms_1.NgForm)
    ], ViewSpvWalletComponent.prototype, "spvWalletForm", void 0);
    ViewSpvWalletComponent = __decorate([
        core_1.Component({
            selector: 'app-view-spv-wallet',
            templateUrl: './view-spv-wallet.component.html',
            styleUrls: ['./view-spv-wallet.component.css']
        }),
        __metadata("design:paramtypes", [xrouter_service_1.XrouterApiService,
            responsetime_service_1.ResponseTimeService,
            router_1.Router,
            router_1.ActivatedRoute,
            common_1.Location])
    ], ViewSpvWalletComponent);
    return ViewSpvWalletComponent;
}());
exports.ViewSpvWalletComponent = ViewSpvWalletComponent;
//# sourceMappingURL=view-spv-wallet.component.js.map