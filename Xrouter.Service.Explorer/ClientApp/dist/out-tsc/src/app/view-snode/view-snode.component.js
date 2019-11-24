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
var common_1 = require("@angular/common");
var xrouter_service_1 = require("../shared/services/xrouter.service");
var router_1 = require("@angular/router");
var util_1 = require("util");
var ViewSnodeComponent = /** @class */ (function () {
    function ViewSnodeComponent(xrouterApiService, router, route, location) {
        var _this = this;
        this.xrouterApiService = xrouterApiService;
        this.router = router;
        this.route = route;
        this.location = location;
        route.params.subscribe(function (p) {
            _this.nodePubKey = p['nodePubKey'];
            _this.service = p['service'];
            if (util_1.isNullOrUndefined(_this.nodePubKey)) {
                router.navigate(['']);
                return;
            }
            _this.loading = true;
        });
    }
    ViewSnodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.xrouterApiService.GetNodeInfo(this.nodePubKey, this.service)
            .subscribe(function (result) {
            _this.result = result;
            _this.selectedWalletName = _this.result.spvConfigs[0].spvWallet;
            _this.onWalletChange();
            _this.config = {
                itemsPerPage: 10,
                currentPage: 1,
                totalItems: _this.result.services.length
            };
            _this.loading = false;
        }, function (error) {
            _this.router.navigate(['/error'], { queryParams: error });
        });
    };
    ViewSnodeComponent.prototype.onWalletChange = function () {
        var _this = this;
        this.selectedWallet = this.result.spvConfigs.find(function (c) { return c.spvWallet === _this.selectedWalletName; });
    };
    ViewSnodeComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    ViewSnodeComponent = __decorate([
        core_1.Component({
            selector: 'app-view-snode',
            templateUrl: './view-snode.component.html',
            styleUrls: ['./view-snode.component.css']
        }),
        __metadata("design:paramtypes", [xrouter_service_1.XrouterApiService,
            router_1.Router,
            router_1.ActivatedRoute,
            common_1.Location])
    ], ViewSnodeComponent);
    return ViewSnodeComponent;
}());
exports.ViewSnodeComponent = ViewSnodeComponent;
//# sourceMappingURL=view-snode.component.js.map