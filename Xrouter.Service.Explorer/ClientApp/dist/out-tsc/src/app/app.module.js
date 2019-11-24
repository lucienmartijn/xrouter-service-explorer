"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var ngx_pagination_1 = require("ngx-pagination");
var autocomplete_1 = require("@angular/material/autocomplete");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var app_component_1 = require("./app.component");
var interceptors_1 = require("./interceptors");
var nav_menu_component_1 = require("./nav-menu/nav-menu.component");
var home_component_1 = require("./home/home.component");
var pagination_component_1 = require("./shared/pagination/pagination.component");
var service_list_component_1 = require("./service-list/service-list.component");
var xr_services_component_1 = require("./xr-services/xr-services.component");
var spv_wallets_component_1 = require("./spv-wallets/spv-wallets.component");
var xrouter_service_1 = require("./shared/services/xrouter.service");
var view_xr_service_component_1 = require("./view-xr-service/view-xr-service.component");
var view_snode_component_1 = require("./view-snode/view-snode.component");
var page_not_found_component_1 = require("./page-not-found/page-not-found.component");
var session_service_1 = require("./shared/services/session.service");
var view_spv_wallet_component_1 = require("./view-spv-wallet/view-spv-wallet.component");
var service_node_list_component_1 = require("./service-node-list/service-node-list.component");
var search_form_component_1 = require("./search-form/search-form.component");
var navigator_service_1 = require("./shared/services/navigator.service.");
var error_component_1 = require("./error/error.component");
var rpc_console_component_1 = require("./rpc-console/rpc-console.component");
var responsetime_service_1 = require("./shared/services/responsetime.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_menu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                pagination_component_1.PaginationComponent,
                service_node_list_component_1.ServiceNodeListComponent,
                service_list_component_1.ServiceListComponent,
                xr_services_component_1.XrServicesComponent,
                spv_wallets_component_1.SpvWalletsComponent,
                view_xr_service_component_1.ViewXrServiceComponent,
                view_spv_wallet_component_1.ViewSpvWalletComponent,
                view_snode_component_1.ViewSnodeComponent,
                search_form_component_1.SearchFormComponent,
                rpc_console_component_1.RpcConsoleComponent,
                error_component_1.ErrorComponent,
                page_not_found_component_1.PageNotFoundComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                http_1.HttpClientModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                forms_1.ReactiveFormsModule,
                ngx_pagination_1.NgxPaginationModule,
                autocomplete_1.MatAutocompleteModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
                    { path: 'xrouter-snodes', component: service_node_list_component_1.ServiceNodeListComponent },
                    { path: 'spv-wallets', component: spv_wallets_component_1.SpvWalletsComponent },
                    { path: 'spv-wallets/:name', component: view_spv_wallet_component_1.ViewSpvWalletComponent, runGuardsAndResolvers: 'always' },
                    { path: 'spv-wallets/:name/:nodePubKey', component: view_spv_wallet_component_1.ViewSpvWalletComponent, runGuardsAndResolvers: 'always' },
                    { path: 'xcloud-services', component: xr_services_component_1.XrServicesComponent },
                    { path: 'xcloud-services/:name', component: view_xr_service_component_1.ViewXrServiceComponent, runGuardsAndResolvers: 'always' },
                    { path: 'xcloud-services/:name/:NodePubKey', component: view_xr_service_component_1.ViewXrServiceComponent, runGuardsAndResolvers: 'always' },
                    { path: 'xrouter-snodes/:nodePubKey', component: view_snode_component_1.ViewSnodeComponent },
                    { path: 'xrouter-snodes/:nodePubKey/:service', component: view_snode_component_1.ViewSnodeComponent },
                    { path: 'rpc-console', component: rpc_console_component_1.RpcConsoleComponent },
                    { path: 'error', component: error_component_1.ErrorComponent },
                    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
                ], {
                    useHash: true,
                    onSameUrlNavigation: 'reload'
                })
            ],
            providers: [
                xrouter_service_1.XrouterApiService,
                session_service_1.SessionService,
                navigator_service_1.NavigatorService,
                responsetime_service_1.ResponseTimeService,
                // {
                //   provide: HTTP_INTERCEPTORS,
                //   useClass: HttpErrorInterceptor,
                //   multi: true
                // },
                interceptors_1.interceptorProviders
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map