import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { AppComponent } from './app.component';
import { interceptorProviders } from './interceptors';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { XrServicesComponent } from './xr-services/xr-services.component';
import { SpvWalletsComponent } from './spv-wallets/spv-wallets.component';
import { XrouterApiService } from './shared/services/xrouter.service';
import { ViewXrServiceComponent } from './view-xr-service/view-xr-service.component';
import { ViewSnodeComponent } from './view-snode/view-snode.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpErrorInterceptor } from './shared/error-handling/http-error.interceptor';
import { ViewSpvWalletComponent } from './view-spv-wallet/view-spv-wallet.component';
import { ServiceNodeListComponent } from './service-node-list/service-node-list.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NavigatorService } from './shared/services/navigator.service.';
import { ErrorComponent } from './error/error.component';
import { RpcConsoleComponent } from './rpc-console/rpc-console.component';
import { ResponseTimeService } from './shared/services/responsetime.service';
import { SearchService } from './shared/services/search.service';
import { ConfigurationService } from './shared/services/configuration.service';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AccountService } from './shared/services/account.service';
import { checkIfUserIsAuthenticated } from './check-login-intializer';
import { MyServiceNodesComponent } from './my-service-nodes/my-service-nodes.component';
import { MyServiceNodesService } from './shared/services/myservicenodes.service';
import { NgbdModalComponentModule } from './my-service-nodes/my-service-nodes.module';
import { AuthGuard } from './auth.guard';
import { CustomMinDirective } from './shared/directives/custom-min-validator';
import { CommentService } from './shared/services/comment.service';
import { CommentsComponent } from './comments/comments.component';
import { CommentNewComponent } from './comment-new/comment-new.component';
import { CommentComponent } from './comment/comment.component';
import { TabsComponent } from './shared/tabs/tabs.component';
import { TabComponent } from './shared/tabs/tab.component';




const appInitializerFn = (appConfig: ConfigurationService) => {
  return () => {
    return appConfig.loadConfig();
  };
}
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CommentsComponent,
    CommentComponent,
    CommentNewComponent,
    FooterComponent,
    ServiceNodeListComponent,
    ServiceListComponent,
    XrServicesComponent,
    SpvWalletsComponent,
    ViewXrServiceComponent,
    ViewSpvWalletComponent,
    ViewSnodeComponent,
    SearchFormComponent,  
    SignInComponent,  
    TabsComponent,
    TabComponent,
    RpcConsoleComponent,
    ErrorComponent,
    PageNotFoundComponent,
    CustomMinDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbdModalComponentModule,
    NgxPaginationModule,
    AutocompleteLibModule,  
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'xrouter-snodes', component: ServiceNodeListComponent },
      { path: 'spv-wallets', component: SpvWalletsComponent, runGuardsAndResolvers: 'always' },
      { path: 'spv-wallets/:name', component: ViewSpvWalletComponent, runGuardsAndResolvers: 'always' },
      { path: 'spv-wallets/:name/:nodePubKey', component: ViewSpvWalletComponent, runGuardsAndResolvers: 'always' },
      { path: 'xcloud-services', component: XrServicesComponent, runGuardsAndResolvers: 'always' },
      { path: 'xcloud-services/:name', component: ViewXrServiceComponent, runGuardsAndResolvers: 'always' },
      { path: 'xcloud-services/:name/:nodePubKey', component: ViewXrServiceComponent, runGuardsAndResolvers: 'always' },
      { path: 'xrouter-snodes/:nodePubKey', component: ViewSnodeComponent, runGuardsAndResolvers: 'always' },
      { path: 'xrouter-snodes/:nodePubKey/:service', component: ViewSnodeComponent, runGuardsAndResolvers: 'always' },
      { path: 'my-service-nodes/:id', component: MyServiceNodesComponent, canActivate: [AuthGuard]},
      { path: 'rpc-console', component: RpcConsoleComponent},
      { path: 'error', component: ErrorComponent},
      { path: '**', component: PageNotFoundComponent }
      
    ], { 
      useHash: true,
      onSameUrlNavigation: 'reload',
      anchorScrolling: 'enabled'
    })
  ],
  providers: [
    XrouterApiService, 
    MyServiceNodesService,
    CommentService,
    SearchService,
    AccountService,
    NavigatorService,
    ResponseTimeService,
    // {
      //   provide: HTTP_INTERCEPTORS,
      //   useClass: HttpErrorInterceptor,
      //   multi: true
      // },
      ConfigurationService, 
      {
        provide: APP_INITIALIZER,
        useFactory: checkIfUserIsAuthenticated,
        multi: true,
        deps: [AccountService]
      },
      interceptorProviders,
      AuthGuard,
  ],
  bootstrap: [AppComponent],
  entryComponents:[CommentNewComponent]
})
export class AppModule {}
