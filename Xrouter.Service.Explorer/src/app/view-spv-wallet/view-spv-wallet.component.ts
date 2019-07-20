import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { XrouterApiService } from '../shared/services/xrouter.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-view-spv-wallet',
  templateUrl: './view-spv-wallet.component.html',
  styleUrls: ['./view-spv-wallet.component.css']
})
export class ViewSpvWalletComponent implements OnInit {
  isLoaded:boolean = false;
  spvWalletName:string;
  result:XrouterServiceInfo;

  constructor(
    private xrouterApiService:XrouterApiService,
    private router:Router,
    private route:ActivatedRoute, 
    private location:Location
    ) 
    { 
      route.params.subscribe(p => {
        this.spvWalletName = p['name'];
        if (isNullOrUndefined(this.spvWalletName)) {
          router.navigate(['']);
          return; 
        }
        
      });
    }

  ngOnInit() {
    this.xrouterApiService.GetServiceInfo(this.spvWalletName)
      .subscribe(result => {
        this.result = result;
        this.location.replaceState("xrouter-services/" + this.spvWalletName + "/" + this.result.node.nodePubKey);
        this.spvWalletName = this.spvWalletName.replace("xr::","");
        this.isLoaded = true;
      });
      
  }

}


