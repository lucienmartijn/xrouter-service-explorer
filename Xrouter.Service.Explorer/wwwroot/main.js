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

module.exports = "@media (max-width: 767px) {\r\n  /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n  .body-content {\r\n    padding-top: 50px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n  <div class='row'>\r\n    <div class='col-sm-3'>\r\n      <app-nav-menu></app-nav-menu>\r\n    </div>\r\n    <div class='col-sm-9 body-content'>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _shared_models_appsettings_model___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/models/appsettings.model. */ "./src/app/shared/models/appsettings.model..ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/session.service */ "./src/app/shared/services/session.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(elementRef, sessionService) {
        this.elementRef = elementRef;
        this.sessionService = sessionService;
        this.title = 'Caplin Systems, Incorporated.';
        // tslint:disable-next-line:prefer-const
        var native = this.elementRef.nativeElement;
        // tslint:disable-next-line:prefer-const
        var settings = native.getAttribute('settings');
        var appSettings = new _shared_models_appsettings_model___WEBPACK_IMPORTED_MODULE_1__["AppSettings"]();
        appSettings = JSON.parse(settings);
        sessionService.setAppSettings(appSettings);
        this.isAuthenicated = sessionService.isAuthenicated;
    }
    AppComponent.prototype.logout = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
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
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interceptors */ "./src/app/interceptors.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service-list/service-list.component */ "./src/app/service-list/service-list.component.ts");
/* harmony import */ var _xr_services_xr_services_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./xr-services/xr-services.component */ "./src/app/xr-services/xr-services.component.ts");
/* harmony import */ var _spv_wallets_spv_wallets_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./spv-wallets/spv-wallets.component */ "./src/app/spv-wallets/spv-wallets.component.ts");
/* harmony import */ var _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/services/xrouter.service */ "./src/app/shared/services/xrouter.service.ts");
/* harmony import */ var _view_xr_service_view_xr_service_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./view-xr-service/view-xr-service.component */ "./src/app/view-xr-service/view-xr-service.component.ts");
/* harmony import */ var _view_snode_view_snode_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./view-snode/view-snode.component */ "./src/app/view-snode/view-snode.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _view_spv_wallet_view_spv_wallet_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./view-spv-wallet/view-spv-wallet.component */ "./src/app/view-spv-wallet/view-spv-wallet.component.ts");
/* harmony import */ var _service_node_list_service_node_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service-node-list/service-node-list.component */ "./src/app/service-node-list/service-node-list.component.ts");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/search-form/search-form.component.ts");
/* harmony import */ var _shared_services_navigator_service___WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/services/navigator.service. */ "./src/app/shared/services/navigator.service..ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _rpc_console_rpc_console_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./rpc-console/rpc-console.component */ "./src/app/rpc-console/rpc-console.component.ts");
/* harmony import */ var _shared_services_responsetime_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/services/responsetime.service */ "./src/app/shared/services/responsetime.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_12__["NavMenuComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_14__["PaginationComponent"],
                _service_node_list_service_node_list_component__WEBPACK_IMPORTED_MODULE_24__["ServiceNodeListComponent"],
                _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_15__["ServiceListComponent"],
                _xr_services_xr_services_component__WEBPACK_IMPORTED_MODULE_16__["XrServicesComponent"],
                _spv_wallets_spv_wallets_component__WEBPACK_IMPORTED_MODULE_17__["SpvWalletsComponent"],
                _view_xr_service_view_xr_service_component__WEBPACK_IMPORTED_MODULE_19__["ViewXrServiceComponent"],
                _view_spv_wallet_view_spv_wallet_component__WEBPACK_IMPORTED_MODULE_23__["ViewSpvWalletComponent"],
                _view_snode_view_snode_component__WEBPACK_IMPORTED_MODULE_20__["ViewSnodeComponent"],
                _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_25__["SearchFormComponent"],
                _rpc_console_rpc_console_component__WEBPACK_IMPORTED_MODULE_28__["RpcConsoleComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_27__["ErrorComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"], pathMatch: 'full' },
                    { path: 'xrouter-snodes', component: _service_node_list_service_node_list_component__WEBPACK_IMPORTED_MODULE_24__["ServiceNodeListComponent"] },
                    { path: 'spv-wallets', component: _spv_wallets_spv_wallets_component__WEBPACK_IMPORTED_MODULE_17__["SpvWalletsComponent"] },
                    { path: 'spv-wallets/:name', component: _view_spv_wallet_view_spv_wallet_component__WEBPACK_IMPORTED_MODULE_23__["ViewSpvWalletComponent"], runGuardsAndResolvers: 'always' },
                    { path: 'spv-wallets/:name/:nodePubKey', component: _view_spv_wallet_view_spv_wallet_component__WEBPACK_IMPORTED_MODULE_23__["ViewSpvWalletComponent"], runGuardsAndResolvers: 'always' },
                    { path: 'xcloud-services', component: _xr_services_xr_services_component__WEBPACK_IMPORTED_MODULE_16__["XrServicesComponent"] },
                    { path: 'xcloud-services/:name', component: _view_xr_service_view_xr_service_component__WEBPACK_IMPORTED_MODULE_19__["ViewXrServiceComponent"], runGuardsAndResolvers: 'always' },
                    { path: 'xcloud-services/:name/:NodePubKey', component: _view_xr_service_view_xr_service_component__WEBPACK_IMPORTED_MODULE_19__["ViewXrServiceComponent"], runGuardsAndResolvers: 'always' },
                    { path: 'xrouter-snodes/:nodePubKey', component: _view_snode_view_snode_component__WEBPACK_IMPORTED_MODULE_20__["ViewSnodeComponent"] },
                    { path: 'xrouter-snodes/:nodePubKey/:service', component: _view_snode_view_snode_component__WEBPACK_IMPORTED_MODULE_20__["ViewSnodeComponent"] },
                    { path: 'rpc-console', component: _rpc_console_rpc_console_component__WEBPACK_IMPORTED_MODULE_28__["RpcConsoleComponent"] },
                    { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_27__["ErrorComponent"] },
                    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__["PageNotFoundComponent"] }
                ], {
                    useHash: true,
                    onSameUrlNavigation: 'reload'
                })
            ],
            providers: [
                _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_18__["XrouterApiService"],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_22__["SessionService"],
                _shared_services_navigator_service___WEBPACK_IMPORTED_MODULE_26__["NavigatorService"],
                _shared_services_responsetime_service__WEBPACK_IMPORTED_MODULE_29__["ResponseTimeService"],
                // {
                //   provide: HTTP_INTERCEPTORS,
                //   useClass: HttpErrorInterceptor,
                //   multi: true
                // },
                _interceptors__WEBPACK_IMPORTED_MODULE_11__["interceptorProviders"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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

module.exports = "<h1>Something went wrong</h1>\r\n<p>Servicenode is probably not properly configured. Servicenode info cannot be retrieved.</p>\r\n\r\n<h3>Error: {{error.error}}</h3>\r\n"

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

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Hello, world!</h1>\r\n<p>Welcome to your new single-page application, built with:</p>\r\n<ul>\r\n  <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n  <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n  <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n</ul>\r\n<p>To help you get started, we've also set up:</p>\r\n<ul>\r\n  <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>\r\n  <li><strong>Angular CLI integration</strong>. In development mode, there's no need to run <code>ng serve</code>. It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>\r\n  <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration automatically invokes <code>ng build</code> to produce minified, ahead-of-time compiled JavaScript files.</li>\r\n</ul>\r\n<p>The <code>ClientApp</code> subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any <code>ng</code> command (e.g., <code>ng test</code>), or use <code>npm</code> to install extra packages into it.</p>\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
        })
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

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(25% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.html":
/*!**************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse' [attr.aria-expanded]='isExpanded' (click)='toggle()'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]='[\"/\"]'>XRouter Service Explorer</a>\r\n            <search-form></search-form>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse' [ngClass]='{ \"in\": isExpanded }'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n                    <a [routerLink]='[\"/\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]='[\"link-active\"]'>\r\n                    <a [routerLink]='[\"/xrouter-snodes\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-th-list'></span> XRouter Service Nodes\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]='[\"link-active\"]'>\r\n                    <a [routerLink]='[\"/spv-wallets\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-th-list'></span> SPV Wallets\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]='[\"link-active\"]'>\r\n                    <a [routerLink]='[\"/xcloud-services\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-th-list'></span> XCloud Services\r\n                    </a>\r\n                </li>\r\n                <!-- <li [routerLinkActive]='[\"link-active\"]'>\r\n                    <a [routerLink]='[\"/rpc-console\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-th-list'></span> Rpc Console Sandbox\r\n                    </a>\r\n                </li> -->\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
        this.isExpanded = false;
    }
    NavMenuComponent.prototype.collapse = function () {
        this.isExpanded = false;
    };
    NavMenuComponent.prototype.toggle = function () {
        this.isExpanded = !this.isExpanded;
    };
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")]
        })
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

module.exports = ""

/***/ }),

/***/ "./src/app/search-form/search-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/search-form/search-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n \n  <mat-form-field>\n    <input matInput placeholder=\"Search\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"searchServicesCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onSelectionChanged($event)\">\n      <mat-option *ngIf=\"isLoading\" class=\"is-loading\">Loading...</mat-option>\n      <ng-container *ngIf=\"!isLoading\">\n        <mat-option *ngFor=\"let service of filteredServices\" [value]=\"service.name\">\n          <span><b>{{service.name}}</b></span>\n        </mat-option>\n      </ng-container>\n    </mat-autocomplete>\n  </mat-form-field>\n \n  <br>\n \n</div>\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_navigator_service___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/navigator.service. */ "./src/app/shared/services/navigator.service..ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/base.service */ "./src/app/shared/services/base.service.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/session.service */ "./src/app/shared/services/session.service.ts");
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
    function SearchFormComponent(http, navigatorService, sessionService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.navigatorService = navigatorService;
        _this.sessionService = sessionService;
        _this.apiEndpoint = 'blocknet/xrouter';
        _this.baseEndpoint = ''; // http://localhost
        _this.searchServicesCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        _this.isLoading = false;
        _this.baseEndpoint = sessionService.getApiURI();
        return _this;
    }
    SearchFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchServicesCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.errorMsg = "";
            _this.filteredServices = [];
            _this.isLoading = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (value) { return _this.http.get(_this.baseEndpoint + _this.apiEndpoint + "/?searchString=" + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/search-form/search-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _shared_services_navigator_service___WEBPACK_IMPORTED_MODULE_2__["NavigatorService"],
            _shared_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])
    ], SearchFormComponent);
    return SearchFormComponent;
}(_shared_services_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]));



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
        this.queryInit = {
            isCurrent: false,
            clientId: 0
        };
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
            template: "\n        <table class=\"table\">\n            <thead>\n              <tr>\n                <th *ngFor=\"let c of columns\">\n                    <div *ngIf=\"c.isSortable\" (click)=\"sortBy(c.key)\">\n                        {{ c.title }}\n                        <i *ngIf=\"query.sortBy === c.key\" \n                          class=\"fa\"\n                          [class.fa-sort-asc]=\"query.isSortAscending\"\n                          [class.fa-sort-desc]=\"!query.isSortAscending\"\n                        ></i>\n                      </div>\n                      <div *ngIf=\"!c.isSortable\">\n                        {{ c.title }}\n                      </div>\n                </th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let c of services.items\">\n                <td><a [routerLink]=\"[c.name]\">{{c.name}}</a></td>\n                <td>{{c.nodeCount}}</td>\n              </tr>\n            </tbody>\n          </table>\n  "
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

module.exports = ""

/***/ }),

/***/ "./src/app/service-node-list/service-node-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/service-node-list/service-node-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Service Node List</h2>\n<table class=\"table\">\n        <thead>\n          <tr>\n                <th>Rank</th>\n                <th>NodePubKey</th>\n                <!-- <th>Address</th> -->\n                <!-- <th>Spv Wallets</th>\n                <th>XCloud Services</th> -->\n          </tr> \n        </thead>\n        <tbody>\n                <tr *ngFor=\"let sn of serviceNodes; let i = index\">\n                        <td>{{sn.rank}}</td>\n                        <td>                                \n                                <a href=\"javascript:void(0)\" (click)=\"onNodeClick(i)\"> {{sn.nodePubKey}}</a>\n                        </td>\n                        <!-- <td><a href=\"https://chainz.cryptoid.info/block/address.dws?{{sn.addr}}\">{{sn.addr}}</a></td> -->\n                        <!-- <td>\n                                <div class=\"form-group\">\n                                        <label for=\"spvWallets\"></label>\n                                        <select id=\"spvWallets\" class=\"form-control\" (change)=\"onSpvWalletChange(i, $event)\">\n                                                <option *ngFor=\"let w of sn.spvWallets\" [value]=\"w\">{{ w }} </option>\n                                        </select>   \n                                </div> \n                        </td> -->\n                        <!-- <td>\n                                <div *ngIf = \"sn.xCloudServices.length > 0\">\n                                        <div class=\"form-group\">\n                                                <label for=\"xcloudServices\"></label>\n                                                <select id=\"xcloudServices\" class=\"form-control\" (change)=\"onXCloudServiceChange(i, $event)\">\n                                                        <option *ngFor=\"let s of sn.xCloudServices\" [value]=\"s\">{{ s }} </option>\n                                                </select>   \n                                        </div> \n                                </div>\n                                \n                        </td> -->\n                </tr>\n        </tbody>\n</table>"

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

/***/ "./src/app/shared/models/appsettings.model..ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/appsettings.model..ts ***!
  \*****************************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    return AppSettings;
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
        this.currentPage = 1;
    }
    PaginationComponent.prototype.ngOnChanges = function () {
        this.currentPage = 1;
        var pagesCount = Math.ceil(this.totalItems / this.pageSize);
        this.pages = [];
        for (var i = 1; i <= pagesCount; i++)
            this.pages.push(i);
    };
    PaginationComponent.prototype.changePage = function (page) {
        this.currentPage = page;
        this.pageChanged.emit(page);
    };
    PaginationComponent.prototype.previous = function () {
        if (this.currentPage == 1)
            return;
        this.currentPage--;
        this.pageChanged.emit(this.currentPage);
    };
    PaginationComponent.prototype.next = function () {
        if (this.currentPage == this.pages.length)
            return;
        this.currentPage++;
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
        this.apiEndpoint = 'blocknet/xrouter';
        this.baseEndpoint = ''; // http://localhost
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

/***/ "./src/app/shared/services/session.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/session.service.ts ***!
  \****************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_appsettings_model___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/appsettings.model. */ "./src/app/shared/models/appsettings.model..ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SessionService = /** @class */ (function () {
    function SessionService() {
        this.appSettings = new _models_appsettings_model___WEBPACK_IMPORTED_MODULE_1__["AppSettings"]();
        this.isAuthenicated = false;
    }
    SessionService.prototype.setAppSettings = function (appSettings) {
        this.appSettings = appSettings;
    };
    SessionService.prototype.getApiURI = function () {
        return this.appSettings.webApiUrl;
    };
    SessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());



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
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.service */ "./src/app/shared/services/session.service.ts");
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
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
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
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
    ], XrouterApiService);
    return XrouterApiService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



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

module.exports = "<h2>Spv Wallets</h2>\n<service-list \n        [services]=\"spvWallets\" \n        [query-init]=\"query\"\n        (query-changed)=\"onQueryChange($event)\">\n</service-list>"

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

module.exports = ""

/***/ }),

/***/ "./src/app/view-snode/view-snode.component.html":
/*!******************************************************!*\
  !*** ./src/app/view-snode/view-snode.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading else loaded\">\n    Loading page...\n  </div>\n\n<ng-template #loaded>\n    <h1>Service Node</h1>\n    <table class=\"table\">\n      <tbody>\n        <tr>\n          <td>NodePubKey</td>\n          <td>{{nodePubKey}}</td>\n        </tr>\n        <tr>\n          <td>Score</td>\n          <td>{{result?.score}}</td>\n        </tr>\n        <tr>\n          <td>Banned</td>\n          <td>{{result?.banned}}</td>\n        </tr>\n        <tr>\n          <td>Payment Address</td>\n          <td><a href=\"https://chainz.cryptoid.info/block/address.dws?{{result.paymentAddress}}\">{{result?.paymentAddress}}</a></td>\n        </tr>\n        <tr>\n          <td>Fee Default</td>\n          <td>{{result?.feeDefault}} BLOCK</td>\n        </tr>\n      </tbody>\n    </table>\n    <h3>Config</h3>\n    <div class=\"well overflow-visible\" style=\"white-space: pre-line\">\n      <code style=\"word-wrap: break-word;\">{{result?.config}}</code>\n    </div>\n    <h3>Fees</h3>\n    <table class=\"table\">\n      <tbody>\n        <tr *ngFor=\"let fee of result.fees | keyvalue\">\n          <td>{{fee.key}}</td>\n          <td>{{fee.value}} BLOCK</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>Spv Wallet</th>\n            </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let s of result?.spvWallets | paginate: config\">\n            <td><a [routerLink]=\"['/spv-wallets', 'xr::' + s, nodePubKey]\">{{s}}</a></td>\n          </tr>\n        </tbody>\n    </table>\n    <!-- <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls> -->\n    \n  <h3>XCloud Services offered by this Service Node</h3>\n\n  <div *ngIf=\"result?.services.length == 0 else notEmpty\">\n      This service node doesn't offer XCloud Services yet :(\n    </div>\n    \n  <ng-template #notEmpty>\n      <table class=\"table\">\n          <thead>\n              <tr>\n                  <th>Service</th>\n              </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let s of result?.services | paginate: config\">\n              <td><a [routerLink]=\"['/xcloud-services', 'xrs::' + s]\">{{s}}</a></td>\n            </tr>\n          </tbody>\n      </table>\n      <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n    </ng-template>  \n</ng-template>\n"

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

module.exports = ""

/***/ }),

/***/ "./src/app/view-spv-wallet/view-spv-wallet.component.html":
/*!****************************************************************!*\
  !*** ./src/app/view-spv-wallet/view-spv-wallet.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading else loaded\">\n    Loading page...\n  </div>\n\n<ng-template #loaded>\n  <h1>SPV Wallet</h1>\n  <h2>{{spvWalletName}}</h2>\n  \n  <h3>Commands</h3>\n  <table class=\"table\">\n    <thead>\n        <tr>\n            <th>Command</th>\n            <th>Fee (BLOCK)</th>\n            <th>Request Limit</th>\n            <th>Payment Address</th>\n            <th>Disabled</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let c of result.spvConfig.commands\">\n            <td>{{c.command}}</td>\n            <td>{{c.fee}}</td>\n            <td>{{c.requestLimit}}</td>\n            <td>{{c.paymentAddress}}</td>\n            <td>{{c.disabled}}</td>\n        </tr>\n    </tbody>\n  </table>\n  <hr>\n  <h3>Try out a {{ spvWalletName }} command</h3>\n    <form (ngSubmit)=\"onSubmit()\" #spvWalletForm=\"ngForm\">\n      <label for=\"spvCommand\">Spv Command</label>\n      <select class=\"form-control\" [(ngModel)]=\"selectedSpvCommand\" name=\"selectedSpvCommand\">\n          <option *ngFor=\"let c of result.spvConfig.commands\" [value]=\"c.command\">{{c.command}}</option>\n      </select>\n      <div [ngSwitch]=\"selectedSpvCommand\">\n        <div *ngSwitchCase=\"'xrGetBlockCount'\">\n          \n        </div>\n        <div *ngSwitchCase=\"'xrGetBlockHash'\">\n            <label for=\"blockNumber\">Block Number</label>\n            <input type=\"number\" class=\"form-control\" id=\"blockNumber\" ngModel name=\"blockNumber\">\n        </div>\n        <div *ngSwitchCase=\"'xrGetBlock'\">\n            <label for=\"blockHash\">Block Hash</label>\n            <input type=\"text\" class=\"form-control\" id=\"blockHash\" ngModel name=\"blockHash\">\n        </div>\n        <div *ngSwitchCase=\"'xrGetBlocks'\">\n          <h4>Block hash inputs</h4>\n          <button type=\"button\" (click)=\"addBlockHash()\" class=\"btn btn-primary btn-sm\">Add</button> \n          <hr>\n          <div *ngFor=\"let bh of blockHashes; let i = index;\">\n              <label for=\"blockHash-{{i}}\">Blockhash-{{i}}</label>\n              <input type=\"text\" class=\"form-control\" id=\"blockHash-{{i}}\" [(ngModel)]=\"blockHashes[i]\" name=\"blockHash-{{i}}\">\n              <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"removeBlockHash(i)\">Remove</button>\n          </div>\n          <hr>\n        </div>\n        <div *ngSwitchCase=\"'xrGetTransaction'\">\n            <label for=\"txid\">Txid</label>\n            <input type=\"text\" class=\"form-control\" id=\"txid\" ngModel name=\"txid\">\n        </div>\n        <div *ngSwitchCase=\"'xrGetTransactions'\">\n          <h4>TxId inputs</h4>\n          <button type=\"button\" (click)=\"addTxId()\" class=\"btn btn-primary btn-sm\">Add</button> \n          <hr>\n            <div *ngFor=\"let txid of txIds; let i = index;\">\n                <label for=\"txid-{{i}}\">txid-{{i}}</label>\n                <input type=\"text\" class=\"form-control\" id=\"txid-{{i}}\" [(ngModel)]=\"txIds[i]\" name=\"txid-{{i}}\">\n                <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"removeTxId(i)\">Remove</button>\n            </div>\n          <hr>\n        </div>\n        <div *ngSwitchCase=\"'xrDecodeRawTransaction'\">\n            <label for=\"txHex\">Tx Hex</label>\n            <input type=\"text\" class=\"form-control\" id=\"txHex\" ngModel name=\"txHex\">\n        </div>\n        <div *ngSwitchCase=\"'xrSendTransaction'\">\n            <label for=\"signedTx\">Signed Tx</label>\n            <input type=\"text\" class=\"form-control\" id=\"signedTx\" ngModel name=\"signedTx\">\n        </div>\n      </div>\n\n      <label for=\"nodeCount\">Node count</label>\n      <input type=\"number\" class=\"form-control\" id=\"nodeCount\"  [(ngModel)]=\"nodeCount\" name=\"nodeCount\">\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n    </form>\n\n    Elapsed Time: {{ responseTime }}\n    <div class=\"overflow-auto\">\n      <pre style=\"max-height:50vh;\">\n        <div *ngIf=\"resultLoading else resultLoaded\">\n          Executing...\n        </div>\n      <ng-template #resultLoaded> {{ spvWalletCommandResult | json }}</ng-template>\n          \n      </pre>\n    </div>\n     \n  <hr>\n\n  <h3>Offered By</h3>\n  <table class=\"table\">\n    <tbody>\n      <tr>\n        <td>NodePubKey</td>\n        <td><a [routerLink]=\"['/xrouter-snodes', result.node.nodePubKey]\">{{result.node.nodePubKey}}</a></td>\n      </tr>\n      <tr>\n        <td>Score</td>\n        <td>{{result.node.score}}</td>\n      </tr>\n      <tr>\n        <td>Banned</td>\n        <td>{{result.node.banned}}</td>\n      </tr>\n      <tr>\n        <td>Default Fee</td>\n        <td>{{result.node.feeDefault}} BLOCK</td>\n      </tr>\n  \n    </tbody>\n  </table>\n  \n  <h3>Other Service Nodes that offer this service</h3>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>Address</th>\n        <th>Score</th>\n        <th>Banned</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let s of result.otherNodes\">\n        <td><a [routerLink]=\"['/xrouter-snodes', s.nodePubKey]\">{{s.nodePubKey}}</a></td>\n        <td>{{s.score}}</td>\n        <td>{{s.banned}}</td>\n      </tr>\n    </tbody>\n  </table>\n</ng-template>  "

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
/* harmony import */ var _shared_services_responsetime_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/responsetime.service */ "./src/app/shared/services/responsetime.service.ts");
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
        this.blockHashes = [""];
        this.txIds = [""];
        route.params.subscribe(function (p) {
            _this.spvWalletName = p['name'];
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
        callback.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('spvWalletForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ViewSpvWalletComponent.prototype, "spvWalletForm", void 0);
    ViewSpvWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-spv-wallet',
            template: __webpack_require__(/*! ./view-spv-wallet.component.html */ "./src/app/view-spv-wallet/view-spv-wallet.component.html"),
            styles: [__webpack_require__(/*! ./view-spv-wallet.component.css */ "./src/app/view-spv-wallet/view-spv-wallet.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_3__["XrouterApiService"],
            _shared_services_responsetime_service__WEBPACK_IMPORTED_MODULE_7__["ResponseTimeService"],
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

module.exports = ""

/***/ }),

/***/ "./src/app/view-xr-service/view-xr-service.component.html":
/*!****************************************************************!*\
  !*** ./src/app/view-xr-service/view-xr-service.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loading else loaded\">\n  Loading page...\n</div>\n\n<ng-template #loaded>\n    <h1>XCloud Service</h1>\n    <h2>{{serviceName}}</h2>\n    <table class=\"table\">\n      <tbody>\n      <tr>\n        <td>Fee</td>\n        <td>{{result.service.fee}} BLOCK</td>\n      <tr>\n          <td>Parameter Types</td>\n          <td>{{result.service.parameters}}</td>\n      </tr>\n      <tr>\n        <td>Description</td>\n        <td>{{result.service.helpDescription}}</td>\n      </tr>\n      <tr>\n          <td>Usage Instructions</td>\n          <td>xrService {{serviceName}} [{{result.service.parameters}}]</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <h3>Try it out</h3>\n    <form (ngSubmit)=\"onSubmit()\" #serviceForm=\"ngForm\">\n      <div class=\"form-group\" *ngFor=\"let p of result.service.parametersList; let i = index\">\n        <label for=\"param-{{i}}\">Param-{{i}} [{{p}}] </label>\n        <input type=\"text\" class=\"form-control\" id=\"param-{{i}}\" [(ngModel)]=\"parametervalues[i]\" name=\"param-{{i}}\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n    </form> \n    \n    <div class=\"overflow-auto\">\n      <pre style=\"max-height:50vh;\">\n        <div *ngIf=\"resultLoading else resultLoaded\">\n          Executing...\n        </div>\n        <ng-template #resultLoaded> {{ serviceResult | json }}</ng-template>\n      </pre>\n    </div>\n    \n    <h3>Offered By</h3>\n    <table class=\"table\">\n      <tbody>\n        <tr>\n          <td>NodePubKey</td>\n          <td><a [routerLink]=\"['/xrouter-snodes', result.node.nodePubKey]\">{{result.node.nodePubKey}}</a></td>\n        </tr>\n        <tr>\n          <td>Score</td>\n          <td>{{result.node.score}}</td>\n        </tr>\n        <tr>\n          <td>Banned</td>\n          <td>{{result.node.banned}}</td>\n        </tr>\n        <tr>\n          <td>Default Fee</td>\n          <td>{{result.node.feeDefault}} BLOCK</td>\n        </tr>\n    \n      </tbody>\n    </table>\n    \n    <h3>Configuration {{serviceName}}.conf</h3>\n    <div class=\"well\" style=\"white-space: pre-line\">\n      <code>{{result.service.config}}</code>\n    </div>\n    \n    <!-- <h3>Other Service Nodes that offer this service</h3>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Address</th>\n          <th>Score</th>\n          <th>Banned</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let s of result.otherNodes\">\n          <td><a [routerLink]=\"['/xrouter-snodes', s.nodePubKey]\">{{s.nodePubKey}}</a></td>\n          <td>{{s.score}}</td>\n          <td>{{s.banned}}</td>\n        </tr>\n      </tbody>\n    </table>   -->\n</ng-template>  "

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

module.exports = __webpack_require__(/*! C:\Users\lucie\source\repos\XRouter.Service.Explorer\Xrouter.Service.Explorer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map