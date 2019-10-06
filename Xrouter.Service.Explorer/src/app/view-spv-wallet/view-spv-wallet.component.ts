import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { XrouterApiService } from '../shared/services/xrouter.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-view-spv-wallet',
  templateUrl: './view-spv-wallet.component.html',
  styleUrls: ['./view-spv-wallet.component.css']
})
export class ViewSpvWalletComponent implements OnInit, OnDestroy {
  navigationSubscription;
  loading:boolean;
  spvWalletName:string;
  nodePubKey:string;
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
        this.nodePubKey = p['nodePubKey'];
        if (isNullOrUndefined(this.spvWalletName)) {
          router.navigate(['']);
          return; 
        }
        this.loading = true;
      });

      this.navigationSubscription = this.router.events.subscribe((e:any) => {
        if(e instanceof NavigationEnd){
          console.log('reload');
          this.initializeData();
        }
      });
    }

  private initializeData(){
    this.xrouterApiService.GetSpvWalletInfo(this.spvWalletName, this.nodePubKey)
        .subscribe(result => {
          this.result = result;
          this.location.replaceState("/spv-wallets/" + this.spvWalletName + "/" + this.result.node.nodePubKey);
          this.spvWalletName = this.spvWalletName.replace("xr::", "");
          this.loading = false;
        },
        error => {
          this.router.navigate(['/error'], {queryParams: error});
        });
  }

  ngOnInit() {}
  ngOnDestroy(){
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}


