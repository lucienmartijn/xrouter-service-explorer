(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n.flex-wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  min-height: 100vh;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <app-nav-menu></app-nav-menu>\r\n  <main class=\"flex-shrink-0 flex-wrapper\">\r\n    <div class=\"container\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <app-footer></app-footer>\r\n  </main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-ng-autocomplete */ "./node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptors */ "./src/app/interceptors.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service-list/service-list.component */ "./src/app/service-list/service-list.component.ts");
/* harmony import */ var _xr_services_xr_services_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./xr-services/xr-services.component */ "./src/app/xr-services/xr-services.component.ts");
/* harmony import */ var _spv_wallets_spv_wallets_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./spv-wallets/spv-wallets.component */ "./src/app/spv-wallets/spv-wallets.component.ts");
/* harmony import */ var _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/services/xrouter.service */ "./src/app/shared/services/xrouter.service.ts");
/* harmony import */ var _view_xr_service_view_xr_service_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view-xr-service/view-xr-service.component */ "./src/app/view-xr-service/view-xr-service.component.ts");
/* harmony import */ var _view_snode_view_snode_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./view-snode/view-snode.component */ "./src/app/view-snode/view-snode.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _view_spv_wallet_view_spv_wallet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./view-spv-wallet/view-spv-wallet.component */ "./src/app/view-spv-wallet/view-spv-wallet.component.ts");
/* harmony import */ var _service_node_list_service_node_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service-node-list/service-node-list.component */ "./src/app/service-node-list/service-node-list.component.ts");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/search-form/search-form.component.ts");
/* harmony import */ var _shared_services_navigator_service___WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/services/navigator.service. */ "./src/app/shared/services/navigator.service..ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _rpc_console_rpc_console_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./rpc-console/rpc-console.component */ "./src/app/rpc-console/rpc-console.component.ts");
/* harmony import */ var _shared_services_responsetime_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/services/responsetime.service */ "./src/app/shared/services/responsetime.service.ts");
/* harmony import */ var _shared_services_search_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/services/search.service */ "./src/app/shared/services/search.service.ts");
/* harmony import */ var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/services/configuration.service */ "./src/app/shared/services/configuration.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _shared_services_account_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/services/account.service */ "./src/app/shared/services/account.service.ts");
/* harmony import */ var _check_login_intializer__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./check-login-intializer */ "./src/app/check-login-intializer.ts");
/* harmony import */ var _my_service_nodes_my_service_nodes_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./my-service-nodes/my-service-nodes.component */ "./src/app/my-service-nodes/my-service-nodes.component.ts");
/* harmony import */ var _shared_services_myservicenodes_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/services/myservicenodes.service */ "./src/app/shared/services/myservicenodes.service.ts");
/* harmony import */ var _my_service_nodes_my_service_nodes_module__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./my-service-nodes/my-service-nodes.module */ "./src/app/my-service-nodes/my-service-nodes.module.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var appInitializerFn = function (appConfig) {
    return function () {
        return appConfig.loadConfig();
    };
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_11__["NavMenuComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_30__["FooterComponent"],
                _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_13__["PaginationComponent"],
                _service_node_list_service_node_list_component__WEBPACK_IMPORTED_MODULE_22__["ServiceNodeListComponent"],
                _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_14__["ServiceListComponent"],
                _xr_services_xr_services_component__WEBPACK_IMPORTED_MODULE_15__["XrServicesComponent"],
                _spv_wallets_spv_wallets_component__WEBPACK_IMPORTED_MODULE_16__["SpvWalletsComponent"],
                _view_xr_service_view_xr_service_component__WEBPACK_IMPORTED_MODULE_18__["ViewXrServiceComponent"],
                _view_spv_wallet_view_spv_wallet_component__WEBPACK_IMPORTED_MODULE_21__["ViewSpvWalletComponent"],
                _view_snode_view_snode_component__WEBPACK_IMPORTED_MODULE_19__["ViewSnodeComponent"],
                _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_23__["SearchFormComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_31__["SignInComponent"],
                _rpc_console_rpc_console_component__WEBPACK_IMPORTED_MODULE_26__["RpcConsoleComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_25__["ErrorComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _my_service_nodes_my_service_nodes_module__WEBPACK_IMPORTED_MODULE_36__["NgbdModalComponentModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_8__["AutocompleteLibModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_38__["MatStepperModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_39__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_40__["MatButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], pathMatch: 'full' },
                    { path: 'xrouter-snodes', component: _service_node_list_service_node_list_component__WEBPACK_IMPORTED_MODULE_22__["ServiceNodeListComponent"] },
                    { path: 'spv-wallets', component: _spv_wallets_spv_wallets_component__WEBPACK_IMPORTED_MODULE_16__["SpvWalletsComponent"] },
                    { path: 'spv-wallets/:name', component: _view_spv_wallet_view_spv_wallet_component__WEBPACK_IMPORTED_MODULE_21__["ViewSpvWalletComponent"], runGuardsAndResolvers: 'always' },
                    { path: 'spv-wallets/:name/:nodePubKey', component: _view_spv_wallet_view_spv_wallet_component__WEBPACK_IMPORTED_MODULE_21__["ViewSpvWalletComponent"], runGuardsAndResolvers: 'always' },
                    { path: 'xcloud-services', component: _xr_services_xr_services_component__WEBPACK_IMPORTED_MODULE_15__["XrServicesComponent"] },
                    { path: 'xcloud-services/:name', component: _view_xr_service_view_xr_service_component__WEBPACK_IMPORTED_MODULE_18__["ViewXrServiceComponent"], runGuardsAndResolvers: 'always' },
                    { path: 'xcloud-services/:name/:nodePubKey', component: _view_xr_service_view_xr_service_component__WEBPACK_IMPORTED_MODULE_18__["ViewXrServiceComponent"], runGuardsAndResolvers: 'always' },
                    { path: 'xrouter-snodes/:nodePubKey', component: _view_snode_view_snode_component__WEBPACK_IMPORTED_MODULE_19__["ViewSnodeComponent"] },
                    { path: 'xrouter-snodes/:nodePubKey/:service', component: _view_snode_view_snode_component__WEBPACK_IMPORTED_MODULE_19__["ViewSnodeComponent"] },
                    { path: 'my-service-nodes/:id', component: _my_service_nodes_my_service_nodes_component__WEBPACK_IMPORTED_MODULE_34__["MyServiceNodesComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_37__["AuthGuard"]] },
                    { path: 'rpc-console', component: _rpc_console_rpc_console_component__WEBPACK_IMPORTED_MODULE_26__["RpcConsoleComponent"] },
                    { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_25__["ErrorComponent"] },
                    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"] }
                ], {
                    useHash: true,
                    onSameUrlNavigation: 'reload'
                })
            ],
            providers: [
                _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_17__["XrouterApiService"],
                _shared_services_myservicenodes_service__WEBPACK_IMPORTED_MODULE_35__["MyServiceNodesService"],
                _shared_services_search_service__WEBPACK_IMPORTED_MODULE_28__["SearchService"],
                _shared_services_account_service__WEBPACK_IMPORTED_MODULE_32__["AccountService"],
                _shared_services_navigator_service___WEBPACK_IMPORTED_MODULE_24__["NavigatorService"],
                _shared_services_responsetime_service__WEBPACK_IMPORTED_MODULE_27__["ResponseTimeService"],
                // {
                //   provide: HTTP_INTERCEPTORS,
                //   useClass: HttpErrorInterceptor,
                //   multi: true
                // },
                _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_29__["ConfigurationService"],
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: _check_login_intializer__WEBPACK_IMPORTED_MODULE_33__["checkIfUserIsAuthenticated"],
                    multi: true,
                    deps: [_shared_services_account_service__WEBPACK_IMPORTED_MODULE_32__["AccountService"]]
                },
                _interceptors__WEBPACK_IMPORTED_MODULE_10__["interceptorProviders"],
                _auth_guard__WEBPACK_IMPORTED_MODULE_37__["AuthGuard"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/account.service */ "./src/app/shared/services/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.user.isAuthenticated()) {
            // not logged in
            this.router.navigate(['/'], { queryParams: { returnUrl: state.url } });
            return false;
        }
        // logged in, so return true
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/check-login-intializer.ts":
/*!*******************************************!*\
  !*** ./src/app/check-login-intializer.ts ***!
  \*******************************************/
/*! exports provided: checkIfUserIsAuthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfUserIsAuthenticated", function() { return checkIfUserIsAuthenticated; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


function checkIfUserIsAuthenticated(accountService) {
    return function () {
        return accountService.updateUserAuthenticationStatus().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (_) {
            console.error('Error trying to validate if the user is authenticated. The most probable cause is that the ASP.NET Core project isn\'t running');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        })).toPromise();
    };
}


/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/error/error.component.html":
/*!********************************************!*\
  !*** ./src/app/error/error.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Something went wrong</h1>\r\n<!-- <p>Servicenode is probably not properly configured. Servicenode info cannot be retrieved.</p> -->\r\n\r\n<h3>Error: {{error.error}}</h3>\r\n"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.route.queryParams.subscribe(function (e) { return _this.error = e; });
    }
    ErrorComponent.prototype.ngOnInit = function () { };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\r\n  background-color: #f5f5f5;\r\n  /* background-image: url(../../assets/pattern.png);\r\n  background-repeat: no-repeat;\r\n  background-size: contain; */\r\n}\r\nbody {\r\n  padding-bottom: 70px;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <footer class=\"footer mt-auto py-3\">\r\n  \r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md\">\r\n          Powered by:  \r\n          <a href=\"https://blocknet.co/\"> \r\n            <img src=\"../../assets/blocknet-icon.png\" width=\"15\" height=\"15\" alt=\"\">\r\n            The Blocknet\r\n          </a>\r\n        </div>\r\n        <div class=\"col-md\">\r\n          Community website made by: \r\n          <a href=\"https://github.com/luusluus\">\r\n            Lucien\r\n          </a>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  \r\n </footer> -->\r\n\r\n \r\n<footer class=\"footer font-small blue pt-4\">\r\n  <div class=\"container text-center text-md-left\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 mt-md-0 mt-3\">\r\n        <div class=\"d-flex align-items-center mb-4\">\r\n          <img src=\"../../assets/blocknet-icon.png\" width=\"30\" alt=\"\">\r\n          <span class=\"h4 mb-0 ml-3\">Powered by The Blocknet</span>\r\n        </div>\r\n        <p>\r\n          XRouter Service Explorer is a look-up directory platform for SPV Wallets and XCloud services provided by Blocknet's Service Nodes.\r\n        </p>\r\n\r\n      </div>\r\n    \r\n      <div class=\"col-md-3 mb-md-0 mb-3\">\r\n\r\n        \r\n        <h5>Protocol</h5>\r\n        <hr>\r\n\r\n        <ul class=\"list-unstyled\">\r\n          <li>\r\n            <a href=\"https://blocknet.co\">The Blocknet</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://api.blocknet.co/\">Developer APIs</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://docs.blocknet.co\">Knowledge Base</a>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"col-md-3 mb-md-0 mb-3\">\r\n        <h5>Community</h5>\r\n        <hr>\r\n\r\n        <ul class=\"list-unstyled\">\r\n          <li>\r\n            <a href=\"https://blockdx.co\">Blockdx.co</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"https://block-node.info/index.php\">Block-node.info</a>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <hr>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4 mt-md-0 mt-3\">\r\n        <div class=\"py-3\">\r\n          Made by Community member \r\n          <a href=\"https://github.com/luusluus\">Lucien</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 mt-md-0 mt-3\">\r\n        <div class=\"text-center py-3\">\r\n          Hosted by  \r\n          <img src=\"../../assets/cclogo.png\" width=\"25\" alt=\"\">\r\n          <span class=\"mb-0 ml-1\">\r\n            <a href=\"https://cloudchainsinc.com/\">CloudChains, inc.</a>\r\n            \r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-4 mt-md-0 mt-3\">\r\n        <div class=\"text-right py-3\">\r\n          Donations BLOCK: BWt8duaxZLohTEQTWQYULW5Dt2kPbRxuP5\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n    \r\n\r\n  </div>\r\n\r\n  \r\n\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>XRouter Service Explorer</h1>\r\n<div class=\"container\">\r\n  <div class=\"card-deck mb-3 text-center\">\r\n      <div class=\"card mb-4 shadow-sm\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"my-0 font-weight-normal\">Service Nodes</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          {{ networkServiceCount }}\r\n        </div>\r\n      </div>\r\n      <div class=\"card mb-4 shadow-sm\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"my-0 font-weight-normal\">XCloud Services</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            {{ xCloudServices?.totalItems }}\r\n        </div>\r\n      </div>\r\n      <div class=\"card mb-4 shadow-sm\">\r\n        <div class=\"card-header\">\r\n          <h4 class=\"my-0 font-weight-normal\">SPV Wallets</h4>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          {{ spvWallets?.totalItems }}\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/xrouter.service */ "./src/app/shared/services/xrouter.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, xrouterService) {
        this.router = router;
        this.xrouterService = xrouterService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sources = [
            this.xrouterService.GetServiceNodeCount(),
            this.xrouterService.GetNetworkServices(),
            this.xrouterService.GetNetworkSpvWallets()
        ];
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(sources).subscribe(function (data) {
            _this.networkServiceCount = data[0];
            _this.xCloudServices = data[1];
            _this.spvWallets = data[2];
        }, function (err) {
            if (err.status == 404)
                _this.router.navigate(['']);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_1__["XrouterApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/interceptors.ts":
/*!*********************************!*\
  !*** ./src/app/interceptors.ts ***!
  \*********************************/
/*! exports provided: interceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interceptorProviders", function() { return interceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_error_handling_http_error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/error-handling/http-error.interceptor */ "./src/app/shared/error-handling/http-error.interceptor.ts");
/* harmony import */ var _shared_http_responsetime_logging_http_responsetime_logging_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/http-responsetime-logging/http-responsetime-logging.interceptor */ "./src/app/shared/http-responsetime-logging/http-responsetime-logging.interceptor.ts");



var interceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _shared_http_responsetime_logging_http_responsetime_logging_interceptor__WEBPACK_IMPORTED_MODULE_2__["HttpRequestTimeInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _shared_error_handling_http_error_interceptor__WEBPACK_IMPORTED_MODULE_1__["HttpErrorInterceptor"], multi: true },
];


/***/ }),

/***/ "./src/app/my-service-nodes/my-service-nodes.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/my-service-nodes/my-service-nodes.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td{\r\n    max-width: 0;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n::ng-deep .wide-modal .modal-dialog { \r\n    max-width: 60%;\r\n    width: 60%;\r\n}"

/***/ }),

/***/ "./src/app/my-service-nodes/my-service-nodes.component.html":
/*!******************************************************************!*\
  !*** ./src/app/my-service-nodes/my-service-nodes.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading else loaded\">\n        Fetching data...\n</div>\n            \n<ng-template #loaded>\n        <h2>My Service Nodes</h2>\n        <div class=\"table-responsive\">\n                <table class=\"table\">\n                        <thead>\n                                <tr>\n                                <th *ngFor=\"let c of columns\"> {{ c.title }} </th>\n                                </tr> \n                        </thead>\n                        <tbody>\n                                <tr *ngFor=\"let sn of myServiceNodes; let i = index\">\n                                        <td>{{sn.name}}</td>\n                                        <td>{{sn.address}}</td>\n                                        <td>\n                                                <div *ngIf=\"sn.ownership else verify\">Verified</div>\n                                                <!--TODO: Put in own component-->\n                                                <ng-template #verify>\n                                                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"open(i)\">Verify Ownership</button>\n                                                </ng-template>\n                                        </td>\n                                        <td>\n                                                <div *ngIf=\"sn.active else inActive\">Active</div>\n                                                <ng-template #inActive>Inactive</ng-template>\n                                        </td>\n                                        <td>\n                                                <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onRemove(i)\">Remove</button> \n                                         </td>\n                                </tr>\n                        </tbody>\n                </table>\n        </div>\n\n        <h4>Add New Servicenode</h4>\n        <form (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\n                <div class=\"form-group\">\n                        <label for=\"snName\">Servicenode Name</label>\n                        <input type=\"text\" class=\"form-control\" id=\"snName\" [(ngModel)]=\"model.name\" name=\"snName\" #snName=\"ngModel\" required>\n                        \n                </div>\n                <div class=\"form-group\">\n                        <div *ngIf=\"snName.invalid && (snName.dirty || snName.touched)\"\n                                class=\"alert alert-danger\">\n                                <div *ngIf=\"snName.errors.required\">\n                                        Name is required.\n                                </div>\n                        </div>\n                </div>\n                <div class=\"form-group\">\n                        <label for=\"snAddress\">Servicenode Public Address</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.address\" name=\"snAddress\" #snAddress=\"ngModel\" servicenodeAddressValidator [(serviceNodes)]=\"allServiceNodes\">\n                </div>\n                <div class=\"form-group\">\n                        <div *ngIf=\"snAddress.invalid && (snAddress.dirty || snAddress.touched)\"\n                                class=\"alert alert-danger\">\n                                <div *ngIf=\"snAddress.errors.servicenodeAddressValidator\">\n                                        This address isn't an active service node\n                                </div>\n                        </div>\n                </div>\n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"f.form.pristine || f.form.invalid\">Add Servicenode</button>\n        </form> \n        \n        \n</ng-template>\n"

/***/ }),

/***/ "./src/app/my-service-nodes/my-service-nodes.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/my-service-nodes/my-service-nodes.component.ts ***!
  \****************************************************************/
/*! exports provided: ValidateServicenodeModalContent, MyServiceNodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateServicenodeModalContent", function() { return ValidateServicenodeModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServiceNodesComponent", function() { return MyServiceNodesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/xrouter.service */ "./src/app/shared/services/xrouter.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_myservicenodes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/myservicenodes.service */ "./src/app/shared/services/myservicenodes.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_models_myservicenode_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/models/myservicenode.model */ "./src/app/shared/models/myservicenode.model.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ValidateServicenodeModalContent = /** @class */ (function () {
    function ValidateServicenodeModalContent(activeModal, myServiceNodesService, router, _formBuilder) {
        this.activeModal = activeModal;
        this.myServiceNodesService = myServiceNodesService;
        this.router = router;
        this._formBuilder = _formBuilder;
        this.isLinear = false;
        this.toBeSignedMessage = "service-explorer-verification";
    }
    ValidateServicenodeModalContent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    ValidateServicenodeModalContent.prototype.onVerifySubmit = function (index) {
        // let address = this.servicenode.address;
        // this.myServiceNodesService.verifyMessage(address, form.value, this.toBeSignedMessage).subscribe(res => {
        //   if(res){
        //     console.log("Service node verified!");
        //     this.activeModal.close('Verify Message Click');
        //   } else{
        //     console.log("Service node not verified!");
        //   }
        // },
        // err =>{
        //   this.router.navigate(['/error'], {queryParams: err});
        // });
    };
    ValidateServicenodeModalContent.prototype.next = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_models_myservicenode_model__WEBPACK_IMPORTED_MODULE_7__["MyServiceNode"])
    ], ValidateServicenodeModalContent.prototype, "servicenode", void 0);
    ValidateServicenodeModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'validate-servicenode-modal-content',
            template: "\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Verify Your Servicenode</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n      <p>Follow the steps below to sign a message which proves your ownership of this servicenode.</p>\n      <p>This is a trustless process and does not give any keys to service-explorer</p>\n      <p>Proving ownership this way grants a Verified badge next to your name</p>\n      <hr class=\"my-4\">\n      <p>Learn more about message signing here</p>\n      <a class=\"btn btn-primary\" href=\"https://coinguides.org/sign-verify-bitcoin-address/\" role=\"button\">Learn more</a>\n    {{ toBeSignedMessage + '-' + servicenode.id }}\n    <hr class=\"my-4\">\n    \n    <mat-horizontal-stepper [linear]=\"isLinear\"> \n        <mat-step [stepControl]=\"firstFormGroup\">\n          <form [formGroup]=\"firstFormGroup\">  \n            <ng-template matStepLabel>Step 1</ng-template>  \n            <button mat-button mat-raised-button color=\"primary\" matStepperNext>Solve</button>        \n          </form>\n        </mat-step>\n\n        <mat-step [stepControl]=\"secondFormGroup\">\n          <form [formGroup]=\"secondFormGroup\">\n            <ng-template matStepLabel>Step 2</ng-template>\n            <mat-form-field>\n                <input matInput placeholder=\"Any input\" formControlName=\"secondCtrl\" required>\n            </mat-form-field>\n            <button mat-button mat-raised-button color=\"primary\" matStepperNext>Next</button>          \n            <button mat-button mat-raised-button color=\"\" matStepperPrevious>Back</button>        \n          </form>\n        </mat-step>\n\n        <mat-step>\n          <ng-template matStepLabel icon>Done</ng-template>\n          You are now done.      \n          <button mat-button mat-raised-button color=\"primary\" >Done</button>      \n        </mat-step>\n    </mat-horizontal-stepper>\n\n   \n  </div>\n  <div class=\"modal-footer\">\n  \n  </div>\n  "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbActiveModal"],
            _shared_services_myservicenodes_service__WEBPACK_IMPORTED_MODULE_5__["MyServiceNodesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ValidateServicenodeModalContent);
    return ValidateServicenodeModalContent;
}());

var MyServiceNodesComponent = /** @class */ (function () {
    function MyServiceNodesComponent(router, route, myServiceNodesService, xrouterApiService, modalService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.myServiceNodesService = myServiceNodesService;
        this.xrouterApiService = xrouterApiService;
        this.modalService = modalService;
        this.model = new _shared_models_myservicenode_model__WEBPACK_IMPORTED_MODULE_7__["MyServiceNode"]();
        this.columns = [
            { title: 'Servicenode Name' },
            { title: 'Address' },
            { title: 'Ownership' },
            { title: 'Active' },
            { title: 'Remove' },
        ];
        route.params.subscribe(function (p) {
            _this.applicationUserId = p['id'];
            if (Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(_this.applicationUserId)) {
                router.navigate(['']);
                return;
            }
        });
        this.model.applicationUserId = this.applicationUserId;
    }
    MyServiceNodesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var observableMyServiceNodes = this.myServiceNodesService.GetServiceNodes(this.applicationUserId);
        var observableAllServiceNodes = this.xrouterApiService.GetServiceNodeList({});
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])([observableMyServiceNodes, observableAllServiceNodes]).subscribe(function (_a) {
            var mySn = _a[0], allSn = _a[1];
            _this.allServiceNodes = allSn;
            _this.myServiceNodes = mySn;
        }, function (err) {
            if (err.status == 404)
                _this.router.navigate(['']);
        });
    };
    MyServiceNodesComponent.prototype.onSubmit = function () {
        var _this = this;
        this.myServiceNodesService.create(this.model)
            .subscribe(function (serviceNode) {
            _this.myServiceNodes.push(serviceNode);
        }, function (err) {
            _this.router.navigate(['/error'], { queryParams: err });
        });
    };
    MyServiceNodesComponent.prototype.onRemove = function (index) {
        var _this = this;
        var id = this.myServiceNodes[index].id;
        if (confirm("Are you sure?")) {
            this.myServiceNodesService.delete(id).subscribe(function (snId) {
                _this.myServiceNodes.splice(index, 1);
            }, function (err) {
                _this.router.navigate(['/error'], { queryParams: err });
            });
        }
    };
    MyServiceNodesComponent.prototype.open = function (index) {
        var modalReference = this.modalService.open(ValidateServicenodeModalContent, { size: 'lg', windowClass: 'wide-modal' });
        modalReference.componentInstance.servicenode = this.myServiceNodes[index];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], MyServiceNodesComponent.prototype, "serviceNodeForm", void 0);
    MyServiceNodesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-service-nodes',
            template: __webpack_require__(/*! ./my-service-nodes.component.html */ "./src/app/my-service-nodes/my-service-nodes.component.html"),
            styles: [__webpack_require__(/*! ./my-service-nodes.component.css */ "./src/app/my-service-nodes/my-service-nodes.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services_myservicenodes_service__WEBPACK_IMPORTED_MODULE_5__["MyServiceNodesService"],
            _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_2__["XrouterApiService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]])
    ], MyServiceNodesComponent);
    return MyServiceNodesComponent;
}());



/***/ }),

/***/ "./src/app/my-service-nodes/my-service-nodes.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/my-service-nodes/my-service-nodes.module.ts ***!
  \*************************************************************/
/*! exports provided: NgbdModalComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponentModule", function() { return NgbdModalComponentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _my_service_nodes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-service-nodes.component */ "./src/app/my-service-nodes/my-service-nodes.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_directives_snode_address_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/directives/snode-address-validator */ "./src/app/shared/directives/snode-address-validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NgbdModalComponentModule = /** @class */ (function () {
    function NgbdModalComponentModule() {
    }
    NgbdModalComponentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]],
            declarations: [_my_service_nodes_component__WEBPACK_IMPORTED_MODULE_3__["MyServiceNodesComponent"], _my_service_nodes_component__WEBPACK_IMPORTED_MODULE_3__["ValidateServicenodeModalContent"], _shared_directives_snode_address_validator__WEBPACK_IMPORTED_MODULE_5__["ServicenodeAddressValidatorDirective"]],
            exports: [_my_service_nodes_component__WEBPACK_IMPORTED_MODULE_3__["MyServiceNodesComponent"]],
            bootstrap: [_my_service_nodes_component__WEBPACK_IMPORTED_MODULE_3__["MyServiceNodesComponent"]],
            entryComponents: [_my_service_nodes_component__WEBPACK_IMPORTED_MODULE_3__["ValidateServicenodeModalContent"]]
        })
    ], NgbdModalComponentModule);
    return NgbdModalComponentModule;
}());



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.navbar-brand {\r\n    white-space: normal;\r\n    text-align: center;\r\n    word-break: break-all;\r\n  }\r\n  \r\n  html {\r\n    font-size: 14px;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    html {\r\n      font-size: 16px;\r\n    }\r\n  }\r\n  \r\n  .box-shadow {\r\n    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n  }\r\n  \r\n  .ng-autocomplete {\r\n    width: 400px;\r\n}"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n        <nav\r\n          class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n        >\r\n          <div class=\"container\">\r\n            <a class=\"navbar-brand\" [routerLink]=\"['/']\">\r\n              <img src=\"../../assets/xrouter.png\" width=\"135\" height=\"30\" alt=\"\">\r\n            </a>\r\n            <button\r\n              class=\"navbar-toggler\"\r\n              type=\"button\"\r\n              data-toggle=\"collapse\"\r\n              data-target=\".navbar-collapse\"\r\n              aria-label=\"Toggle navigation\"\r\n              [attr.aria-expanded]=\"isExpanded\"\r\n              (click)=\"toggle()\"\r\n            >\r\n              <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div\r\n              class=\"navbar-collapse collapse d-sm-inline-flex\"\r\n              [ngClass]=\"{ show: isExpanded }\"\r\n            >\r\n              <ul class=\"navbar-nav flex-grow mr-auto\">\r\n                <li\r\n                  class=\"nav-item\"\r\n                  [routerLinkActive]=\"['link-active']\"\r\n                  [routerLinkActiveOptions]=\"{ exact: true }\"\r\n                >\r\n                <a class=\"nav-link text-dark\" [routerLink]=\"['/xrouter-snodes']\"\r\n                >Nodes</a>\r\n                </li>\r\n                <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                  <a class=\"nav-link text-dark\" [routerLink]=\"['/xcloud-services']\"\r\n                    >Services</a\r\n                  >\r\n                </li>\r\n                <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n                  <a class=\"nav-link text-dark\" [routerLink]=\"['/spv-wallets']\"\r\n                    >SPV</a\r\n                  >\r\n                </li>\r\n              </ul>\r\n              <ul class=\"navbar-nav flex-grow ml-auto nav-flex-icons\">\r\n                <li class=\"nav-item\">\r\n                  <div class=\"ng-autocomplete\">\r\n                    <search-form></search-form>\r\n                  </div>\r\n                </li>\r\n                <div *ngIf=\"!isUserAuthenticated; else loggedIn\">\r\n                  <li class=\"nav-item\">\r\n                      <a class=\"btn ml-4\" style=\"background-color: #7289DA; color:white;\" href=\"#\" (click)=\"login()\">\r\n                        <img src=\"../../assets/discord-logo-white.png\" width=\"30\" alt=\"\">\r\n                        <span class=\"mb-0 ml-1\">Log in with Discord</span>\r\n                      </a>\r\n                  </li>\r\n                </div> \r\n                <ng-template #loggedIn>\r\n                <li class=\"nav-item avatar dropdown\">\r\n                  <a class=\"nav-link dropdown-toggle\" id=\"navbarDropdownMenuLink-5\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n                    aria-expanded=\"false\">\r\n                    <img src=\"{{ avatarUrl }}\" class=\"rounded-circle z-depth-0\" width=\"30\" alt=\"avatar image\">\r\n                  </a>\r\n                  <div class=\"dropdown-menu dropdown-menu-right dropdown-secondary\" aria-labelledby=\"navbarDropdownMenuLink-5\">\r\n                    <h6 class=\"dropdown-header\">Logged in as {{ userName }}</h6>\r\n                    <a class=\"dropdown-item\" [routerLink]=\"'/my-service-nodes/' + id\">My Service Nodes</a>\r\n                    <a class=\"dropdown-item\" href=\"#\" (click)=\"logout()\">Logout</a>\r\n                  </div>\r\n                </li>\r\n                </ng-template>\r\n              </ul>\r\n             \r\n                \r\n            </div>\r\n          </div>\r\n        </nav>\r\n      </header>\r\n      "

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/account.service */ "./src/app/shared/services/account.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(httpClient, accountService) {
        this.httpClient = httpClient;
        this.accountService = accountService;
        this.isExpanded = false;
        this.isUserAuthenticated = false;
    }
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.accountService.isUserAuthenticated.subscribe(function (isAuthenticated) {
            _this.isUserAuthenticated = isAuthenticated;
            if (_this.isUserAuthenticated) {
                //todo: forkjoin
                _this.httpClient.get("/api/account/name", { responseType: 'text', withCredentials: true }).subscribe(function (theName) {
                    _this.userName = theName;
                });
                _this.httpClient.get("/api/account/AvatarUrl", { responseType: 'text', withCredentials: true }).subscribe(function (avatarUrl) {
                    _this.avatarUrl = avatarUrl;
                });
                _this.httpClient.get("/api/account/id", { responseType: 'text', withCredentials: true }).subscribe(function (id) {
                    _this.id = id;
                });
            }
        });
    };
    NavMenuComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NavMenuComponent.prototype.logout = function () {
        this.accountService.logout();
    };
    NavMenuComponent.prototype.login = function () {
        this.accountService.login();
    };
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/rpc-console/rpc-console.component.css":
/*!*******************************************************!*\
  !*** ./src/app/rpc-console/rpc-console.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sandbox,\r\n#sandbox .output,\r\n#sandbox .output span,\r\n#sandbox textarea,\r\n#sandbox textarea:focus {\r\n\tfont-size:14px;\r\n\tline-height:1.3;\r\n\tfont-weight: normal;\r\n\tfont-family:\"Consolas\", \"Andale Mono\", \"Courier New\", \"Courier\", monospace;\r\n\tborder:0 none;\r\n\toutline:0 none;\r\n\tbox-shadow:none;\r\n}\r\n#sandbox {\r\n\tbackground:#333;\r\n\tcolor: #ccc;\r\n\tpadding:20px 20px 15px;\r\n\tborder-radius: 10px;\r\n\tmargin:30px auto;\r\n}\r\n#sandbox .output {\r\n\tdisplay:block;\r\n\twhite-space:pre;\r\n\twidth:100%;\r\n\theight:650px;\r\n\toverflow-y:auto;\r\n\tposition:relative;\r\n\tpadding:0;\r\n\tmargin:0 0 10px;\r\n\tborder:0 none;\r\n}\r\n#sandbox .output span           { color:#f7f7f7; }\r\n#sandbox .output span.command   { color:#ccc; }\r\n#sandbox .output span.fix    { color:#777; }\r\n#sandbox .output span.undefined { color:#777; }\r\n#sandbox .output span.string    { color:#99f; }\r\n#sandbox .output span.number    { color:#7f7; }\r\n#sandbox .output span.error     { color:#f77; }\r\n#sandbox .input {\r\n\tpadding:0 0 0 15px;\r\n\tposition:relative;\r\n}\r\n#sandbox .input:before {\r\n\tcontent:\">\";\r\n\tposition:absolute;\r\n\ttop: 1px;\r\n\tleft: 0;\r\n\tcolor:#ddd\r\n}\r\n#sandbox textarea {\r\n\tcolor:#f7f7f7;\r\n\tbackground:#333;\r\n\tborder:0 none;\r\n\toutline:0 none;\r\n\tpadding:0;\r\n\tmargin:0;\r\n\tresize: none;\r\n\twidth:100%;\r\n\toverflow:hidden;\r\n}\r\n#sandbox textarea:focus {\r\n\toutline:0 none;\r\n}\r\n#sandbox .output::-webkit-scrollbar,\r\n#sandbox .output::-webkit-scrollbar-button,\r\n#sandbox .output::-webkit-scrollbar-track,\r\n#sandbox .output::-webkit-scrollbar-track-piece,\r\n#sandbox .output::-webkit-scrollbar-thumb,\r\n#sandbox .output::-webkit-scrollbar-corner,\r\n#sandbox .output::-webkit-resizer {\r\n\tbackground: transparent;\r\n}\r\n#sandbox .output::-webkit-scrollbar {\r\n\twidth:  7px;\r\n\theight: 7px;\r\n\tborder-radius: 4px;\r\n}\r\n#sandbox .output::-webkit-scrollbar-track-piece {\r\n\tborder-radius: 5px;\r\n}\r\n#sandbox .output::-webkit-scrollbar-thumb {\r\n\tbackground: #4f4f4f;\r\n\t        border-radius: 5px;\r\n}\r\n#sandbox .output::-webkit-scrollbar-button {\r\n\twidth:0;\r\n\theight:0;\r\n}"

/***/ }),

/***/ "./src/app/rpc-console/rpc-console.component.html":
/*!********************************************************!*\
  !*** ./src/app/rpc-console/rpc-console.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Rpc Console</h1>\n<div id=\"sandbox\">\n  <div class=\"output\">\n\n  </div>\n  <div class=\"input\">\n      <textarea rows=\"1\" placeholder=\"Enter rpc command\"></textarea>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/rpc-console/rpc-console.component.ts":
/*!******************************************************!*\
  !*** ./src/app/rpc-console/rpc-console.component.ts ***!
  \******************************************************/
/*! exports provided: RpcConsoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RpcConsoleComponent", function() { return RpcConsoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RpcConsoleComponent = /** @class */ (function () {
    function RpcConsoleComponent() {
    }
    RpcConsoleComponent.prototype.ngOnInit = function () {
    };
    RpcConsoleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rpc-console',
            template: __webpack_require__(/*! ./rpc-console.component.html */ "./src/app/rpc-console/rpc-console.component.html"),
            styles: [__webpack_require__(/*! ./rpc-console.component.css */ "./src/app/rpc-console/rpc-console.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RpcConsoleComponent);
    return RpcConsoleComponent;
}());



/***/ }),

/***/ "./src/app/search-form/search-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-form/search-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-autocomplete {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/search-form/search-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-form/search-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <ng-autocomplete\n      [data]=\"services?.items\"\n      [searchKeyword]=\"keyword\"\n      debounceTime = \"400\"\n      placeHolder=\"Search services and SPV wallets...\"\n      (selected)='selectEvent($event)'\n      (inputChanged)='onChangeSearch($event)'\n      (inputFocused)='onFocused($event)'\n      historyIdentifier=\"services?.items\"\n      [itemTemplate]=\"itemTemplate\"\n      [notFoundTemplate]=\"notFoundTemplate\">\n    </ng-autocomplete>\n  \n    <ng-template #itemTemplate let-item>\n      <a [innerHTML]=\"item.name\"></a>\n    </ng-template>\n  \n    <ng-template #notFoundTemplate let-notFound>\n      <div [innerHTML]=\"notFound\"></div>\n    </ng-template>"

/***/ }),

/***/ "./src/app/search-form/search-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-form/search-form.component.ts ***!
  \******************************************************/
/*! exports provided: SearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormComponent", function() { return SearchFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_navigator_service___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/navigator.service. */ "./src/app/shared/services/navigator.service..ts");
/* harmony import */ var _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/xrouter.service */ "./src/app/shared/services/xrouter.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _shared_services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/search.service */ "./src/app/shared/services/search.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// const NODEPUBKEY_REGEX = '^[0][a-zA-Z0-9]{65}$'; 
// const ADDRESS_REGEX = '^[B][a-zA-Z0-9]{33}$';
// const TXHASH_REGEX = '[a-zA-Z0-9]{64}$';
var SearchFormComponent = /** @class */ (function (_super) {
    __extends(SearchFormComponent, _super);
    function SearchFormComponent(http, xrouterService, navigatorService, searchService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.xrouterService = xrouterService;
        _this.navigatorService = navigatorService;
        _this.searchService = searchService;
        _this.apiEndpoint = 'blocknet/xrouter';
        _this.baseEndpoint = 'api/';
        _this.keyword = 'name';
        return _this;
    }
    SearchFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.xrouterService.getAllServices().subscribe(function (res) {
            _this.services = res;
        });
    };
    SearchFormComponent.prototype.selectEvent = function (item) {
        var service = item.name;
        if (service.includes("xrs::")) {
            this.navigatorService.xCloudServiceDetails(service);
        }
        else {
            this.navigatorService.spvWalletDetails(service);
        }
        // do something with selected item
    };
    SearchFormComponent.prototype.onChangeSearch = function (val) {
        var _this = this;
        // this.http.get(this.baseEndpoint + this.apiEndpoint + "/?searchString=" + val).subscribe(
        this.searchService.search(val).subscribe(function (data) {
            _this.services = data;
        });
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    };
    SearchFormComponent.prototype.onFocused = function (e) {
        // do something when input is focused
    };
    SearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/search-form/search-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_2__["XrouterApiService"],
            _shared_services_navigator_service___WEBPACK_IMPORTED_MODULE_1__["NavigatorService"],
            _shared_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]])
    ], SearchFormComponent);
    return SearchFormComponent;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"]));



/***/ }),

/***/ "./src/app/service-list/service-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/service-list/service-list.component.ts ***!
  \********************************************************/
/*! exports provided: ServiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceListComponent", function() { return ServiceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceListComponent = /** @class */ (function () {
    function ServiceListComponent() {
        this.PAGE_SIZE = 3;
        this.services = {};
        this.queryInit = {};
        this.queryChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.query = {
            pageSize: this.PAGE_SIZE
        };
        this.columns = [
            { title: 'Name', key: 'name' },
            { title: 'Node Count', key: 'nodeCount', isSortable: true },
            {}
        ];
    }
    ServiceListComponent.prototype.ngOnInit = function () {
        this.initializeQuery();
    };
    ServiceListComponent.prototype.ngOnChanges = function () {
        this.initializeQuery();
    };
    ServiceListComponent.prototype.onFilterChange = function () {
        this.query.page = 1;
        this.queryChanged.emit(this.query);
    };
    ServiceListComponent.prototype.initializeQuery = function () {
    };
    ServiceListComponent.prototype.resetFilter = function () {
        this.query = {
            page: 1,
            pageSize: this.PAGE_SIZE,
        };
        this.queryChanged.emit(this.query);
    };
    ServiceListComponent.prototype.sortBy = function (columnName) {
        if (this.query.sortBy === columnName) {
            this.query.isSortAscending = !this.query.isSortAscending;
        }
        else {
            this.query.sortBy = columnName;
            this.query.isSortAscending = true;
        }
        this.queryChanged.emit(this.query);
    };
    ServiceListComponent.prototype.onPageChange = function (page) {
        this.query.page = page;
        this.queryChanged.emit(this.query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('services'),
        __metadata("design:type", Object)
    ], ServiceListComponent.prototype, "services", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('query-init'),
        __metadata("design:type", Object)
    ], ServiceListComponent.prototype, "queryInit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('query-changed'),
        __metadata("design:type", Object)
    ], ServiceListComponent.prototype, "queryChanged", void 0);
    ServiceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'service-list',
            template: "\n        <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th *ngFor=\"let c of columns\">\n                    <div *ngIf=\"c.isSortable\" (click)=\"sortBy(c.key)\">\n                        {{ c.title }}\n                        <i *ngIf=\"query.sortBy === c.key\" \n                          class=\"fa\"\n                          [class.fa-sort-asc]=\"query.isSortAscending\"\n                          [class.fa-sort-desc]=\"!query.isSortAscending\"\n                        ></i>\n                      </div>\n                      <div *ngIf=\"!c.isSortable\">\n                        {{ c.title }}\n                      </div>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let c of services.items\">\n                <td><a [routerLink]=\"[c.name]\">{{c.name}}</a></td>\n                <td>{{c.nodeCount}}</td>\n              </tr>\n            </tbody>\n          </table>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], ServiceListComponent);
    return ServiceListComponent;
}());



/***/ }),

/***/ "./src/app/service-node-list/service-node-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/service-node-list/service-node-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td{\r\n    max-width: 0;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}"

/***/ }),

/***/ "./src/app/service-node-list/service-node-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/service-node-list/service-node-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading else loaded\">\n        Fetching data...\n</div>\n            \n<ng-template #loaded>\n        <h2>Service Node List</h2>\n                        <div class=\"well\">\n                        <div class=\"form-group\">\n                        <h3>Filter</h3>\n                        <label for=\"spvWallet\">Spv Wallet</label>\n                        <select id=\"spvWallet\" class=\"form-control\" [(ngModel)]=\"query.spvWallet\" (change)=\"onFilterChange()\">\n                                <option value=\"\"></option>\n                                <option *ngFor=\"let w of spvWallets?.items\" value=\"{{ w.name }}\">{{ w.name }}</option>\n                        </select>  \n                        <label for=\"xCloudService\">XCloud Service</label>\n                        <select id=\"xCloudService\" class=\"form-control\" [(ngModel)]=\"query.xCloudService\" (change)=\"onFilterChange()\">\n                                <option value=\"\"></option>\n                                <option *ngFor=\"let xc of xCloudServices?.items\" value=\"{{ xc.name }}\">{{ xc.name }}</option>\n                        </select>  \n                        </div>\n                        <br>\n                        <button class=\"btn btn-outline-primary\" (click)=\"resetFilter()\">Reset</button>\n                </div>\n        Count: {{ serviceNodes?.totalItems}}\n        <ngb-pagination [collectionSize]=\"serviceNodes?.totalItems\" [maxSize]=\"5\" [pageSize]=\"query.pageSize\" [(page)]=\"query.page\" (pageChange)=\"onPageChange($event)\"></ngb-pagination>\n        <div class=\"table-responsive\">\n                <table class=\"table\">\n                        <thead>\n                                <tr>\n                                <th *ngFor=\"let c of columns\"> {{ c.title }} </th>\n                                </tr> \n                        </thead>\n                        <tbody>\n                                <tr *ngFor=\"let sn of serviceNodes?.items; let i = index\">\n                                        <td><a [routerLink]=\"[sn.nodePubKey, sn.spvWallets[0]]\">{{sn.nodePubKey}}</a></td>\n                                        <td>{{sn.addr}}</td>\n                                        <td>\n                                                <div *ngIf=\"sn.spvWallets?.length > 0\">\n                                                        <div class=\"form-group\">\n                                                                <label for=\"spvWallets\"></label>\n                                                                <select id=\"spvWallets\" class=\"form-control\">\n                                                                        <option *ngFor=\"let w of sn.spvWallets\" [value]=\"w\">{{ w }} </option>\n                                                                </select>   \n                                                        </div> \n                                                </div>\n                                                \n                                        </td>\n                                        <td>\n                                                <div *ngIf = \"sn.xCloudServices.length > 0\">\n                                                        <div class=\"form-group\">\n                                                                <label for=\"xcloudServices\"></label>\n                                                                <select id=\"xcloudServices\" class=\"form-control\">\n                                                                        <option *ngFor=\"let s of sn.xCloudServices\" [value]=\"s\">{{ s }} </option>\n                                                                </select>   \n                                                        </div> \n                                                </div>\n                                                \n                                        </td>\n                                </tr>\n                        </tbody>\n                </table>\n        </div>\n        \n</ng-template>\n"

/***/ }),

/***/ "./src/app/service-node-list/service-node-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/service-node-list/service-node-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ServiceNodeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceNodeListComponent", function() { return ServiceNodeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/xrouter.service */ "./src/app/shared/services/xrouter.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceNodeListComponent = /** @class */ (function () {
    function ServiceNodeListComponent(router, xrouterService) {
        this.router = router;
        this.xrouterService = xrouterService;
        this.PAGE_SIZE = 6;
        this.queryChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.query = {
            page: 1,
            pageSize: this.PAGE_SIZE,
            atleastOneSpvWallet: true
        };
        this.columns = [
            { title: 'Node Id', key: 'nodeId' },
            { title: 'Address', key: 'addr' },
            { title: 'Spv Wallets', key: 'spvWallets' },
            { title: 'XCloud Services', key: 'xCloudServices' },
        ];
    }
    ServiceNodeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sources = [
            this.xrouterService.GetNetworkServices(),
            this.xrouterService.GetNetworkSpvWallets(),
        ];
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(sources).subscribe(function (data) {
            _this.xCloudServices = data[0];
            _this.spvWallets = data[1];
        }, function (err) {
            if (err.status == 404)
                _this.router.navigate(['']);
        });
        this.populateServiceNodes();
    };
    ServiceNodeListComponent.prototype.populateServiceNodes = function () {
        var _this = this;
        this.xrouterService.GetServiceNodeList(this.query)
            .subscribe(function (result) {
            _this.serviceNodes = result;
            _this.loading = false;
        });
    };
    ServiceNodeListComponent.prototype.ngOnChanges = function () {
        this.initializeQuery();
    };
    ServiceNodeListComponent.prototype.onFilterChange = function () {
        this.query.page = 1;
        this.populateServiceNodes();
    };
    ServiceNodeListComponent.prototype.initializeQuery = function () { };
    ServiceNodeListComponent.prototype.resetFilter = function () {
        this.query = {
            page: 1,
            pageSize: this.PAGE_SIZE,
        };
        this.populateServiceNodes();
    };
    ServiceNodeListComponent.prototype.onPageChange = function (page) {
        this.query.page = page;
        this.populateServiceNodes();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('query-changed'),
        __metadata("design:type", Object)
    ], ServiceNodeListComponent.prototype, "queryChanged", void 0);
    ServiceNodeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-service-node-list',
            template: __webpack_require__(/*! ./service-node-list.component.html */ "./src/app/service-node-list/service-node-list.component.html"),
            styles: [__webpack_require__(/*! ./service-node-list.component.css */ "./src/app/service-node-list/service-node-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_2__["XrouterApiService"]])
    ], ServiceNodeListComponent);
    return ServiceNodeListComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/snode-address-validator.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/snode-address-validator.ts ***!
  \**************************************************************/
/*! exports provided: ServicenodeAddressValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicenodeAddressValidatorDirective", function() { return ServicenodeAddressValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicenodeAddressValidatorDirective = /** @class */ (function () {
    function ServicenodeAddressValidatorDirective() {
        this.serviceNodes = [];
    }
    ServicenodeAddressValidatorDirective_1 = ServicenodeAddressValidatorDirective;
    ServicenodeAddressValidatorDirective.prototype.validate = function (control) {
        /* validation rules */
        var address = control.value;
        /* check validation rules */
        if (this.serviceNodes !== undefined) {
            var addressToCheck = this.serviceNodes.items.find(function (sn) { return sn.addr === address; });
            if (addressToCheck !== undefined) {
                return null;
            }
            else {
                return { servicenodeAddressValidator: true };
            }
        }
        return { servicenodeAddressValidator: true };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("serviceNodes"),
        __metadata("design:type", Object)
    ], ServicenodeAddressValidatorDirective.prototype, "serviceNodes", void 0);
    ServicenodeAddressValidatorDirective = ServicenodeAddressValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[servicenodeAddressValidator][ngModel]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: ServicenodeAddressValidatorDirective_1, multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], ServicenodeAddressValidatorDirective);
    return ServicenodeAddressValidatorDirective;
    var ServicenodeAddressValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/shared/error-handling/http-error.interceptor.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/error-handling/http-error.interceptor.ts ***!
  \*****************************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");


var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor() {
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            var errorMessage = '';
            console.log(error);
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = "Error: " + error.error.message;
            }
            else {
                // server-side error
                errorMessage = error.error;
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
        }));
    };
    return HttpErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/http-responsetime-logging/http-responsetime-logging.interceptor.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/http-responsetime-logging/http-responsetime-logging.interceptor.ts ***!
  \*******************************************************************************************/
/*! exports provided: HttpRequestTimeInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequestTimeInterceptor", function() { return HttpRequestTimeInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_responsetime_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/responsetime.service */ "./src/app/shared/services/responsetime.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpRequestTimeInterceptor = /** @class */ (function () {
    function HttpRequestTimeInterceptor(responseTimeService) {
        this.responseTimeService = responseTimeService;
    }
    HttpRequestTimeInterceptor.prototype.intercept = function (req, next) {
        var startTime = (new Date()).getTime();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                var endTime = (new Date()).getTime();
                event = event.clone({ headers: event.headers.set('endTime', endTime.toString()) });
                event = event.clone({ headers: event.headers.set('startTime', startTime.toString()) });
                var diff = endTime - startTime;
                console.log(event.url + " succeeded in " + diff + " milli seconds");
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) { }, function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                var endTime = (new Date()).getTime();
                var diff = endTime - startTime;
                console.log(error.url + " failed in " + diff + " milli seconds");
            }
        }));
    };
    HttpRequestTimeInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_responsetime_service__WEBPACK_IMPORTED_MODULE_3__["ResponseTimeService"]])
    ], HttpRequestTimeInterceptor);
    return HttpRequestTimeInterceptor;
}());



/***/ }),

/***/ "./src/app/shared/models/myservicenode.model.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/models/myservicenode.model.ts ***!
  \******************************************************/
/*! exports provided: MyServiceNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServiceNode", function() { return MyServiceNode; });
var MyServiceNode = /** @class */ (function () {
    function MyServiceNode() {
        this.name = '';
        this.address = '';
    }
    return MyServiceNode;
}());



/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.pageSize = 10;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaginationComponent.prototype.ngOnChanges = function () {
        this.currentPage = 1;
        this.changePageRange(this.currentPage);
    };
    PaginationComponent.prototype.changePageRange = function (page) {
        var startPage;
        var endPage;
        this.pagesCount = Math.ceil(this.totalItems / this.pageSize);
        if (this.pagesCount <= 5) {
            startPage = 1;
            endPage = this.pagesCount;
        }
        else {
            if (page <= 3) {
                startPage = 1;
                endPage = 5;
            }
            else if (page + 1 >= this.pagesCount) {
                startPage = this.pagesCount - 4;
                endPage = this.pagesCount;
            }
            else {
                startPage = page - 2;
                endPage = page + 2;
            }
        }
        this.pages = [];
        for (var i = startPage; i <= endPage; i++)
            this.pages.push(i);
    };
    PaginationComponent.prototype.changePage = function (page) {
        this.currentPage = page;
        this.changePageRange(this.currentPage);
        this.pageChanged.emit(page);
    };
    PaginationComponent.prototype.previous = function () {
        if (this.currentPage == 1)
            return;
        this.currentPage--;
        this.changePageRange(this.currentPage);
        this.pageChanged.emit(this.currentPage);
    };
    PaginationComponent.prototype.next = function () {
        if (this.currentPage == this.pages.length)
            return;
        this.currentPage++;
        this.changePageRange(this.currentPage);
        this.pageChanged.emit(this.currentPage);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('total-items'),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "totalItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('page-size'),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('page-changed'),
        __metadata("design:type", Object)
    ], PaginationComponent.prototype, "pageChanged", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pagination',
            template: "\n    <nav *ngIf=\"totalItems > pageSize\" aria-label=\"Course navigation\">\n        <ul class=\"pagination\">\n            <li class=\"page-item\" [class.disabled]=\"currentPage == 1\" >\n                <a class=\"page-link\" (click)=\"previous()\" aria-label=\"Previous\">\n                <span aria-hidden=\"true\">&laquo;</span>\n                </a>\n            </li>\n            <li class=\"page-link\" [class.active]=\"currentPage == page\" *ngFor=\"let page of pages\" (click)=\"changePage(page)\">\n                <a>{{ page }}</a>\n            </li>\n            <li class=\"page-link\" [class.disabled]=\"currentPage == pages.length\">\n                <a (click)=\"next()\" aria-label=\"Next\">\n                <span aria-hidden=\"true\">&raquo;</span>\n                </a>\n            </li>\n        </ul>\n    </nav>  \n"
        })
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/account.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/account.service.ts ***!
  \****************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



// Add the RxJS Observable operators we need in this app.


var AccountService = /** @class */ (function () {
    function AccountService(document, httpClient) {
        this.document = document;
        this.httpClient = httpClient;
        this._isUserAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.isUserAuthenticated = this._isUserAuthenticatedSubject.asObservable();
    }
    AccountService.prototype.updateUserAuthenticationStatus = function () {
        var _this = this;
        return this.httpClient.get("/api/account/isAuthenticated", { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (isAuthenticated) {
            _this._isUserAuthenticatedSubject.next(isAuthenticated);
        }));
    };
    AccountService.prototype.setUserAsNotAuthenticated = function () {
        this._isUserAuthenticatedSubject.next(false);
    };
    AccountService.prototype.isAuthenticated = function () {
        var isAuthenticated;
        this.isUserAuthenticated.subscribe(function (isAuth) { return isAuthenticated = isAuth; });
        return isAuthenticated;
    };
    AccountService.prototype.login = function () {
        this.document.location.href = this.document.location.origin + "/api/account/SignInWithDiscord";
    };
    AccountService.prototype.logout = function () {
        this.document.location.href = this.document.location.origin + "/api/account/logout";
    };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/base.service.ts ***!
  \*************************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var BaseService = /** @class */ (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        // either applicationError in header or model error in body
        if (applicationError) {
            return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(applicationError);
        }
        var modelStateErrors = '';
        var serverError = error.json();
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? undefined : modelStateErrors;
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].throw(modelStateErrors || 'Server error');
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/shared/services/configuration.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/configuration.service.ts ***!
  \**********************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(http) {
        this.http = http;
    }
    ConfigurationService.prototype.loadConfig = function () {
        var _this = this;
        return this.http.get('/api/Configuration/ConfigurationData')
            .toPromise()
            .then(function (result) {
            _this.configuration = (result);
        }, function (error) { return console.error(error); });
    };
    Object.defineProperty(ConfigurationService.prototype, "getWebApiUrl", {
        get: function () {
            return this.configuration.WebApiUrl;
        },
        enumerable: true,
        configurable: true
    });
    ConfigurationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./src/app/shared/services/myservicenodes.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/myservicenodes.service.ts ***!
  \***********************************************************/
/*! exports provided: MyServiceNodesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyServiceNodesService", function() { return MyServiceNodesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyServiceNodesService = /** @class */ (function (_super) {
    __extends(MyServiceNodesService, _super);
    function MyServiceNodesService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.apiEndpoint = 'Servicenode';
        _this.baseEndpoint = '/api/';
        return _this;
    }
    // GetServiceNode(id: number){
    //   return this.http.get(this.baseEndpoint + this.apiEndpoint + '/GetServiceNode/?id=' + id);
    // }
    MyServiceNodesService.prototype.GetServiceNodes = function (id) {
        return this.http.get(this.baseEndpoint + this.apiEndpoint + '/GetMyServiceNodes/?id=' + id);
    };
    MyServiceNodesService.prototype.create = function (servicenode) {
        return this.http.post(this.baseEndpoint + this.apiEndpoint, servicenode);
    };
    MyServiceNodesService.prototype.delete = function (id) {
        return this.http.delete(this.baseEndpoint + this.apiEndpoint + '/' + id);
    };
    MyServiceNodesService.prototype.verifyMessage = function (address, signature, message) {
        return this.http.get(this.baseEndpoint + this.apiEndpoint + '/VerifyMessage/?address=' + address + "&signature=" + signature + "&message=" + message);
    };
    MyServiceNodesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MyServiceNodesService);
    return MyServiceNodesService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/shared/services/navigator.service..ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/navigator.service..ts ***!
  \*******************************************************/
/*! exports provided: NavigatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorService", function() { return NavigatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigatorService = /** @class */ (function () {
    function NavigatorService(router) {
        this.router = router;
    }
    NavigatorService.prototype.go = function (path) {
        this.router.navigate([path]);
    };
    NavigatorService.prototype.serviceNodeDetails = function (name) {
        this.go('/xrouter-snodes/' + name);
    };
    NavigatorService.prototype.spvWalletDetails = function (name) {
        this.go('/spv-wallets/' + name);
    };
    NavigatorService.prototype.xCloudServiceDetails = function (name) {
        this.go('/xcloud-services/' + name);
    };
    NavigatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavigatorService);
    return NavigatorService;
}());



/***/ }),

/***/ "./src/app/shared/services/responsetime.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/responsetime.service.ts ***!
  \*********************************************************/
/*! exports provided: ResponseTimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseTimeService", function() { return ResponseTimeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResponseTimeService = /** @class */ (function () {
    function ResponseTimeService() {
        this.getResonseTime = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ResponseTimeService.prototype.onGetResponseTime = function (event) {
        this.getResonseTime.next(event);
    };
    ResponseTimeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ResponseTimeService);
    return ResponseTimeService;
}());



/***/ }),

/***/ "./src/app/shared/services/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = /** @class */ (function (_super) {
    __extends(SearchService, _super);
    function SearchService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.apiEndpoint = 'blocknet/xrouter';
        _this.baseEndpoint = '/api/';
        return _this;
    }
    SearchService.prototype.search = function (queryString) {
        var _URL = this.baseEndpoint + this.apiEndpoint + "/?searchString=" + queryString;
        return this.http.get(_URL);
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchService);
    return SearchService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/shared/services/xrouter.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/xrouter.service.ts ***!
  \****************************************************/
/*! exports provided: XrouterApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XrouterApiService", function() { return XrouterApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configuration.service */ "./src/app/shared/services/configuration.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var XrouterApiService = /** @class */ (function (_super) {
    __extends(XrouterApiService, _super);
    function XrouterApiService(http, configurationService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configurationService = configurationService;
        _this.apiEndpoint = 'blocknet/xrouter';
        _this.baseEndpoint = '/api/';
        return _this;
    }
    XrouterApiService.prototype.getAllServices = function () {
        return this.http.get(this.baseEndpoint + this.apiEndpoint + '/getAllServices');
    };
    XrouterApiService.prototype.GetNetworkServices = function () {
        return this.http.get(this.baseEndpoint + this.apiEndpoint + '/getNetworkServices');
    };
    XrouterApiService.prototype.GetNetworkSpvWallets = function () {
        return this.http.get(this.baseEndpoint + this.apiEndpoint + '/getNetworkSpvWallets');
    };
    XrouterApiService.prototype.GetServiceInfo = function (service, nodePubKey, node_count) {
        if (node_count === void 0) { node_count = 1; }
        var url = this.baseEndpoint + this.apiEndpoint + '/GetServiceInfo/?service=' + service;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(nodePubKey)) {
            url += '&nodePubKey=' + nodePubKey;
        }
        url += '&node_count=' + node_count;
        return this.http.get(url);
    };
    XrouterApiService.prototype.GetSpvWalletInfo = function (service, nodePubKey, node_count) {
        if (node_count === void 0) { node_count = 1; }
        var url = this.baseEndpoint + this.apiEndpoint + '/GetSpvWalletInfo/?service=' + service;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(nodePubKey)) {
            url += '&nodePubKey=' + nodePubKey;
        }
        url += '&node_count=' + node_count;
        return this.http.get(url);
    };
    XrouterApiService.prototype.GetNodeInfo = function (nodePubKey, service, node_count) {
        if (node_count === void 0) { node_count = 1; }
        var url = this.baseEndpoint + this.apiEndpoint + '/GetNodeInfo/?nodePubKey=' + nodePubKey;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(service)) {
            url += '&service=' + service;
        }
        url += '&node_count=' + node_count;
        return this.http.get(url);
    };
    XrouterApiService.prototype.FilterXCloudServiceServiceNode = function (filter) {
        var url = this.baseEndpoint + this.apiEndpoint + '/FilterXCloudServiceServiceNode' + '?' + this.toQueryString(filter);
        return this.http.get(url);
    };
    XrouterApiService.prototype.GetServiceNodeList = function (filter) {
        var url = this.baseEndpoint + this.apiEndpoint + '/GetServiceNodeList' + '?' + this.toQueryString(filter);
        return this.http.get(url);
    };
    XrouterApiService.prototype.toQueryString = function (obj) {
        var parts = [];
        for (var property in obj) {
            var value = obj[property];
            if (value != null && value != undefined)
                parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
        }
        return parts.join('&');
    };
    XrouterApiService.prototype.GetServiceNodeCount = function () {
        return this.http.get(this.baseEndpoint + this.apiEndpoint + '/GetServiceNodeCount');
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
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('blockchain', blockchain);
        params = params.append('block_hashes', JSON.stringify(blockHashes));
        params = params.append('node_count', node_count.toString());
        return this.http.get(url, { params: params });
    };
    XrouterApiService.prototype.GetTransaction = function (blockchain, txid, node_count) {
        if (node_count === void 0) { node_count = 1; }
        var url = this.baseEndpoint + this.apiEndpoint + '/GetTransaction?blockchain=' + blockchain;
        url += '&txid=' + txid;
        url += '&node_count=' + node_count;
        return this.http.get(url);
    };
    XrouterApiService.prototype.GetTransactions = function (blockchain, txids, node_count) {
        if (node_count === void 0) { node_count = 1; }
        var url = this.baseEndpoint + this.apiEndpoint + '/GetTransactions';
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('blockchain', blockchain);
        params = params.append('txids', JSON.stringify(txids));
        params = params.append('node_count', node_count.toString());
        return this.http.get(url, { params: params });
    };
    XrouterApiService.prototype.DecodeRawTransaction = function (blockchain, txHex, node_count) {
        if (node_count === void 0) { node_count = 1; }
        var url = this.baseEndpoint + this.apiEndpoint + '/DecodeRawTransaction?blockchain=' + blockchain;
        url += '&txHex=' + txHex;
        url += '&node_count=' + node_count;
        return this.http.get(url);
    };
    XrouterApiService.prototype.SendTransaction = function (blockchain, signedTx) {
        var url = this.baseEndpoint + this.apiEndpoint + '/SendTransaction?blockchain=' + blockchain;
        url += '&signedTx=' + signedTx;
        return this.http.get(url);
    };
    XrouterApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _configuration_service__WEBPACK_IMPORTED_MODULE_4__["ConfigurationService"]])
    ], XrouterApiService);
    return XrouterApiService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SignInComponent = /** @class */ (function () {
    function SignInComponent() {
    }
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        })
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/spv-wallets/spv-wallets.component.css":
/*!*******************************************************!*\
  !*** ./src/app/spv-wallets/spv-wallets.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/spv-wallets/spv-wallets.component.html":
/*!********************************************************!*\
  !*** ./src/app/spv-wallets/spv-wallets.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>SPV Wallets</h2>\n<service-list \n        [services]=\"spvWallets\" \n        [query-init]=\"query\"\n        (query-changed)=\"onQueryChange($event)\">\n</service-list>"

/***/ }),

/***/ "./src/app/spv-wallets/spv-wallets.component.ts":
/*!******************************************************!*\
  !*** ./src/app/spv-wallets/spv-wallets.component.ts ***!
  \******************************************************/
/*! exports provided: SpvWalletsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpvWalletsComponent", function() { return SpvWalletsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/xrouter.service */ "./src/app/shared/services/xrouter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpvWalletsComponent = /** @class */ (function () {
    function SpvWalletsComponent(router, xrouterService) {
        this.router = router;
        this.xrouterService = xrouterService;
        this.PAGE_SIZE = 3;
        this.spvWallets = {};
        this.query = {
            pageSize: this.PAGE_SIZE,
        };
        this.queryPastCourses = {
            pageSize: this.PAGE_SIZE,
        };
    }
    SpvWalletsComponent.prototype.ngOnInit = function () {
        this.populateSpvWallets();
    };
    SpvWalletsComponent.prototype.populateSpvWallets = function () {
        var _this = this;
        this.xrouterService.GetNetworkSpvWallets()
            .subscribe(function (result) { return _this.spvWallets = result; });
    };
    SpvWalletsComponent.prototype.onQueryChange = function (query) {
        this.query = query;
        this.populateSpvWallets();
    };
    SpvWalletsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spv-wallets',
            template: __webpack_require__(/*! ./spv-wallets.component.html */ "./src/app/spv-wallets/spv-wallets.component.html"),
            styles: [__webpack_require__(/*! ./spv-wallets.component.css */ "./src/app/spv-wallets/spv-wallets.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_2__["XrouterApiService"]])
    ], SpvWalletsComponent);
    return SpvWalletsComponent;
}());



/***/ }),

/***/ "./src/app/view-snode/view-snode.component.css":
/*!*****************************************************!*\
  !*** ./src/app/view-snode/view-snode.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "pre{\r\n    overflow:auto;\r\n    max-height:50vh;\r\n    background: #f5f2f0;\r\n}\r\n\r\npre > code{\r\n  display: block;\r\n  padding: 1rem;\r\n  word-wrap: break-word;\r\n  white-space: pre-line;\r\n}"

/***/ }),

/***/ "./src/app/view-snode/view-snode.component.html":
/*!******************************************************!*\
  !*** ./src/app/view-snode/view-snode.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading else loaded\">\n    Fetching Data...\n  </div>\n\n<ng-template #loaded>\n    <h1>Service Node</h1>\n    <table class=\"table\">\n      <tbody>\n        <tr>\n          <td>NodePubKey</td>\n          <td>{{nodePubKey}}</td>\n        </tr>\n        <tr>\n          <td>Score</td>\n          <td>{{result?.score}}</td>\n        </tr>\n        <tr>\n          <td>Banned</td>\n          <td>{{result?.banned}}</td>\n        </tr>\n        <tr>\n          <td>Payment Address</td>\n          <td><a href=\"https://chainz.cryptoid.info/block/address.dws?{{result.paymentAddress}}\">{{result?.paymentAddress}}</a></td>\n        </tr>\n        <tr>\n          <td>Fee Default</td>\n          <td>{{result?.feeDefault}} BLOCK</td>\n        </tr>\n      </tbody>\n    </table>\n    <ngb-tabset>     \n        <ngb-tab title=\"Configuration\">\n            <ng-template ngbTabContent>\n                <h3>Config</h3>\n                <pre>\n                  <code>{{result?.config}}</code>\n                </pre>\n                <!-- <div class=\"well overflow-visible\" style=\"white-space: pre-line\"> -->\n                <!-- </div>             -->\n            </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Fees\">\n            <ng-template ngbTabContent>\n                <h3>Fees</h3>\n                <table class=\"table\">\n                  <tbody>\n                    <tr *ngFor=\"let fee of result.fees | keyvalue\">\n                      <td>{{fee.key}}</td>\n                      <td>{{fee.value}} BLOCK</td>\n                    </tr>\n                  </tbody>\n                </table>\n            </ng-template>\n          </ngb-tab>\n        <ngb-tab title=\"Spv Wallets\">\n            <ng-template ngbTabContent>\n              <h3>Spv Wallet</h3>  \n                <table class=\"table\">\n                    <tbody>\n                      <tr *ngFor=\"let s of result?.spvWallets\">\n                        <td><a [routerLink]=\"['/spv-wallets', 'xr::' + s, nodePubKey]\">{{s}}</a></td>\n                      </tr>\n                    </tbody>\n                </table>\n            </ng-template>\n          </ngb-tab>\n        <ngb-tab title=\"XCloud Services\">\n            <ng-template ngbTabContent>\n                <h3>XCloud Services offered by this Service Node</h3>\n\n                <div *ngIf=\"result?.services.length == 0 else notEmpty\">\n                    This service node doesn't offer XCloud Services yet :(\n                  </div>\n                  \n                <ng-template #notEmpty>\n                    <table class=\"table\">\n                        <thead>\n                            <tr>\n                                <th>Service</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let s of result?.services\">\n                            <td><a [routerLink]=\"['/xcloud-services', 'xrs::' + s]\">{{s}}</a></td>\n                          </tr>\n                        </tbody>\n                    </table>\n                    <ngb-pagination [collectionSize]=\"serviceNodes?.totalItems\" [pageSize]=\"query.pageSize\" [(page)]=\"query.page\" (pageChange)=\"pageChange($event)\"></ngb-pagination>\n                  </ng-template>  \n              </ng-template>\n            \n        </ngb-tab>\n    </ngb-tabset>\n  </ng-template>\n    \n  \n"

/***/ }),

/***/ "./src/app/view-snode/view-snode.component.ts":
/*!****************************************************!*\
  !*** ./src/app/view-snode/view-snode.component.ts ***!
  \****************************************************/
/*! exports provided: ViewSnodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSnodeComponent", function() { return ViewSnodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/xrouter.service */ "./src/app/shared/services/xrouter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewSnodeComponent = /** @class */ (function () {
    function ViewSnodeComponent(xrouterApiService, router, route, location) {
        var _this = this;
        this.xrouterApiService = xrouterApiService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.PAGE_SIZE = 6;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.query = {
            page: 1,
            pageSize: this.PAGE_SIZE,
        };
        route.params.subscribe(function (p) {
            _this.nodePubKey = p['nodePubKey'];
            _this.service = p['service'];
            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(_this.nodePubKey)) {
                router.navigate(['']);
                return;
            }
            _this.loading = true;
        });
    }
    ViewSnodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.xrouterApiService.GetNodeInfo(this.nodePubKey, this.service)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (result) {
            _this.result = result;
            _this.loading = false;
        }, function (error) {
            _this.router.navigate(['/error'], { queryParams: error });
        });
    };
    ViewSnodeComponent.prototype.ngOnDestroy = function () {
        // This aborts all HTTP requests.
        this.ngUnsubscribe.next();
        // This completes the subject properlly.
        this.ngUnsubscribe.complete();
    };
    ViewSnodeComponent.prototype.populateXCloudServices = function () {
        var _this = this;
        this.xrouterApiService.FilterXCloudServiceServiceNode(this.query)
            .subscribe(function (result) {
            _this.xCloudServices = result;
        });
    };
    ViewSnodeComponent.prototype.ngOnChanges = function () {
        this.initializeQuery();
    };
    ViewSnodeComponent.prototype.onFilterChange = function () {
        this.query.page = 1;
        this.populateXCloudServices();
    };
    ViewSnodeComponent.prototype.initializeQuery = function () { };
    ViewSnodeComponent.prototype.resetFilter = function () {
        this.query = {
            page: 1,
            pageSize: this.PAGE_SIZE,
        };
        this.populateXCloudServices();
    };
    ViewSnodeComponent.prototype.onPageChange = function (page) {
        this.query.page = page;
        this.populateXCloudServices();
    };
    ViewSnodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-snode',
            template: __webpack_require__(/*! ./view-snode.component.html */ "./src/app/view-snode/view-snode.component.html"),
            styles: [__webpack_require__(/*! ./view-snode.component.css */ "./src/app/view-snode/view-snode.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_2__["XrouterApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], ViewSnodeComponent);
    return ViewSnodeComponent;
}());



/***/ }),

/***/ "./src/app/view-spv-wallet/view-spv-wallet.component.css":
/*!***************************************************************!*\
  !*** ./src/app/view-spv-wallet/view-spv-wallet.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "pre{\r\n    overflow:auto;\r\n    max-height:50vh;\r\n    background: #f5f2f0;\r\n}\r\n\r\npre > code{\r\n  display: block;\r\n  padding: 1rem;\r\n  word-wrap: break-word;\r\n  /* white-space: pre-line; */\r\n}\r\n\r\n.ellipsis{\r\n  max-width: 0;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}"

/***/ }),

/***/ "./src/app/view-spv-wallet/view-spv-wallet.component.html":
/*!****************************************************************!*\
  !*** ./src/app/view-spv-wallet/view-spv-wallet.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading else loaded\">\n  Fetching data...\n  </div>\n\n<ng-template #loaded>\n  <h1>SPV Wallet</h1>\n  <h2>{{ shortSpvWalletName }}</h2>\n  <!-- <table class=\"table\">\n      <tbody>\n        <tr>\n          <td>Usage Instructions Blocknet CLI</td>\n          <td>xrService {{spvWalletName}}</td>\n      </tr>\n      </tbody>\n    </table> -->\n\n  <ngb-tabset #t>     \n      <ngb-tab title=\"Try it out\" id=\"try-it-out\">\n          <ng-template ngbTabContent>\n              <h3>Try out a {{ spvWalletName }} command</h3>\n              <div class=\"row\">\n                <div class=\"col-md-3 col-sm-12\">\n                  <h4>Request</h4>\n                  <form (ngSubmit)=\"onSubmit()\" #spvWalletForm=\"ngForm\">\n                    <label for=\"spvCommand\">Spv Command</label>\n                    <select class=\"form-control\" [(ngModel)]=\"selectedSpvCommand\" name=\"selectedSpvCommand\">\n                        <option *ngFor=\"let c of result.spvConfig.commands\" [value]=\"c.command\">{{c.command}}</option>\n                    </select>\n                    <div [ngSwitch]=\"selectedSpvCommand\">\n                      <div *ngSwitchCase=\"'xrGetBlockCount'\">\n                        \n                      </div>\n                      <div *ngSwitchCase=\"'xrGetBlockHash'\">\n                          <label for=\"blockNumber\">Block Number</label>\n                          <input type=\"number\" class=\"form-control\" id=\"blockNumber\" ngModel name=\"blockNumber\">\n                      </div>\n                      <div *ngSwitchCase=\"'xrGetBlock'\">\n                          <label for=\"blockHash\">Block Hash</label>\n                          <input type=\"text\" class=\"form-control\" id=\"blockHash\" ngModel name=\"blockHash\">\n                      </div>\n                      <div *ngSwitchCase=\"'xrGetBlocks'\">\n                        <h4>Block hash inputs</h4>\n                        <button type=\"button\" (click)=\"addBlockHash()\" class=\"btn btn-primary btn-sm\">Add</button> \n                        <hr>\n                        <div *ngFor=\"let bh of blockHashes; let i = index;\">\n                            <label for=\"blockHash-{{i}}\">Blockhash-{{i}}</label>\n                            <input type=\"text\" class=\"form-control\" id=\"blockHash-{{i}}\" [(ngModel)]=\"blockHashes[i]\" name=\"blockHash-{{i}}\">\n                            <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"removeBlockHash(i)\">Remove</button>\n                        </div>\n                        <hr>\n                      </div>\n                      <div *ngSwitchCase=\"'xrGetTransaction'\">\n                          <label for=\"txid\">Txid</label>\n                          <input type=\"text\" class=\"form-control\" id=\"txid\" ngModel name=\"txid\">\n                      </div>\n                      <div *ngSwitchCase=\"'xrGetTransactions'\">\n                        <h4>TxId inputs</h4>\n                        <button type=\"button\" (click)=\"addTxId()\" class=\"btn btn-primary btn-sm\">Add</button> \n                        <hr>\n                          <div *ngFor=\"let txid of txIds; let i = index;\">\n                              <label for=\"txid-{{i}}\">txid-{{i}}</label>\n                              <input type=\"text\" class=\"form-control\" id=\"txid-{{i}}\" [(ngModel)]=\"txIds[i]\" name=\"txid-{{i}}\">\n                              <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"removeTxId(i)\">Remove</button>\n                          </div>\n                        <hr>\n                      </div>\n                      <div *ngSwitchCase=\"'xrDecodeRawTransaction'\">\n                          <label for=\"txHex\">Tx Hex</label>\n                          <input type=\"text\" class=\"form-control\" id=\"txHex\" ngModel name=\"txHex\">\n                      </div>\n                      <div *ngSwitchCase=\"'xrSendTransaction'\">\n                          <label for=\"signedTx\">Signed Tx</label>\n                          <input type=\"text\" class=\"form-control\" id=\"signedTx\" ngModel name=\"signedTx\">\n                      </div>\n                    </div>\n              \n                    <label for=\"nodeCount\">Node count</label>\n                    <input type=\"number\" class=\"form-control\" id=\"nodeCount\"  [(ngModel)]=\"nodeCount\" name=\"nodeCount\">\n                    <br>\n                    <button type=\"submit\" class=\"btn btn-outline-primary\">Submit</button>\n                  </form>\n                </div>\n                <div class=\"col-md-9 col-sm-12\">\n                  <h4>Response</h4>\n                  <pre>\n                    <code>\n                      <div *ngIf=\"resultLoading else resultLoaded\">\n                        Executing...\n                      </div>\n                    <ng-template #resultLoaded> {{ spvWalletCommandResult }}</ng-template>\n                    </code>                    \n                  </pre>\n\n                </div>\n              </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Service Node Info\">\n          <ng-template ngbTabContent>\n              <h3>Offered By</h3>\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <tbody>\n                    <tr>\n                      <td>NodePubKey</td>\n                      <td class=\"ellipsis\"><a [routerLink]=\"['/xrouter-snodes', result.node.nodePubKey]\">{{result.node.nodePubKey}}</a></td>\n                    </tr>\n                    <tr>\n                      <td>Score</td>\n                      <td>{{result.node.score}}</td>\n                    </tr>\n                    <tr>\n                      <td>Banned</td>\n                      <td>{{result.node.banned}}</td>\n                    </tr>\n                    <tr>\n                      <td>Default Fee</td>\n                      <td>{{result.node.feeDefault}} BLOCK</td>\n                    </tr>\n                \n                  </tbody>\n                </table>\n              </div>\n          </ng-template>\n        </ngb-tab>\n        <ngb-tab title=\"Commands\">\n            <ng-template ngbTabContent>\n                <h3>Commands</h3>\n                <div class=\"table-responsive\">\n                  <table class=\"table\">\n                    <thead>\n                        <tr>\n                            <th>Command</th>\n                            <th>Fee (BLOCK)</th>\n                            <th>Request Limit</th>\n                            <th>Payment Address</th>\n                            <th>Try it out</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let c of result.spvConfig.commands\">\n                            <td class=\"ellipsis\">{{c.command}}</td>\n                            <td>{{c.fee}}</td>\n                            <td>{{c.requestLimit}}</td>\n                            <td class=\"ellipsis\">{{c.paymentAddress}}</td>\n                            <td>  \n                              <button class=\"btn btn-outline-primary\" (click)=\"onSelectTryItOut(c.command)\">Try me!</button>\n                            </td>\n                        </tr>\n                    </tbody>\n                  </table>\n                </div>\n            </ng-template>\n          </ngb-tab> \n      <ngb-tab title=\"Offered by others\">\n        <ng-template ngbTabContent>\n            <h3>Other Service Nodes that offer this service</h3>\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th>Address</th>\n                    <th>Score</th>\n                    <th>Banned</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let s of result.otherNodes\">\n                    <td class=\"ellipsis\"><a [routerLink]=\"['/xrouter-snodes', s.nodePubKey]\">{{s.nodePubKey}}</a></td>\n                    <td>{{s.score}}</td>\n                    <td>{{s.banned}}</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n        </ng-template>\n      </ngb-tab>\n    </ngb-tabset>\n</ng-template>  "

/***/ }),

/***/ "./src/app/view-spv-wallet/view-spv-wallet.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/view-spv-wallet/view-spv-wallet.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewSpvWalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSpvWalletComponent", function() { return ViewSpvWalletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/xrouter.service */ "./src/app/shared/services/xrouter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_services_responsetime_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/responsetime.service */ "./src/app/shared/services/responsetime.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ViewSpvWalletComponent = /** @class */ (function () {
    function ViewSpvWalletComponent(xrouterApiService, responseTimeService, router, route, location) {
        var _this = this;
        this.xrouterApiService = xrouterApiService;
        this.responseTimeService = responseTimeService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.blockHashes = [""];
        this.txIds = [""];
        route.params.subscribe(function (p) {
            _this.spvWalletName = p['name'];
            // this.shortSpvWalletName = this.shortSpvWalletName.replace("xr::", "");
            _this.nodePubKey = p['nodePubKey'];
            if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(_this.spvWalletName)) {
                router.navigate(['']);
                return;
            }
            _this.loading = true;
        });
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.initializeData();
            }
        });
    }
    ViewSpvWalletComponent.prototype.initializeData = function () {
        var _this = this;
        this.xrouterApiService.GetSpvWalletInfo(this.spvWalletName, this.nodePubKey)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (result) {
            _this.result = result;
            _this.location.replaceState("/spv-wallets/" + _this.spvWalletName + "/" + _this.result.node.nodePubKey);
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
        callback.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
            _this.resultLoading = false;
        }))
            .subscribe(function (result) {
            _this.spvWalletCommandResult = JSON.stringify(result, undefined, 2);
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
    ViewSpvWalletComponent.prototype.onSelectTryItOut = function (command) {
        this.selectedSpvCommand = this.result.spvConfig.commands.find(function (c) { return c.command == command; }).command;
        this.tab.select('try-it-out');
    };
    ViewSpvWalletComponent.prototype.ngOnInit = function () { };
    ViewSpvWalletComponent.prototype.ngOnDestroy = function () {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
        // This aborts all HTTP requests.
        this.ngUnsubscribe.next();
        // This completes the subject properlly.
        this.ngUnsubscribe.complete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('spvWalletForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ViewSpvWalletComponent.prototype, "spvWalletForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('t'),
        __metadata("design:type", _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTabset"])
    ], ViewSpvWalletComponent.prototype, "tab", void 0);
    ViewSpvWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-spv-wallet',
            template: __webpack_require__(/*! ./view-spv-wallet.component.html */ "./src/app/view-spv-wallet/view-spv-wallet.component.html"),
            styles: [__webpack_require__(/*! ./view-spv-wallet.component.css */ "./src/app/view-spv-wallet/view-spv-wallet.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_3__["XrouterApiService"],
            _shared_services_responsetime_service__WEBPACK_IMPORTED_MODULE_8__["ResponseTimeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ViewSpvWalletComponent);
    return ViewSpvWalletComponent;
}());



/***/ }),

/***/ "./src/app/view-xr-service/view-xr-service.component.css":
/*!***************************************************************!*\
  !*** ./src/app/view-xr-service/view-xr-service.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "pre{\r\n    overflow:auto;\r\n    max-height:50vh;\r\n    background: #f5f2f0;\r\n}\r\n\r\npre > code{\r\n  display: block;\r\n  padding: 1rem;\r\n  word-wrap: break-word;\r\n  white-space: pre-line;\r\n}\r\n\r\n.ellipsis{\r\n  max-width: 0;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}"

/***/ }),

/***/ "./src/app/view-xr-service/view-xr-service.component.html":
/*!****************************************************************!*\
  !*** ./src/app/view-xr-service/view-xr-service.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading else loaded\">\n  Fetching data...\n</div>\n\n<ng-template #loaded>\n    <h1>XCloud Service</h1>\n    <h2>{{serviceName}}</h2>\n    <div class=\"table-responsive\">\n      <table class=\"table\">\n        <tbody>\n        <tr>\n          <td>Fee</td>\n          <td>{{result.service.fee}} BLOCK</td>\n        <tr>\n            <td>Parameter Types</td>\n            <td>{{result.service.parameters}}</td>\n        </tr>\n        <tr>\n          <td>Description</td>\n          <td>{{result.service.helpDescription}}</td>\n        </tr>\n        <tr>\n            <td>Usage Instructions Blocknet CLI</td>\n            <td>xrService {{serviceName}} [{{result.service.parameters}}]</td>\n        </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <ngb-tabset>     \n        <ngb-tab title=\"Try it out\">\n            <ng-template ngbTabContent>\n                <h3>Try it out</h3>\n                <div class=\"row\">\n                  <div class=\"col-md-3 col-sm-12\">\n                    <h4>Request</h4>\n                    <form (ngSubmit)=\"onSubmit()\" #serviceForm=\"ngForm\">\n                      <div class=\"form-group\" *ngFor=\"let p of result.service.parametersList; let i = index\">\n                        <label for=\"param-{{i}}\">Param-{{i}} [{{p}}] </label>\n                        <input type=\"text\" class=\"form-control\" id=\"param-{{i}}\" [(ngModel)]=\"parametervalues[i]\" name=\"param-{{i}}\">\n                      </div>\n                      <br>\n                      <button type=\"submit\" class=\"btn btn-outline-primary\">Submit</button>\n                    </form> \n                  </div>\n                  <div class=\"col-md-9 col-sm-12\">\n                    <h4>Response</h4>\n                      <pre>\n                        <code>\n                          <div *ngIf=\"resultLoading else resultLoaded\">\n                            Executing...\n                          </div>\n                          <ng-template #resultLoaded>\n                            {{ serviceResult | json }}\n                          </ng-template>\n                        </code>\n                      </pre>\n                  </div>\n                </div>\n          \n            </ng-template>\n          </ngb-tab>\n          <ngb-tab title=\"Service Node Info\">\n              <ng-template ngbTabContent>\n                  <h3>Offered By</h3>\n                  <div class=\"table-responsive\">\n                    <table class=\"table\">\n                      <tbody>\n                        <tr>\n                          <td>NodePubKey</td>\n                          <td class=\"ellipsis\"><a [routerLink]=\"['/xrouter-snodes', result.node.nodePubKey]\">{{result.node.nodePubKey}}</a></td>\n                        </tr>\n                        <tr>\n                          <td>Score</td>\n                          <td>{{result.node.score}}</td>\n                        </tr>\n                        <tr>\n                          <td>Banned</td>\n                          <td>{{result.node.banned}}</td>\n                        </tr>\n                        <tr>\n                          <td>Default Fee</td>\n                          <td>{{result.node.feeDefault}} BLOCK</td>\n                        </tr>\n                    \n                      </tbody>\n                    </table>\n                  </div>\n              </ng-template>\n            </ngb-tab>\n            <ngb-tab title=\"Configuration\">\n                <ng-template ngbTabContent>\n                  <h3>Configuration {{serviceName}}.conf</h3>\n                  <pre>\n                    <code>{{result.service.config}}</code>\n                  </pre>\n                </ng-template>\n              </ngb-tab>\n          </ngb-tabset> \n    \n    <!-- <h3>Other Service Nodes that offer this service</h3>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Address</th>\n          <th>Score</th>\n          <th>Banned</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let s of result.otherNodes\">\n          <td><a [routerLink]=\"['/xrouter-snodes', s.nodePubKey]\">{{s.nodePubKey}}</a></td>\n          <td>{{s.score}}</td>\n          <td>{{s.banned}}</td>\n        </tr>\n      </tbody>\n    </table>   -->\n</ng-template>  "

/***/ }),

/***/ "./src/app/view-xr-service/view-xr-service.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/view-xr-service/view-xr-service.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewXrServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewXrServiceComponent", function() { return ViewXrServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/xrouter.service */ "./src/app/shared/services/xrouter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ViewXrServiceComponent = /** @class */ (function () {
    function ViewXrServiceComponent(xrouterApiService, router, route, location) {
        var _this = this;
        this.xrouterApiService = xrouterApiService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.loading = true;
        route.params.subscribe(function (p) {
            _this.serviceName = p['name'];
            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(_this.serviceName)) {
                router.navigate(['']);
                return;
            }
        });
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.initializeData();
            }
        });
    }
    ViewXrServiceComponent.prototype.initializeData = function () {
        var _this = this;
        this.xrouterApiService.GetServiceInfo(this.serviceName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (result) {
            _this.result = result;
            _this.location.replaceState("/xcloud-services/" + _this.serviceName + "/" + _this.result.node.nodePubKey);
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
        this.xrouterApiService.Service(new ServiceRequest(this.serviceName, this.parametervalues, 1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
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
        // This aborts all HTTP requests.
        this.ngUnsubscribe.next();
        // This completes the subject properlly.
        this.ngUnsubscribe.complete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('serviceForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], ViewXrServiceComponent.prototype, "serviceForm", void 0);
    ViewXrServiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-xr-service',
            template: __webpack_require__(/*! ./view-xr-service.component.html */ "./src/app/view-xr-service/view-xr-service.component.html"),
            styles: [__webpack_require__(/*! ./view-xr-service.component.css */ "./src/app/view-xr-service/view-xr-service.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_2__["XrouterApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], ViewXrServiceComponent);
    return ViewXrServiceComponent;
}());

var ServiceRequest = /** @class */ (function () {
    function ServiceRequest(service, parameters, nodecount) {
        this.service = service;
        this.parameters = parameters;
        this.nodecount = nodecount;
    }
    return ServiceRequest;
}());


/***/ }),

/***/ "./src/app/xr-services/xr-services.component.css":
/*!*******************************************************!*\
  !*** ./src/app/xr-services/xr-services.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/xr-services/xr-services.component.html":
/*!********************************************************!*\
  !*** ./src/app/xr-services/xr-services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>XCloud Services</h2>\n<service-list \n        [services]=\"services\" \n        [query-init]=\"query\"\n        (query-changed)=\"onQueryChange($event)\">\n</service-list>"

/***/ }),

/***/ "./src/app/xr-services/xr-services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/xr-services/xr-services.component.ts ***!
  \******************************************************/
/*! exports provided: XrServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XrServicesComponent", function() { return XrServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/xrouter.service */ "./src/app/shared/services/xrouter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./xr-services.component.html */ "./src/app/xr-services/xr-services.component.html"),
            styles: [__webpack_require__(/*! ./xr-services.component.css */ "./src/app/xr-services/xr-services.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_2__["XrouterApiService"]])
    ], XrServicesComponent);
    return XrServicesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lucie\source\repos\Xrouter.Service.Explorer\Xrouter.Service.Explorer\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map