import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { XrouterApiService } from '../shared/services/xrouter.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { NgForm } from '@angular/forms';
import { finalize, takeUntil } from 'rxjs/operators';
import { Subject, Observable, forkJoin } from 'rxjs';
import { MyServiceNodesService } from '../shared/services/myservicenodes.service';

@Component({
  selector: 'app-view-xr-service',
  templateUrl: './view-xr-service.component.html',
  styleUrls: ['./view-xr-service.component.css']
})
export class ViewXrServiceComponent implements OnInit, OnDestroy {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  navigationSubscription;
  loading:boolean = true;
  serviceName:string;
  nodePubKey:string;
  result:any;
  snodeVerified:boolean;
  parametervalues:string[];
  active = 1;

  @ViewChild('serviceForm') serviceForm: NgForm;
  serviceResult:any;
  resultLoading:boolean;

  constructor(
    private xrouterApiService:XrouterApiService,
    private router:Router,
    private route:ActivatedRoute, 
    private location:Location,
    private myServiceNodesService: MyServiceNodesService,
    ) 
    { 
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.route.params.subscribe(p => {
        this.serviceName = p['name'];
        this.nodePubKey = p['nodePubKey'];
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
    var observableIsServiceNodeVerified: Observable<boolean> = this.myServiceNodesService.isServiceNodeVerified(this.nodePubKey);
    var observableServiceNodeInfo: Observable<any> = this.xrouterApiService.GetServiceInfo(this.serviceName);

    forkJoin([observableIsServiceNodeVerified, observableServiceNodeInfo]).pipe(takeUntil(this.ngUnsubscribe)).subscribe(([verified, serviceInfo]) =>{
      this.snodeVerified = verified;
      this.result = serviceInfo;
      this.location.replaceState("/xcloud-services/" + this.serviceName + "/" + this.result.node.nodePubKey);
      if(this.result.service.parametersList){
        if(this.result.service.parametersList.length > 0)
          this.parametervalues = new Array<string>(this.result.service.parametersList.length);
      }

      this.loading = false;
      this.resultLoading = false;

    }, err => {
      if(err.status == 404)
      this.router.navigate(['/error'], {queryParams: err});
    });
  }
  ngOnInit() {}

  onSubmit() {  
    this.resultLoading = true; 
    this.xrouterApiService.Service(new ServiceRequest(this.serviceName, this.parametervalues, 1))
    .pipe(
      finalize(() => {
        this.resultLoading = false;
    }))  
    .subscribe(result => {
        this.serviceResult = JSON.stringify(result, undefined, 2);
      },
      error => {
        this.serviceResult = JSON.stringify(error, undefined, 2);
      });    
  }

  ngOnDestroy(){
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
    // This aborts all HTTP requests.
    this.ngUnsubscribe.next();
    // This completes the subject properlly.
    this.ngUnsubscribe.complete();
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


