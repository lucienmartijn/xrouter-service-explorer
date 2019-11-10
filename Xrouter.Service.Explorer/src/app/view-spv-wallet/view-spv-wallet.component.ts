import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { XrouterApiService } from '../shared/services/xrouter.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { finalize } from 'rxjs/operators';
import { HttpRequestTimeInterceptor } from '../shared/http-responsetime-logging/http-responsetime-logging.interceptor';
import { forkJoin, Observable } from 'rxjs';
import { ResponseTimeService } from '../shared/services/responsetime.service';

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
  // spvWalletCommandReply:any;
  // spvWalletCommandError:string;
  responseTime:number;

  constructor(
    private xrouterApiService:XrouterApiService,
    private responseTimeService: ResponseTimeService,
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

  private callXrouterCommand(callback:Observable<object>){
    callback.pipe(
          finalize(() => {
            this.resultLoading = false;
        }))
        .subscribe(result => {
          this.spvWalletCommandResult = result;          
        },
        error => {
          this.spvWalletCommandResult = error;
        });
  }

  onSubmit() {
    this.resultLoading = true;
    let nodecount = this.spvWalletForm.value.nodeCount;
    switch(this.spvWalletForm.value.selectedSpvCommand){
      case "xrGetBlockCount":{  
        this.callXrouterCommand(this.xrouterApiService.GetBlockCount(this.spvWalletName, nodecount));
        break;    
      }
      case "xrGetBlockHash":{
        this.callXrouterCommand(this.xrouterApiService.GetBlockHash(this.spvWalletName, this.spvWalletForm.value.blockNumber, nodecount));        
        break;
      }
      case "xrGetBlock":{
        this.callXrouterCommand(this.xrouterApiService.GetBlock(this.spvWalletName, this.spvWalletForm.value.blockHash, nodecount));
        break;
      }
      case "xrGetBlocks":{
        this.callXrouterCommand(this.xrouterApiService.GetBlocks(this.spvWalletName, this.blockHashes, nodecount));
        break;
      }
      case "xrGetTransaction":{
        this.callXrouterCommand(this.xrouterApiService.GetTransaction(this.spvWalletName, this.spvWalletForm.value.txid, nodecount));
        break;
      }
      case "xrGetTransactions":{
        this.callXrouterCommand(this.xrouterApiService.GetTransactions(this.spvWalletName, this.txIds, nodecount));
        break;
      }
      case "xrDecodeRawTransaction":{
        this.callXrouterCommand(this.xrouterApiService.DecodeRawTransaction(this.spvWalletName, this.spvWalletForm.value.txHex, nodecount))        
        break;
      }
      case "xrSendTransaction":{
        this.callXrouterCommand(this.xrouterApiService.SendTransaction(this.spvWalletName, this.spvWalletForm.value.signedTx));
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


