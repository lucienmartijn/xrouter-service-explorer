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
var forms_1 = require("@angular/forms");
var operators_1 = require("rxjs/operators");
var ViewXrServiceComponent = /** @class */ (function () {
    function ViewXrServiceComponent(xrouterApiService, router, route, location) {
        var _this = this;
        this.xrouterApiService = xrouterApiService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.loading = true;
        route.params.subscribe(function (p) {
            _this.serviceName = p['name'];
            if (util_1.isNullOrUndefined(_this.serviceName)) {
                router.navigate(['']);
                return;
            }
        });
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof router_1.NavigationEnd) {
                _this.initializeData();
            }
        });
    }
    ViewXrServiceComponent.prototype.initializeData = function () {
        var _this = this;
        this.xrouterApiService.GetServiceInfo(this.serviceName)
            .subscribe(function (result) {
            _this.result = result;
            _this.location.replaceState("/xcloud-services/" + _this.serviceName + "/" + _this.result.node.nodePubKey);
            _this.serviceName = _this.serviceName.replace("xrs::", "");
            if (_this.result.service.parametersList)
                _this.parametervalues = new Array(_this.result.service.parametersList.length);
            _this.loading = false;
            _this.resultLoading = false;
        }, function (error) {
            _this.router.navigate(['/error'], { queryParams: error });
        });
    };
    ViewXrServiceComponent.prototype.ngOnInit = function () { };
    ViewXrServiceComponent.prototype.onSubmit = function () {
        var _this = this;
        this.resultLoading = true;
        this.xrouterApiService.Service(new ServiceRequest('xrs::' + this.serviceName, this.parametervalues, 1))
            .pipe(operators_1.finalize(function () {
            _this.resultLoading = false;
        }))
            .subscribe(function (result) {
            _this.serviceResult = result;
        }, function (error) {
            _this.router.navigate(['/error'], { queryParams: error });
        });
    };
    ViewXrServiceComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    __decorate([
        core_1.ViewChild('serviceForm'),
        __metadata("design:type", forms_1.NgForm)
    ], ViewXrServiceComponent.prototype, "serviceForm", void 0);
    ViewXrServiceComponent = __decorate([
        core_1.Component({
            selector: 'app-view-xr-service',
            templateUrl: './view-xr-service.component.html',
            styleUrls: ['./view-xr-service.component.css']
        }),
        __metadata("design:paramtypes", [xrouter_service_1.XrouterApiService,
            router_1.Router,
            router_1.ActivatedRoute,
            common_1.Location])
    ], ViewXrServiceComponent);
    return ViewXrServiceComponent;
}());
exports.ViewXrServiceComponent = ViewXrServiceComponent;
var ServiceRequest = /** @class */ (function () {
    function ServiceRequest(service, parameters, nodecount) {
        this.service = service;
        this.parameters = parameters;
        this.nodecount = nodecount;
    }
    return ServiceRequest;
}());
//# sourceMappingURL=view-xr-service.component.js.map