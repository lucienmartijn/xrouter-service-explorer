import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { XrouterApiService } from '../shared/services/xrouter.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-view-snode',
  templateUrl: './view-snode.component.html',
  styleUrls: ['./view-snode.component.css']
})
export class ViewSnodeComponent implements OnInit {
  isLoaded:boolean = false;
  config:any;
  nodePubKey:string;
  selectedWalletName:string;
  selectedWallet:any;
  result:any;

  constructor(
    private xrouterApiService:XrouterApiService,
    private router:Router,
    private route:ActivatedRoute, 
    private location:Location
  ) 
  { 
    route.params.subscribe(p => {
      this.nodePubKey = p['nodePubKey'];
      if (isNullOrUndefined(this.nodePubKey)) {
        router.navigate(['']);
        return; 
      }
    });
  }

  ngOnInit() {
    this.xrouterApiService.GetNodeInfo(this.nodePubKey)
      .subscribe(result => {
        this.result = result;
        this.selectedWalletName = this.result.spvConfigs[0].spvWallet;
        this.onWalletChange();
        this.isLoaded = true;

        this.config = {
          itemsPerPage: 10,
          currentPage: 1,
          totalItems: this.result.services.length
        };
      });
  }

  onWalletChange(){
    this.selectedWallet = this.result.spvConfigs.find(c => c.spvWallet === this.selectedWalletName);
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}