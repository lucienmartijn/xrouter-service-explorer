import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient , HttpParams} from '@angular/common/http';
import { BaseService } from './base.service';
import { isNullOrUndefined } from 'util';
import { SessionService } from './session.service';
import { ConfigurationService } from './configuration.service';


@Injectable()
export class XrouterApiService extends BaseService{
  private readonly apiEndpoint = 'blocknet/xrouter';
  private baseEndpoint = ''; // http://localhost

  constructor(private http:HttpClient, private configurationService:ConfigurationService) {
    super();
    this.baseEndpoint = configurationService.getWebApiUrl;
   }

  GetNetworkServices(){
    return this.http.get(this.baseEndpoint + this.apiEndpoint + '/getNetworkServices');
  }

  GetNetworkSpvWallets(){
    return this.http.get(this.baseEndpoint + this.apiEndpoint + '/getNetworkSpvWallets');
  }

  GetServiceInfo(service: string, nodePubKey?: string, node_count:number = 1){
    let url = this.baseEndpoint + this.apiEndpoint + '/GetServiceInfo/?service=' + service;
    if(!isNullOrUndefined(nodePubKey)){
      url += '&nodePubKey=' + nodePubKey;
    }
    url += '&node_count=' + node_count;
    return this.http.get(url);
  }

  GetSpvWalletInfo(service: string, nodePubKey?: string, node_count:number = 1){
    let url = this.baseEndpoint + this.apiEndpoint + '/GetSpvWalletInfo/?service=' + service;
    if(!isNullOrUndefined(nodePubKey)){
      url += '&nodePubKey=' + nodePubKey;
    }
    url += '&node_count=' + node_count;
    return this.http.get(url);
  }

  GetNodeInfo(nodePubKey:string, service?:string, node_count:number = 1){
    let url = this.baseEndpoint + this.apiEndpoint + '/GetNodeInfo/?nodePubKey=' + nodePubKey;
    if(!isNullOrUndefined(service)){
      url += '&service=' + service;
    }
    url += '&node_count=' + node_count;
    return this.http.get(url);
  }

  GetServiceNodeList(filter){
    let url = this.baseEndpoint + this.apiEndpoint + '/GetServiceNodeList' + '?' + this.toQueryString(filter);
    return this.http.get<any[]>(url);
  }

  private toQueryString(obj) {  
    var parts = [];
    for (var property in obj) {
      var value = obj[property];
      if (value != null && value != undefined) 
        parts.push(encodeURIComponent(property) + '=' + encodeURIComponent(value));
    }

    return parts.join('&');
  }

  GetServiceNodeCount(){
    return this.http.get<number>(this.baseEndpoint + this.apiEndpoint + '/GetServiceNodeCount');
  }

  Service(request:any){
    let url = this.baseEndpoint + this.apiEndpoint + '/Service';
    return this.http.post(url, request);
  }

  GetBlockCount(blockchain:string, node_count:number = 1){
    let url = this.baseEndpoint + this.apiEndpoint + '/GetBlockCount?blockchain=' + blockchain;
    url += '&node_count=' + node_count;
    return this.http.get(url);
  }

  GetBlockHash(blockchain:string, blockNumber:string, node_count:number = 1){
    let url = this.baseEndpoint + this.apiEndpoint + '/GetBlockHash?blockchain=' + blockchain;
    url += '&block_number=' + blockNumber;
    url += '&node_count=' + node_count;

    return this.http.get(url);
  }

  GetBlock(blockchain:string, blockHash:string, node_count:number = 1){
    let url = this.baseEndpoint + this.apiEndpoint + '/GetBlock?blockchain=' + blockchain;
    url += '&block_hash=' + blockHash;
    url += '&node_count=' + node_count;
    return this.http.get(url);
  }

  GetBlocks(blockchain:string, blockHashes:string[], node_count:number = 1){
    let url = this.baseEndpoint + this.apiEndpoint + '/GetBlocks';

    let params = new HttpParams();
    params = params.append('blockchain', blockchain);
    params = params.append('block_hashes', JSON.stringify(blockHashes));
    params = params.append('node_count', node_count.toString());
    return this.http.get(url, {params: params});
  }

  GetTransaction(blockchain:string, txid:string, node_count:number = 1){
    let url = this.baseEndpoint + this.apiEndpoint + '/GetTransaction?blockchain=' + blockchain;
    url += '&txid=' + txid;
    url += '&node_count=' + node_count;
    return this.http.get(url);
  }

  GetTransactions(blockchain:string, txids:string[], node_count:number = 1){
    let url = this.baseEndpoint + this.apiEndpoint + '/GetTransactions';

    let params = new HttpParams();
    params = params.append('blockchain', blockchain);
    params = params.append('txids', JSON.stringify(txids));
    params = params.append('node_count', node_count.toString());
    return this.http.get(url, {params: params});
  }

  DecodeRawTransaction(blockchain:string, txHex:string, node_count:number = 1){
    let url = this.baseEndpoint + this.apiEndpoint + '/DecodeRawTransaction?blockchain=' + blockchain;
    url += '&txHex=' + txHex;
    url += '&node_count=' + node_count;
    return this.http.get(url);
  }

  SendTransaction(blockchain:string, signedTx:string){
    let url = this.baseEndpoint + this.apiEndpoint + '/SendTransaction?blockchain=' + blockchain;
    url += '&signedTx=' + signedTx;
    return this.http.get(url);
  }



}
