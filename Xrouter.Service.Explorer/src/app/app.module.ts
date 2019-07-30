import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'xrouter-snodes', component: ServiceNodeListComponent },
      { path: 'spv-wallets', component: SpvWalletsComponent },
      { path: 'spv-wallets/:name', component: ViewSpvWalletComponent },
      { path: 'spv-wallets/:name/:nodePubKey', component: ViewSpvWalletComponent },
      { path: 'xcloud-services', component: XrServicesComponent },
      { path: 'xcloud-services/:name', component: ViewXrServiceComponent },
      { path: 'xcloud-services/:name/:NodePubKey', component: ViewXrServiceComponent },
      { path: 'xrouter-snode/:nodePubKey', component: ViewSnodeComponent},
      { path: 'xrouter-snode/:nodePubKey/:service', component: ViewSnodeComponent},
      { path: '**', component: PageNotFoundComponent }
      
    ], { useHash: true })
  ],
  providers: [
    XrouterApiService, 
    SessionService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
