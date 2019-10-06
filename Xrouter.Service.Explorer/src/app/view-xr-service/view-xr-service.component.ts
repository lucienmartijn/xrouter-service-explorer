import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { XrouterApiService } from '../shared/services/xrouter.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-view-xr-service',
  templateUrl: './view-xr-service.component.html',
  styleUrls: ['./view-xr-service.component.css']
})
export class ViewXrServiceComponent implements OnInit, OnDestroy {
  navigationSubscription;
  loading:boolean = true;
  serviceName:string;
  result:XrouterServiceInfo;
  parametervalues:string[];

  serviceResult:any;

  constructor(
    private xrouterApiService:XrouterApiService,
    private router:Router,
    private route:ActivatedRoute, 
    private location:Location
    ) 
    { 
      route.params.subscribe(p => {
        this.serviceName = p['name'];
        if (isNullOrUndefined(this.serviceName)) {
          router.navigate(['']);
          return; 
        }
      });

      this.navigationSubscription = this.router.events.subscribe((e:any) => {
        if(e instanceof NavigationEnd){
          this.initializeData();
        }
      });
    }

  private initializeData(){
    this.xrouterApiService.GetServiceInfo(this.serviceName)
      .subscribe(result => {
        this.result = result;
        this.location.replaceState("/xcloud-services/" + this.serviceName + "/" + this.result.node.nodePubKey);
        this.serviceName = this.serviceName.replace("xrs::","");
        if(result.service.parametersList)
          this.parametervalues = new Array<string>(result.service.parametersList.length);

        this.loading = false;
      },
      error => {
        this.router.navigate(['/error'], {queryParams: error});
      });
  }
  ngOnInit() {}

  onSubmit() { 
    
    this.xrouterApiService.Service(new ServiceRequest('xrs::' + this.serviceName, this.parametervalues, 1))
      .subscribe(result => {
        this.serviceResult = result;
      },
      error => {
        this.router.navigate(['/error'], {queryParams: error})
      });    
  }

  ngOnDestroy(){
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}

class ServiceRequest{
  constructor(
    service:string,
    parameters:string[],
    nodecount:number
  ) { 
    this.service = service;
    this.parameters = parameters;
    this.nodecount = nodecount;
   }
  
   service:string;
   parameters:string[];
   nodecount:number;
}


