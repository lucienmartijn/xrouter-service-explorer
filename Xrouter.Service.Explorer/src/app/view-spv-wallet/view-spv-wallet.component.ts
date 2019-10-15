import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { XrouterApiService } from '../shared/services/xrouter.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { finalize } from 'rxjs/operators';

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
  nodeCount:number;
  result:any;

  @ViewChild('spvWalletForm') spvWalletForm: NgForm;
  selectedSpvCommand:string;
  blockHashes:string[] = [""];
  txIds:string[] = [""];
  resultLoading:boolean;
  spvWalletCommandResult:any;

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
          
          this.selectedSpvCommand = this.result.spvConfig.commands[0].command;
          this.nodeCount = 1;
          this.resultLoading = false;
        },
        error => {
          this.router.navigate(['/error'], {queryParams: error});
        });
  }

  onSubmit() {
    this.resultLoading = true;
    let nodecount = this.spvWalletForm.value.nodeCount;
    switch(this.spvWalletForm.value.selectedSpvCommand){
      case "xrGetBlockCount":{
        this.xrouterApiService.GetBlockCount(this.spvWalletName, nodecount)
        .pipe(
          finalize(() => {
            this.resultLoading = false;
        }))
        .subscribe(result => {
          this.spvWalletCommandResult = result;
        },
        error => {
          this.spvWalletCommandResult = error;
        });
        break;
      }
      case "xrGetBlockHash":{
        this.xrouterApiService.GetBlockHash(this.spvWalletName, this.spvWalletForm.value.blockNumber, nodecount)
        .pipe(
          finalize(() => {
            this.resultLoading = false;
        }))
        .subscribe(result => {
          this.spvWalletCommandResult = result;
        },
        error => {
          this.spvWalletCommandResult = error;
        });
        break;
      }
      case "xrGetBlock":{
        this.xrouterApiService.GetBlock(this.spvWalletName, this.spvWalletForm.value.blockHash, nodecount)
        .pipe(
          finalize(() => {
            this.resultLoading = false;
        })).subscribe(result => {
          this.spvWalletCommandResult = result;
        },
        error => {
          this.spvWalletCommandResult = error;
        });
        break;
      }
      case "xrGetBlocks":{
        this.xrouterApiService.GetBlocks(this.spvWalletName, this.blockHashes, nodecount)
        .pipe(
          finalize(() => {
            this.resultLoading = false;
        })).subscribe(result => {
          this.spvWalletCommandResult = result;
        },
        error => {
          this.spvWalletCommandResult = error;
        });
        break;
      }
      case "xrGetTransaction":{
        this.xrouterApiService.GetTransaction(this.spvWalletName, this.spvWalletForm.value.txid, nodecount)
        .pipe(
          finalize(() => {
            this.resultLoading = false;
        })).subscribe(result => {
          this.spvWalletCommandResult = result;
        },
        error => {
          this.spvWalletCommandResult = error;
        });
        break;
      }
      case "xrGetTransactions":{
        this.xrouterApiService.GetTransactions(this.spvWalletName, this.txIds, nodecount)
        .pipe(
          finalize(() => {
            this.resultLoading = false;
        })).subscribe(result => {
          this.spvWalletCommandResult = result;
        },
        error => {
          this.spvWalletCommandResult = error;
        });
        break;
      }
      case "xrDecodeRawTransaction":{
        this.xrouterApiService.DecodeRawTransaction(this.spvWalletName, this.spvWalletForm.value.txHex, nodecount)
        .pipe(
          finalize(() => {
            this.resultLoading = false;
        })).subscribe(result => {
          this.spvWalletCommandResult = result;
        },
        error => {
          this.spvWalletCommandResult = error;
        });
        break;
      }
      case "xrSendTransaction":{
        this.xrouterApiService.SendTransaction(this.spvWalletName, this.spvWalletForm.value.signedTx)
        .pipe(
          finalize(() => {
            this.resultLoading = false;
        })).subscribe(result => {
          this.spvWalletCommandResult = result;
        },
        error => {
          this.spvWalletCommandResult = error;
        });
        break;
      }
    }
  }

  addTxId(){
    this.txIds.push("");
  }

  removeTxId(index: number){
    this.txIds.splice(index, 1);
  }

  addBlockHash(){
    this.blockHashes.push("");
  }

  removeBlockHash(index: number){
    this.blockHashes.splice(index, 1);
  }

  ngOnInit() {}
  ngOnDestroy(){
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
}


