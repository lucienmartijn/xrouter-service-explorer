import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { ServiceListComponent } from './service-list/service-list.component';
import { XrServicesComponent } from './xr-services/xr-services.component';
import { SpvWalletsComponent } from './spv-wallets/spv-wallets.component';
import { XrouterApiService } from './shared/services/xrouter.service';
import { ViewXrServiceComponent } from './view-xr-service/view-xr-service.component';
import { ViewSnodeComponent } from './view-snode/view-snode.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SessionService } from './shared/services/session.service';
import { HttpErrorInterceptor } from './shared/error-handling/http-error.interceptor';
import { ViewSpvWalletComponent } from './view-spv-wallet/view-spv-wallet.component';
import { ServiceNodeListComponent } from './service-node-list/service-node-list.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NavigatorService } from './shared/services/navigator.service.';
import { ErrorComponent } from './error/error.component';
import { RpcConsoleComponent } from './rpc-console/rpc-console.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PaginationComponent,
    ServiceNodeListComponent,
    ServiceListComponent,
    XrServicesComponent,
    SpvWalletsComponent,
    ViewXrServiceComponent,
    ViewSpvWalletComponent,
    ViewSnodeComponent,
    SearchFormComponent,
    RpcConsoleComponent,
    ErrorComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'xrouter-snodes', component: ServiceNodeListComponent },
      { path: 'spv-wallets', component: SpvWalletsComponent },
      { path: 'spv-wallets/:name', component: ViewSpvWalletComponent, runGuardsAndResolvers: 'always' },
      { path: 'spv-wallets/:name/:nodePubKey', component: ViewSpvWalletComponent, runGuardsAndResolvers: 'always' },
      { path: 'xcloud-services', component: XrServicesComponent },
      { path: 'xcloud-services/:name', component: ViewXrServiceComponent, runGuardsAndResolvers: 'always' },
      { path: 'xcloud-services/:name/:NodePubKey', component: ViewXrServiceComponent, runGuardsAndResolvers: 'always' },
      { path: 'xrouter-snodes/:nodePubKey', component: ViewSnodeComponent},
      { path: 'xrouter-snodes/:nodePubKey/:service', component: ViewSnodeComponent},
      { path: 'rpc-console', component: RpcConsoleComponent},
      { path: 'error', component: ErrorComponent},
      { path: '**', component: PageNotFoundComponent }
      
    ], { 
      useHash: true,
      onSameUrlNavigation: 'reload'
    })
  ],
  providers: [
    XrouterApiService, 
    SessionService,
    NavigatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
