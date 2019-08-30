import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { XrouterApiService } from '../shared/services/xrouter.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-view-xr-service',
  templateUrl: './view-xr-service.component.html',
  styleUrls: ['./view-xr-service.component.css']
})
export class ViewXrServiceComponent implements OnInit {
  loading:boolean = true;
  serviceName:string;
  result:XrouterServiceInfo;

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
    }

  ngOnInit() {
    this.xrouterApiService.GetServiceInfo(this.serviceName)
      .subscribe(result => {
        this.result = result;
        this.location.replaceState("/xcloud-services/" + this.serviceName + "/" + this.result.node.nodePubKey);
        this.serviceName = this.serviceName.replace("xrs::","");
        this.loading = false;
      },
      error => {
        this.router.navigate(['/error'], {queryParams: error});
      });
      
  }

}


