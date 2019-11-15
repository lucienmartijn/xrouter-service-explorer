import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavigatorService } from '../shared/services/navigator.service.';
import { XrouterApiService } from '../shared/services/xrouter.service';

import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../shared/services/base.service';
import { SessionService } from '../shared/services/session.service';

// const NODEPUBKEY_REGEX = '^[0][a-zA-Z0-9]{65}$'; 
// const ADDRESS_REGEX = '^[B][a-zA-Z0-9]{33}$';
// const TXHASH_REGEX = '[a-zA-Z0-9]{64}$';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent extends BaseService implements OnInit {
  private readonly apiEndpoint = 'blocknet/xrouter';
  private baseEndpoint = ''; // http://localhost

  // searchServicesCtrl = new FormControl();
  // filteredServices: any;
  // isLoading = false;
  // errorMsg: string;

  constructor(
    private http: HttpClient,
    private xrouterService: XrouterApiService,
    private navigatorService: NavigatorService,
    private sessionService:SessionService
  ) {
    super();
    this.baseEndpoint = sessionService.getApiURI();
  }

  // ngOnInit() {
  //   this.searchServicesCtrl.valueChanges
  //     .pipe(
  //       debounceTime(500),
  //       tap(() => {
  //         this.errorMsg = "";
  //         this.filteredServices = [];
  //         this.isLoading = true;
  //       }),
  //       switchMap(value => this.http.get(this.baseEndpoint + this.apiEndpoint + "/?searchString=" + value)
  //         .pipe(
  //           finalize(() => {
  //             this.isLoading = false
  //           }),
  //         )
  //       )
  //     )
  //     .subscribe(data => {
  //       if (data['items'] == undefined) {
  //         //this.errorMsg = data['Error'];
  //         this.filteredServices = [];
  //       } else {
  //         this.errorMsg = "";
  //         this.filteredServices = data['items'];
  //       }
  //     });
  // }

  // onSelectionChanged(event: MatAutocompleteSelectedEvent) {
  //   let serviceName = event.option.value as string;

  //   if(serviceName.includes("xrs::")){
  //     this.navigatorService.xCloudServiceDetails(serviceName);
  //   } else{
  //     this.navigatorService.spvWalletDetails(serviceName);
  //   }
  // }

  keyword = 'name';
  services:any;
  //services = [
    //  {
    //    id: 1,
    //    name: 'Usa'
    //  },
    //  {
    //    id: 2,
    //    name: 'England'
    //  }
  //];
 
  ngOnInit(){
    this.xrouterService.GetNetworkServices().subscribe(
      
      res => {
        console.log(res);
        this.services = res;
      }
    )
  }
  selectEvent(item) {
    let service = item.name as string;
    if(service.includes("xrs::")){
      this.navigatorService.xCloudServiceDetails(service);
    } else{
      this.navigatorService.spvWalletDetails(service);
    }
    // do something with selected item
  }
 
  onChangeSearch(val: string) {
    console.log("on change search")
    console.log(val);
    this.http.get(this.baseEndpoint + this.apiEndpoint + "/?searchString=" + val).subscribe(
      data => {
        console.log(data);
        this.services = data;
            
      }
    );
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    console.log(e);
    // do something when input is focused
  }
}


