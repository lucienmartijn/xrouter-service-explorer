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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/pagination/pagination.component */ "./src/app/shared/pagination/pagination.component.ts");
/* harmony import */ var _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service-list/service-list.component */ "./src/app/service-list/service-list.component.ts");
/* harmony import */ var _xr_services_xr_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./xr-services/xr-services.component */ "./src/app/xr-services/xr-services.component.ts");
/* harmony import */ var _spv_wallets_spv_wallets_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./spv-wallets/spv-wallets.component */ "./src/app/spv-wallets/spv-wallets.component.ts");
/* harmony import */ var _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/services/xrouter.service */ "./src/app/shared/services/xrouter.service.ts");
/* harmony import */ var _view_xr_service_view_xr_service_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./view-xr-service/view-xr-service.component */ "./src/app/view-xr-service/view-xr-service.component.ts");
/* harmony import */ var _view_snode_view_snode_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./view-snode/view-snode.component */ "./src/app/view-snode/view-snode.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/services/session.service */ "./src/app/shared/services/session.service.ts");
/* harmony import */ var _shared_error_handling_http_error_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/error-handling/http-error.interceptor */ "./src/app/shared/error-handling/http-error.interceptor.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _shared_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"],
                _service_list_service_list_component__WEBPACK_IMPORTED_MODULE_10__["ServiceListComponent"],
                _xr_services_xr_services_component__WEBPACK_IMPORTED_MODULE_11__["XrServicesComponent"],
                _spv_wallets_spv_wallets_component__WEBPACK_IMPORTED_MODULE_12__["SpvWalletsComponent"],
                _view_xr_service_view_xr_service_component__WEBPACK_IMPORTED_MODULE_14__["ViewXrServiceComponent"],
                _view_snode_view_snode_component__WEBPACK_IMPORTED_MODULE_15__["ViewSnodeComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], pathMatch: 'full' },
                    { path: 'xrouter-services', component: _spv_wallets_spv_wallets_component__WEBPACK_IMPORTED_MODULE_12__["SpvWalletsComponent"] },
                    { path: 'xcloud-services', component: _xr_services_xr_services_component__WEBPACK_IMPORTED_MODULE_11__["XrServicesComponent"] },
                    { path: 'xcloud-services/:name', component: _view_xr_service_view_xr_service_component__WEBPACK_IMPORTED_MODULE_14__["ViewXrServiceComponent"] },
                    { path: 'xrouter-snode/:nodePubKey', component: _view_snode_view_snode_component__WEBPACK_IMPORTED_MODULE_15__["ViewSnodeComponent"] },
                    { path: 'spv-wallets', component: _spv_wallets_spv_wallets_component__WEBPACK_IMPORTED_MODULE_12__["SpvWalletsComponent"] },
                    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"] }
                ])
            ],
            providers: [
                _shared_services_xrouter_service__WEBPACK_IMPORTED_MODULE_13__["XrouterApiService"],
                _shared_services_session_service__WEBPACK_IMPORTED_MODULE_17__["SessionService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _shared_error_handling_http_error_interceptor__WEBPACK_IMPORTED_MODULE_18__["HttpErrorInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse' [attr.aria-expanded]='isExpanded' (click)='toggle()'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n            <a class='navbar-brand' [routerLink]='[\"/\"]'>blocknet_xrouter</a>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse' [ngClass]='{ \"in\": isExpanded }'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]='[\"link-active\"]' [routerLinkActiveOptions]='{ exact: true }'>\r\n                    <a [routerLink]='[\"/\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]='[\"link-active\"]'>\r\n                    <a [routerLink]='[\"/xrouter-services\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-th-list'></span> XRouter Services\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]='[\"link-active\"]'>\r\n                    <a [routerLink]='[\"/xcloud-services\"]' (click)='collapse()'>\r\n                        <span class='glyphicon glyphicon-th-list'></span> XCloud Services\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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
    XrouterApiService.prototype.GetNodeInfo = function (nodePubKey) {
        var url = this.baseEndpoint + this.apiEndpoint + '/GetNodeInfo/?nodePubKey=' + nodePubKey;
        console.log(url);
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

module.exports = "<h2>Xrouter Services</h2>\n<service-list \n        [services]=\"spvWallets\" \n        [query-init]=\"query\"\n        (query-changed)=\"onQueryChange($event)\">\n</service-list>"

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

module.exports = "<div *ngIf=\"isLoaded\">\n    <h1>Service Node</h1>\n    <table class=\"table\">\n      <tbody>\n        <tr>\n          <td>NodePubKey</td>\n          <td>{{nodePubKey}}</td>\n        </tr>\n        <tr>\n          <td>Score</td>\n          <td>{{result.score}}</td>\n        </tr>\n        <tr>\n          <td>Banned</td>\n          <td>{{result.banned}}</td>\n        </tr>\n        <tr>\n          <td>Payment Address</td>\n          <td><a href=\"https://chainz.cryptoid.info/block/address.dws?{{result.paymentAddress}}\">{{result.paymentAddress}}</a></td>\n        </tr>\n        <tr>\n          <td>Fee Default</td>\n          <td>{{result.feeDefault}} BLOCK</td>\n        </tr>\n      </tbody>\n    </table>\n    <h3>Fees</h3>\n    <table class=\"table\">\n      <tbody>\n        <tr *ngFor=\"let fee of result.fees | keyvalue\">\n          <td>{{fee.key}}</td>\n          <td>{{fee.value}} BLOCK</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class=\"form-group\">\n      <h3>SPV Wallets</h3>\n        <label for=\"spvWallets\"></label>\n        <select id=\"spvWallets\" class=\"form-control\" [(ngModel)]=\"selectedWalletName\" (change)=\"onWalletChange()\">\n            <option *ngFor=\"let wallet of result.spvWallets\" [value]=\"wallet\">{{ wallet }}</option>\n        </select>  \n    </div>\n    <table class=\"table\">\n      <thead>\n          <tr>\n              <th>Command</th>\n              <th>Fee (BLOCK)</th>\n              <th>Request Limit</th>\n              <th>Payment Address</th>\n              <th>Disabled</th>\n          </tr>\n      </thead>\n      <tbody>\n          <tr *ngFor=\"let c of selectedWallet.commands\">\n              <td>{{c.command}}</td>\n              <td>{{c.fee}}</td>\n              <td>{{c.requestLimit}}</td>\n              <td>{{c.paymentAddress}}</td>\n              <td>{{c.disabled}}</td>\n          </tr>\n      </tbody>\n  </table>\n  <h3>Services offered by this Service Node</h3>\n  <div>\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>Service</th>\n            </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let s of result?.services | paginate: config\">\n            <td><a [routerLink]=\"['/xrouter-services', 'xrs::' + s]\">{{s}}</a></td>\n          </tr>\n        </tbody>\n    </table>\n    <pagination-controls (pageChange)=\"pageChanged($event)\"></pagination-controls>\n  </div>\n</div>  "

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
            if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(_this.nodePubKey)) {
                router.navigate(['']);
                return;
            }
        });
    }
    ViewSnodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.xrouterApiService.GetNodeInfo(this.nodePubKey)
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
            _this.location.replaceState("xrouter-services/" + _this.serviceName + "/" + _this.result.node.nodePubKey);
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