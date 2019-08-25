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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service-list/service-list.component */ "./src/app/service-list/service-list.component.ts");
/* harmony import */ var _xr_services_xr_services_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./xr-services/xr-services.component */ "./src/app/xr-services/xr-services.component.ts");
/* harmony import */ var _spv_wallets_spv_wallets_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./spv-wallets/spv-wallets.component */ "./src/app/spv-wallets/spv-wallets.component.ts");
/* harmony import */ var _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/services/xrouter.service */ "./src/app/shared/services/xrouter.service.ts");
/* harmony import */ var _view_xr_service_view_xr_service_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./view-xr-service/view-xr-service.component */ "./src/app/view-xr-service/view-xr-service.component.ts");
/* harmony import */ var _view_snode_view_snode_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./view-snode/view-snode.component */ "./src/app/view-snode/view-snode.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_error_handling_http_error_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/error-handling/http-error.interceptor */ "./src/app/shared/error-handling/http-error.interceptor.ts");
/* harmony import */ var _view_spv_wallet_view_spv_wallet_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./view-spv-wallet/view-spv-wallet.component */ "./src/app/view-spv-wallet/view-spv-wallet.component.ts");
/* harmony import */ var _service_node_list_service_node_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service-node-list/service-node-list.component */ "./src/app/service-node-list/service-node-list.component.ts");
/* harmony import */ var _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./search-form/search-form.component */ "./src/app/search-form/search-form.component.ts");
/* harmony import */ var _shared_services_navigator_service___WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/services/navigator.service. */ "./src/app/shared/services/navigator.service..ts");
/* harmony import */ var _search_form_error_search_form_error_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./search-form-error/search-form-error.component */ "./src/app/search-form-error/search-form-error.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_10__["NavMenuComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_12__["PaginationComponent"],
                _service_node_list_service_node_list_component__WEBPACK_IMPORTED_MODULE_23__["ServiceNodeListComponent"],
                _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_13__["ServiceListComponent"],
                _xr_services_xr_services_component__WEBPACK_IMPORTED_MODULE_14__["XrServicesComponent"],
                _spv_wallets_spv_wallets_component__WEBPACK_IMPORTED_MODULE_15__["SpvWalletsComponent"],
                _view_xr_service_view_xr_service_component__WEBPACK_IMPORTED_MODULE_17__["ViewXrServiceComponent"],
                _view_spv_wallet_view_spv_wallet_component__WEBPACK_IMPORTED_MODULE_22__["ViewSpvWalletComponent"],
                _view_snode_view_snode_component__WEBPACK_IMPORTED_MODULE_18__["ViewSnodeComponent"],
                _search_form_search_form_component__WEBPACK_IMPORTED_MODULE_24__["SearchFormComponent"],
                _search_form_error_search_form_error_component__WEBPACK_IMPORTED_MODULE_26__["SearchFormErrorComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], pathMatch: 'full' },
                    { path: 'xrouter-snodes', component: _service_node_list_service_node_list_component__WEBPACK_IMPORTED_MODULE_23__["ServiceNodeListComponent"] },
                    { path: 'spv-wallets', component: _spv_wallets_spv_wallets_component__WEBPACK_IMPORTED_MODULE_15__["SpvWalletsComponent"] },
                    { path: 'spv-wallets/:name', component: _view_spv_wallet_view_spv_wallet_component__WEBPACK_IMPORTED_MODULE_22__["ViewSpvWalletComponent"] },
                    { path: 'spv-wallets/:name/:nodePubKey', component: _view_spv_wallet_view_spv_wallet_component__WEBPACK_IMPORTED_MODULE_22__["ViewSpvWalletComponent"] },
                    { path: 'xcloud-services', component: _xr_services_xr_services_component__WEBPACK_IMPORTED_MODULE_14__["XrServicesComponent"] },
                    { path: 'xcloud-services/:name', component: _view_xr_service_view_xr_service_component__WEBPACK_IMPORTED_MODULE_17__["ViewXrServiceComponent"] },
                    { path: 'xcloud-services/:name/:NodePubKey', component: _view_xr_service_view_xr_service_component__WEBPACK_IMPORTED_MODULE_17__["ViewXrServiceComponent"] },
                    { path: 'xrouter-snodes/:nodePubKey', component: _view_snode_view_snode_component__WEBPACK_IMPORTED_MODULE_18__["ViewSnodeComponent"] },
                    { path: 'xrouter-snodes/:nodePubKey/:service', component: _view_snode_view_snode_component__WEBPACK_IMPORTED_MODULE_18__["ViewSnodeComponent"] },
                    { path: 'search-not-found', component: _search_form_error_search_form_error_component__WEBPACK_IMPORTED_MODULE_26__["SearchFormErrorComponent"] },
                    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"] }
                ], { useHash: true })
            ],
            providers: [
                _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_16__["XrouterApiService"],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_20__["SessionService"],
                _shared_services_navigator_service___WEBPACK_IMPORTED_MODULE_25__["NavigatorService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _shared_error_handling_http_error_interceptor__WEBPACK_IMPORTED_MODULE_21__["HttpErrorInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse' [attr.aria-expanded]='isExpanded' (click)='toggle()'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]='[\"/\"]'>XRouter Service Explorer</a>\r\n            <search-form></search-form>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse' [ngClass]='{ \"in\": isExpanded }'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n                    <a [routerLink]='[\"/\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]='[\"link-active\"]'>\r\n                    <a [routerLink]='[\"/xrouter-snodes\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-th-list'></span> XRouter Service Nodes\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]='[\"link-active\"]'>\r\n                    <a [routerLink]='[\"/spv-wallets\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-th-list'></span> SPV Wallets\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]='[\"link-active\"]'>\r\n                    <a [routerLink]='[\"/xcloud-services\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-th-list'></span> XCloud Services\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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

/***/ "./src/app/search-form-error/search-form-error.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/search-form-error/search-form-error.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/search-form-error/search-form-error.component.html":
/*!********************************************************************!*\
  !*** ./src/app/search-form-error/search-form-error.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Search not found</p>"

/***/ }),

/***/ "./src/app/search-form-error/search-form-error.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/search-form-error/search-form-error.component.ts ***!
  \******************************************************************/
/*! exports provided: SearchFormErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFormErrorComponent", function() { return SearchFormErrorComponent; });
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

var SearchFormErrorComponent = /** @class */ (function () {
    function SearchFormErrorComponent() {
    }
    SearchFormErrorComponent.prototype.ngOnInit = function () { };
    SearchFormErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search-form-error',
            template: __webpack_require__(/*! ./search-form-error.component.html */ "./src/app/search-form-error/search-form-error.component.html"),
            styles: [__webpack_require__(/*! ./search-form-error.component.css */ "./src/app/search-form-error/search-form-error.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchFormErrorComponent);
    return SearchFormErrorComponent;
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

module.exports = "<!-- <form [formGroup]=\"form\" class=\"navbar-form navbar-left\" (ngSubmit)=\"onSubmit()\" role=\"search\">\n    <div class=\"form-group\">\n        <input \n            maxlength=\"64\"\n            formControlName=\"searchField\"\n            type=\"text\" \n            class=\"form-control\" \n            placeholder=\"Search for Service, NodePubKey, Address\">\n    </div>\n    <button value=\"{{ 'action.find'}}\" type=\"submit\" class=\"btn btn-default\">Submit</button>\n</form> -->\n\n<div>\n \n  <mat-form-field>\n    <input matInput placeholder=\"Search\" aria-label=\"State\" [matAutocomplete]=\"auto\" [formControl]=\"searchMoviesCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngIf=\"isLoading\" class=\"is-loading\">Loading...</mat-option>\n      <ng-container *ngIf=\"!isLoading\">\n        <mat-option *ngFor=\"let movie of filteredMovies\" [value]=\"movie.Title\">\n          <span><b>{{movie.Title}}</b> ({{movie.Year}})</span>\n        </mat-option>\n      </ng-container>\n    </mat-autocomplete>\n  </mat-form-field>\n \n  <br>\n \n<ng-container *ngIf=\"errorMsg; else elseTemplate\">\n  {{errorMsg}}\n</ng-container>\n<ng-template #elseTemplate>\n  <h5>Selected Value: {{searchMoviesCtrl.value}}</h5>\n</ng-template>\n \n</div>"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent(http) {
        this.http = http;
        // form: FormGroup;
        // services:any;
        // constructor(
        //   private formBuilder: FormBuilder, 
        //   private navigatorService: NavigatorService,
        //   private xrouterService: XrouterApiService) {
        //   this.createForm();
        //  }
        // ngOnInit() {
        // }
        // private createForm(){
        //   //const pattern = `(${NODEPUBKEY_REGEX})|(${ADDRESS_REGEX})|(${TXHASH_REGEX})`;
        //   this.form = this.formBuilder.group({
        //     searchField: [null, [Validators.required]]
        //   });
        // }
        // onSubmit(){
        //   const searchField = this.form.get('searchField').value;
        //   if(searchField == null){
        //     this.navigatorService.go("search-not-found");
        //     return;
        //   }
        //   if(new RegExp(NODEPUBKEY_REGEX).test(searchField)){
        //     console.log("nodepubkey");
        //   } else if (new RegExp(ADDRESS_REGEX).test(searchField)){
        //     console.log("address");
        //   } else if (new RegExp(TXHASH_REGEX).test(searchField)){
        //     console.log("txhash");
        //   } else {
        //     console.log("service");
        //   }
        //   console.log("service");
        // }
        // private onNothingFound(){
        // }
        this.searchServicesCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.isLoading = false;
    }
    SearchFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchServicesCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            _this.errorMsg = "";
            _this.filteredServices = [];
            _this.isLoading = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (value) { return _this.http.get("https://localhost:44305/api/Blocknet/Xrouter/?searchString=" + value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
            _this.isLoading = false;
        })); }))
            .subscribe(function (data) {
            // if (data['Search'] == undefined) {
            //   this.errorMsg = data['Error'];
            //   this.filteredServices = [];
            // } else {
            //   this.errorMsg = "";
            //   this.filteredServices = data['Search'];
            // }
            console.log(data);
            console.log(_this.filteredServices);
        });
    };
    SearchFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search-form',
            template: __webpack_require__(/*! ./search-form.component.html */ "./src/app/search-form/search-form.component.html"),
            styles: [__webpack_require__(/*! ./search-form.component.css */ "./src/app/search-form/search-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



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

module.exports = "<h2>Service Node List</h2>\n<table class=\"table\">\n        <thead>\n          <tr>\n                <th>Rank</th>\n                <th>NodePubKey</th>\n                <!-- <th>Address</th> -->\n                <th>Spv Wallets</th>\n                <th></th>\n                <th>XCloud Services</th>\n                <th></th>\n          </tr> \n        </thead>\n        <tbody>\n                <tr *ngFor=\"let sn of serviceNodes; let i = index\">\n                        <td>{{sn.rank}}</td>\n                        <td>                                \n                                <a href=\"javascript:void(0)\" (click)=\"onNodeClick(i)\"> {{sn.nodePubKey}}</a>\n                        </td>\n                        <!-- <td><a href=\"https://chainz.cryptoid.info/block/address.dws?{{sn.addr}}\">{{sn.addr}}</a></td> -->\n                        <td>\n                                <div class=\"form-group\">\n                                        <label for=\"spvWallets\"></label>\n                                        <select id=\"spvWallets\" class=\"form-control\" (change)=\"onSpvWalletChange(i, $event)\">\n                                                <option *ngFor=\"let w of sn.spvWallets\" [value]=\"w\">{{ w }} </option>\n                                        </select>   \n                                </div> \n                        </td>\n                        <td><a href=\"javascript:void(0)\" (click)=\"onSpvWalletClick(i)\">View</a></td>\n                        <td>\n                                <div *ngIf = \"sn.xCloudServices.length > 0\">\n                                        <div class=\"form-group\">\n                                                <label for=\"xcloudServices\"></label>\n                                                <select id=\"xcloudServices\" class=\"form-control\" (change)=\"onXCloudServiceChange(i, $event)\">\n                                                        <option *ngFor=\"let s of sn.xCloudServices\" [value]=\"s\">{{ s }} </option>\n                                                </select>   \n                                        </div> \n                                </div>\n                                \n                        </td>\n                        <td><a href=\"javascript:void(0)\" (click)=\"onXCloudServiceClick(i)\">View</a></td>\n                </tr>\n        </tbody>\n</table>"

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
    ServiceNodeListComponent.prototype.onSpvWalletClick = function (index) {
        if (this.selectedSpvWallets[index].includes('x'))
            this.router.navigate(['/spv-wallets', this.selectedSpvWallets[index], this.serviceNodes[index].nodePubKey]);
    };
    ServiceNodeListComponent.prototype.onXCloudServiceClick = function (index) {
        if (this.selectedXCloudServices[index].includes('x'))
            this.router.navigate(['/xcloud-services', this.selectedXCloudServices[index], this.serviceNodes[index].nodePubKey]);
    };
    ServiceNodeListComponent.prototype.onNodeClick = function (index) {
        var node = this.serviceNodes[index];
        var service = "xr::" + node.xWallets[0];
        this.router.navigate(['/xrouter-snodes', node.nodePubKey, "xr::" + service]);
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
            var errorMessage = '';
            console.log(error);
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = "Error: " + error.error.message;
            }
            else {
                // server-side error
                errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
            }
            window.alert(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
        }));
    };
    return HttpErrorInterceptor;
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
    NavigatorService.prototype.serviceNodeDetails = function (address) {
        this.go('/xrouter-snodes/' + address);
    };
    NavigatorService.prototype.spvWalletDetails = function (blockhash) {
        this.go('/spv-wallets/' + blockhash);
    };
    NavigatorService.prototype.xCloudServiceDetails = function (txid) {
        this.go('/xcloud-services/' + txid);
    };
    NavigatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavigatorService);
    return NavigatorService;
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

module.exports = "<div *ngIf=\"isLoaded\">\n    <h1>Service Node</h1>\n    <table class=\"table\">\n      <tbody>\n        <tr>\n          <td>NodePubKey</td>\n          <td>{{nodePubKey}}</td>\n        </tr>\n        <tr>\n          <td>Score</td>\n          <td>{{result?.score}}</td>\n        </tr>\n        <tr>\n          <td>Banned</td>\n          <td>{{result?.banned}}</td>\n        </tr>\n        <tr>\n          <td>Payment Address</td>\n          <td><a href=\"https://chainz.cryptoid.info/block/address.dws?{{result.paymentAddress}}\">{{result?.paymentAddress}}</a></td>\n        </tr>\n        <tr>\n          <td>Fee Default</td>\n          <td>{{result?.feeDefault}} BLOCK</td>\n        </tr>\n      </tbody>\n    </table>\n    <h3>Config</h3>\n    <div class=\"well\" style=\"white-space: pre-line\">\n      <code>{{result?.config}}</code>\n    </div>\n    <h3>Fees</h3>\n    <table class=\"table\">\n      <tbody>\n        <tr *ngFor=\"let fee of result.fees | keyvalue\">\n          <td>{{fee.key}}</td>\n          <td>{{fee.value}} BLOCK</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class=\"form-group\">\n      <h3>SPV Wallets</h3>\n        <label for=\"spvWallets\"></label>\n        <select id=\"spvWallets\" class=\"form-control\" [(ngModel)]=\"selectedWalletName\" (change)=\"onWalletChange()\">\n            <option *ngFor=\"let wallet of result.spvWallets\" [value]=\"wallet\">{{ wallet }}</option>\n        </select>  \n    </div>\n    <table class=\"table\">\n      <thead>\n          <tr>\n              <th>Command</th>\n              <th>Fee (BLOCK)</th>\n              <th>Request Limit</th>\n              <th>Payment Address</th>\n              <th>Disabled</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let c of selectedWallet.commands\">\n              <td>{{c.command}}</td>\n              <td>{{c.fee}}</td>\n              <td>{{c.requestLimit}}</td>\n              <td>{{c.paymentAddress}}</td>\n              <td>{{c.disabled}}</td>\n          </tr>\n      </tbody>\n  </table>\n  <h3>Services offered by this Service Node</h3>\n  <div>\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>Service</th>\n            </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let s of result?.services | paginate: config\">\n            <td><a [routerLink]=\"['/xcloud-services', 'xrs::' + s]\">{{s}}</a></td>\n          </tr>\n        </tbody>\n    </table>\n    <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n  </div>\n</div>  "

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
        this.isLoaded = false;
        route.params.subscribe(function (p) {
            _this.nodePubKey = p['nodePubKey'];
            _this.service = p['service'];
            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(_this.nodePubKey)) {
                router.navigate(['']);
                return;
            }
        });
    }
    ViewSnodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.xrouterApiService.GetNodeInfo(this.nodePubKey, this.service)
            .subscribe(function (result) {
            _this.result = result;
            _this.selectedWalletName = _this.result.spvConfigs[0].spvWallet;
            _this.onWalletChange();
            _this.isLoaded = true;
            _this.config = {
                itemsPerPage: 10,
                currentPage: 1,
                totalItems: _this.result.services.length
            };
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

module.exports = "<div *ngIf=\"isLoaded\">\n    <h1>SPV Wallet</h1>\n    <h2>{{spvWalletName}}</h2>\n    <table class=\"table\">\n      <tbody>\n        <tr>\n          <td>Usage Instructions</td>\n          <td>xrService {{spvWalletName}}</td>\n      </tr>\n      </tbody>\n    </table>\n\n    <h2>Commands</h2>\n    <table class=\"table\">\n      <thead>\n          <tr>\n              <th>Command</th>\n              <th>Fee (BLOCK)</th>\n              <th>Request Limit</th>\n              <th>Payment Address</th>\n              <th>Disabled</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let c of result.spvConfig.commands\">\n              <td>{{c.command}}</td>\n              <td>{{c.fee}}</td>\n              <td>{{c.requestLimit}}</td>\n              <td>{{c.paymentAddress}}</td>\n              <td>{{c.disabled}}</td>\n          </tr>\n      </tbody>\n  </table>\n    \n    <h3>Offered By</h3>\n    <table class=\"table\">\n      <tbody>\n        <tr>\n          <td>NodePubKey</td>\n          <td><a [routerLink]=\"['/xrouter-snode', result.node.nodePubKey]\">{{result.node.nodePubKey}}</a></td>\n        </tr>\n        <tr>\n          <td>Score</td>\n          <td>{{result.node.score}}</td>\n        </tr>\n        <tr>\n          <td>Banned</td>\n          <td>{{result.node.banned}}</td>\n        </tr>\n        <tr>\n          <td>Default Fee</td>\n          <td>{{result.node.feeDefault}} BLOCK</td>\n        </tr>\n    \n      </tbody>\n    </table>\n    \n    <h3>Other Service Nodes that offer this service</h3>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Address</th>\n          <th>Score</th>\n          <th>Banned</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let s of result.otherNodes\">\n          <td><a [routerLink]=\"['/xrouter-snode', s.nodePubKey]\">{{s.nodePubKey}}</a></td>\n          <td>{{s.score}}</td>\n          <td>{{s.banned}}</td>\n        </tr>\n      </tbody>\n    </table>\n</div>\n"

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





var ViewSpvWalletComponent = /** @class */ (function () {
    function ViewSpvWalletComponent(xrouterApiService, router, route, location) {
        var _this = this;
        this.xrouterApiService = xrouterApiService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.isLoaded = false;
        route.params.subscribe(function (p) {
            _this.spvWalletName = p['name'];
            _this.nodePubKey = p['nodePubKey'];
            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(_this.spvWalletName)) {
                router.navigate(['']);
                return;
            }
        });
    }
    ViewSpvWalletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.xrouterApiService.GetSpvWalletInfo(this.spvWalletName, this.nodePubKey)
            .subscribe(function (result) {
            _this.result = result;
            _this.location.replaceState("/spv-wallets/" + _this.spvWalletName + "/" + _this.result.node.nodePubKey);
            _this.spvWalletName = _this.spvWalletName.replace("xr::", "");
            _this.isLoaded = true;
        });
    };
    ViewSpvWalletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-spv-wallet',
            template: __webpack_require__(/*! ./view-spv-wallet.component.html */ "./src/app/view-spv-wallet/view-spv-wallet.component.html"),
            styles: [__webpack_require__(/*! ./view-spv-wallet.component.css */ "./src/app/view-spv-wallet/view-spv-wallet.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_2__["XrouterApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
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

module.exports = "<div *ngIf=\"isLoaded\">\n    <h1>XCloud Service</h1>\n    <h2>{{serviceName}}</h2>\n    <table class=\"table\">\n      <tbody>\n      <tr>\n        <td>Fee</td>\n        <td>{{result.service.fee}} BLOCK</td>\n      <tr>\n          <td>Parameter Types</td>\n          <td>{{result.service.parameters}}</td>\n      </tr>\n      <tr>\n        <td>Description</td>\n        <td>{{result.service.helpDescription}}</td>\n      </tr>\n      <tr>\n          <td>Usage Instructions</td>\n          <td>xrService {{serviceName}} [{{result.service.parameters}}]</td>\n      </tr>\n      </tbody>\n    </table>\n    \n    <h3>Offered By</h3>\n    <table class=\"table\">\n      <tbody>\n        <tr>\n          <td>NodePubKey</td>\n          <td><a [routerLink]=\"['/xrouter-snode', result.node.nodePubKey]\">{{result.node.nodePubKey}}</a></td>\n        </tr>\n        <tr>\n          <td>Score</td>\n          <td>{{result.node.score}}</td>\n        </tr>\n        <tr>\n          <td>Banned</td>\n          <td>{{result.node.banned}}</td>\n        </tr>\n        <tr>\n          <td>Default Fee</td>\n          <td>{{result.node.feeDefault}} BLOCK</td>\n        </tr>\n    \n      </tbody>\n    </table>\n    \n    <h3>Configuration {{serviceName}}.conf</h3>\n    <div class=\"well\" style=\"white-space: pre-line\">\n      <code>{{result.service.config}}</code>\n    </div>\n    \n    <h3>Other Service Nodes that offer this service</h3>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Address</th>\n          <th>Score</th>\n          <th>Banned</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let s of result.otherNodes\">\n          <td><a [routerLink]=\"['/xrouter-snode', s.nodePubKey]\">{{s.nodePubKey}}</a></td>\n          <td>{{s.score}}</td>\n          <td>{{s.banned}}</td>\n        </tr>\n      </tbody>\n    </table>\n</div>\n"

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
        this.isLoaded = false;
        route.params.subscribe(function (p) {
            _this.serviceName = p['name'];
            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(_this.serviceName)) {
                router.navigate(['']);
                return;
            }
        });
    }
    ViewXrServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.xrouterApiService.GetServiceInfo(this.serviceName)
            .subscribe(function (result) {
            _this.result = result;
            _this.location.replaceState("/xcloud-services/" + _this.serviceName + "/" + _this.result.node.nodePubKey);
            _this.serviceName = _this.serviceName.replace("xrs::", "");
            _this.isLoaded = true;
        });
    };
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

module.exports = __webpack_require__(/*! C:\Users\lucie\source\repos\Xrouter.Service.Explorer\Xrouter.Service.Explorer\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map