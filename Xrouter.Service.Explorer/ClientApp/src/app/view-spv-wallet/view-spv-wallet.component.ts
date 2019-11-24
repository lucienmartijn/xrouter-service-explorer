import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { XrouterApiService } from '../shared/services/xrouter.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { finalize, takeUntil } from 'rxjs/operators';
import { HttpRequestTimeInterceptor } from '../shared/http-responsetime-logging/http-responsetime-logging.interceptor';
import { forkJoin, Observable, Subject } from 'rxjs';
import { ResponseTimeService } from '../shared/services/responsetime.service';
import { NgbTabset } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-view-spv-wallet',
  templateUrl: './view-spv-wallet.component.html',
  styleUrls: ['./view-spv-wallet.component.css']
})
export class ViewSpvWalletComponent implements OnInit, OnDestroy {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  navigationSubscription;
  loading:boolean;
  spvWalletName:string;
  nodePubKey:string;
  nodeCount:number;
  result:any;

  @ViewChild('spvWalletForm') spvWalletForm: NgForm;
  @ViewChild('t') tab: NgbTabset;
  selectedSpvCommand:string;
  blockHashes:string[] = [""];
  txIds:string[] = [""];
  
  resultLoading:boolean;
  spvWalletCommandResult:any;
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
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(result => {
          this.result = result;
          this.location.replaceState("/spv-wallets/" + this.spvWalletName + "/" + this.result.node.nodePubKey);
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

  onSelectTryItOut(command:string){
    this.selectedSpvCommand = this.result.spvConfig.commands.find(c => c.command == command).command;
    this.tab.select('try-it-out');
  }

  ngOnInit() {}
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


