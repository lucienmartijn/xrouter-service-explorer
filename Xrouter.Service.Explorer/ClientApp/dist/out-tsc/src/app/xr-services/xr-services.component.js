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
var XrServicesComponent = /** @class */ (function () {
    function XrServicesComponent(router, xrouterService) {
        this.router = router;
        this.xrouterService = xrouterService;
        this.PAGE_SIZE = 3;
        this.services = {};
        this.query = {
            pageSize: this.PAGE_SIZE,
        };
        this.queryPastCourses = {
            pageSize: this.PAGE_SIZE,
        };
    }
    XrServicesComponent.prototype.ngOnInit = function () {
        this.populateServices();
    };
    XrServicesComponent.prototype.populateServices = function () {
        var _this = this;
        this.xrouterService.GetNetworkServices()
            .subscribe(function (result) {
            _this.services = result;
        });
    };
    XrServicesComponent.prototype.onQueryChange = function (query) {
        this.query = query;
        this.populateServices();
    };
    XrServicesComponent = __decorate([
        core_1.Component({
            selector: 'app-services',
            templateUrl: './xr-services.component.html',
            styleUrls: ['./xr-services.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, xrouter_service_1.XrouterApiService])
    ], XrServicesComponent);
    return XrServicesComponent;
}());
exports.XrServicesComponent = XrServicesComponent;
//# sourceMappingURL=xr-services.component.js.map