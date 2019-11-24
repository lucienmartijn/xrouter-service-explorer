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
var forms_1 = require("@angular/forms");
var navigator_service_1 = require("../shared/services/navigator.service.");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var base_service_1 = require("../shared/services/base.service");
var session_service_1 = require("../shared/services/session.service");
// const NODEPUBKEY_REGEX = '^[0][a-zA-Z0-9]{65}$'; 
// const ADDRESS_REGEX = '^[B][a-zA-Z0-9]{33}$';
// const TXHASH_REGEX = '[a-zA-Z0-9]{64}$';
var SearchFormComponent = /** @class */ (function (_super) {
    __extends(SearchFormComponent, _super);
    function SearchFormComponent(http, navigatorService, sessionService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.navigatorService = navigatorService;
        _this.sessionService = sessionService;
        _this.apiEndpoint = 'blocknet/xrouter';
        _this.baseEndpoint = ''; // http://localhost
        _this.searchServicesCtrl = new forms_1.FormControl();
        _this.isLoading = false;
        _this.baseEndpoint = sessionService.getApiURI();
        return _this;
    }
    SearchFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchServicesCtrl.valueChanges
            .pipe(operators_1.debounceTime(500), operators_1.tap(function () {
            _this.errorMsg = "";
            _this.filteredServices = [];
            _this.isLoading = true;
        }), operators_1.switchMap(function (value) { return _this.http.get(_this.baseEndpoint + _this.apiEndpoint + "/?searchString=" + value)
            .pipe(operators_1.finalize(function () {
            _this.isLoading = false;
        })); }))
            .subscribe(function (data) {
            if (data['items'] == undefined) {
                //this.errorMsg = data['Error'];
                _this.filteredServices = [];
            }
            else {
                _this.errorMsg = "";
                _this.filteredServices = data['items'];
            }
        });
    };
    SearchFormComponent.prototype.onSelectionChanged = function (event) {
        var serviceName = event.option.value;
        if (serviceName.includes("xrs::")) {
            this.navigatorService.xCloudServiceDetails(serviceName);
        }
        else {
            this.navigatorService.spvWalletDetails(serviceName);
        }
    };
    SearchFormComponent = __decorate([
        core_1.Component({
            selector: 'search-form',
            templateUrl: './search-form.component.html',
            styleUrls: ['./search-form.component.css']
        }),
        __metadata("design:paramtypes", [http_1.HttpClient,
            navigator_service_1.NavigatorService,
            session_service_1.SessionService])
    ], SearchFormComponent);
    return SearchFormComponent;
}(base_service_1.BaseService));
exports.SearchFormComponent = SearchFormComponent;
//# sourceMappingURL=search-form.component.js.map