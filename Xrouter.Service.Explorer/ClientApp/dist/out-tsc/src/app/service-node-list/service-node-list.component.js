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
var router_1 = require("@angular/router");
var xrouter_service_1 = require("../shared/services/xrouter.service");
var ServiceNodeListComponent = /** @class */ (function () {
    function ServiceNodeListComponent(router, xrouterService) {
        this.router = router;
        this.xrouterService = xrouterService;
        this.PAGE_SIZE = 3;
        this.query = {
            pageSize: this.PAGE_SIZE,
        };
        this.queryPastCourses = {
            pageSize: this.PAGE_SIZE,
        };
    }
    ServiceNodeListComponent.prototype.ngOnInit = function () {
        this.populateServiceNodes();
    };
    ServiceNodeListComponent.prototype.populateServiceNodes = function () {
        var _this = this;
        this.xrouterService.GetServiceNodeList()
            .subscribe(function (result) {
            _this.serviceNodes = result;
            _this.selectedXCloudServices = new Array(result.length);
            _this.selectedSpvWallets = new Array(result.length);
            _this.serviceNodes.forEach(function (sn, index) {
                _this.selectedSpvWallets[index] = sn.spvWallets[0];
                _this.selectedXCloudServices[index] = sn.xCloudServices[0];
            });
        });
    };
    ServiceNodeListComponent.prototype.onQueryChange = function (query) {
        this.query = query;
        this.populateServiceNodes();
    };
    ServiceNodeListComponent.prototype.onSpvWalletChange = function (index, event) {
        this.selectedSpvWallets[index] = event.target.value;
    };
    ServiceNodeListComponent.prototype.onXCloudServiceChange = function (index, event) {
        this.selectedXCloudServices[index] = event.target.value;
    };
    // onSpvWalletClick(index:number){
    //   if(this.selectedSpvWallets[index].includes('x'))
    //   this.router.navigate(['/spv-wallets', this.selectedSpvWallets[index], this.serviceNodes[index].nodePubKey]);
    // }
    // onXCloudServiceClick(index:number){
    //   if(this.selectedXCloudServices[index].includes('x'))
    //   this.router.navigate(['/xcloud-services', this.selectedXCloudServices[index], this.serviceNodes[index].nodePubKey]);
    // }
    ServiceNodeListComponent.prototype.onNodeClick = function (index) {
        var node = this.serviceNodes[index];
        this.router.navigate(['/xrouter-snodes', node.nodePubKey]);
    };
    ServiceNodeListComponent = __decorate([
        core_1.Component({
            selector: 'app-service-node-list',
            templateUrl: './service-node-list.component.html',
            styleUrls: ['./service-node-list.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, xrouter_service_1.XrouterApiService])
    ], ServiceNodeListComponent);
    return ServiceNodeListComponent;
}());
exports.ServiceNodeListComponent = ServiceNodeListComponent;
//# sourceMappingURL=service-node-list.component.js.map