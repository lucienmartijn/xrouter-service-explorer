import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
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
import { MyServiceNodesService } from '../shared/services/myservicenodes.service';

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
  shortSpvWalletName:string;
  nodePubKey:string;
  nodeCount:number;
  minNodeCount:number = 1;
  result:any;
  snodeVerified:boolean;
  
  active = 1;
  selectedSpvCommand:string;
  onCommandSelectedSubject: Subject<any> = new Subject<any>();

  @ViewChild('f') f: NgForm;
  blockHashes:string[] = [""];
  txIds:string[] = [""];
  
  resultLoading:boolean;
  spvWalletCommandResult:any;
  responseTime:number;

  constructor(
    private xrouterApiService:XrouterApiService,
    private router:Router,
    private route:ActivatedRoute, 
    private location:Location,
    private myServiceNodesService: MyServiceNodesService,
    ) 
    { 
      route.params.subscribe(p => {
        this.spvWalletName = p['name'];
        this.shortSpvWalletName = this.spvWalletName.replace("xr::", "");
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
    var observableIsServiceNodeVerified: Observable<boolean> = this.myServiceNodesService.isServiceNodeVerified(this.nodePubKey);
    var observableServiceNodeInfo: Observable<any> = this.xrouterApiService.GetSpvWalletInfo(this.spvWalletName, this.nodePubKey);

    forkJoin([observableIsServiceNodeVerified, observableServiceNodeInfo]).pipe(takeUntil(this.ngUnsubscribe)).subscribe(([verified, spvInfo]) =>{
      this.loading = false;
      this.snodeVerified = verified;
      this.result = spvInfo;
      this.location.replaceState("/spv-wallets/" + this.spvWalletName + "/" + this.result.node.nodePubKey);
      this.selectedSpvCommand = this.result.spvConfig.commands[0].command;
      this.nodeCount = 1;
      this.resultLoading = false;

    }, err => {
      if(err.status == 404)
      this.router.navigate(['/error'], {queryParams: err});
    });
  }

  private callXrouterCommand(callback:Observable<object>){
    callback.pipe(
          finalize(() => {
            this.resultLoading = false;
        }))
        .subscribe(result => {
          this.spvWalletCommandResult = JSON.stringify(result, undefined, 2);
        },
        error => {
          this.spvWalletCommandResult = JSON.stringify(error, undefined, 2);
        });
  }

  onSubmit() {
    this.resultLoading = true;
    let nodecount = this.f.value.nodeCount;
    switch(this.f.value.selectedSpvCommand){
      case "xrGetBlockCount":{  
        this.callXrouterCommand(this.xrouterApiService.GetBlockCount(this.spvWalletName, nodecount));
        break;    
      }
      case "xrGetBlockHash":{
        this.callXrouterCommand(this.xrouterApiService.GetBlockHash(this.spvWalletName, this.f.value.blockNumber, nodecount));        
        break;
      }
      case "xrGetBlock":{
        this.callXrouterCommand(this.xrouterApiService.GetBlock(this.spvWalletName, this.f.value.blockHash, nodecount));
        break;
      }
      case "xrGetBlocks":{
        this.callXrouterCommand(this.xrouterApiService.GetBlocks(this.spvWalletName, this.blockHashes, nodecount));
        break;
      }
      case "xrGetTransaction":{
        this.callXrouterCommand(this.xrouterApiService.GetTransaction(this.spvWalletName, this.f.value.txid, nodecount));
        break;
      }
      case "xrGetTransactions":{
        this.callXrouterCommand(this.xrouterApiService.GetTransactions(this.spvWalletName, this.txIds, nodecount));
        break;
      }
      case "xrDecodeRawTransaction":{
        this.callXrouterCommand(this.xrouterApiService.DecodeRawTransaction(this.spvWalletName, this.f.value.txHex, nodecount))        
        break;
      }
      case "xrSendTransaction":{
        this.callXrouterCommand(this.xrouterApiService.SendTransaction(this.spvWalletName, this.f.value.signedTx));
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

    this.onCommandSelectedSubject.next({title: 'Try it out', command: this.selectedSpvCommand})
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


