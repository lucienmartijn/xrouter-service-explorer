import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PaginationComponent,
    ServiceListComponent,
    XrServicesComponent,
    SpvWalletsComponent,
    ViewXrServiceComponent,
    ViewSnodeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'xrouter-services', component: XrServicesComponent },
      { path: 'xrouter-services/:name', component: ViewXrServiceComponent },
      { path: 'xrouter-snode/:nodePubKey', component: ViewSnodeComponent},
      { path: 'spv-wallets', component: SpvWalletsComponent },
      { path: '**', component: PageNotFoundComponent }
      
      
    ])
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
