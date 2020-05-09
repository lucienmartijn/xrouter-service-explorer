import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient , HttpParams} from '@angular/common/http';
import { BaseService } from './base.service';
import { isNullOrUndefined } from 'util';
import { ConfigurationService } from './configuration.service';
import { ServiceNode } from '../models/servicenode.model';


@Injectable()
export class XrouterService extends BaseService{
  private readonly apiEndpoint = 'xr';
  private baseEndpoint = '/api/';

  constructor(private http:HttpClient, private configurationService:ConfigurationService) {
    super();
   }

  getAllServices(){
    return this.http.get(this.baseEndpoint + this.apiEndpoint + '/getAllServices');
  }

  GetNetworkServices(){
    return this.http.get(this.baseEndpoint + this.apiEndpoint + '/getNetworkServices');
  }

  GetNetworkSpvWallets(){
    return this.http.get(this.baseEndpoint + this.apiEndpoint + '/getNetworkSpvWallets');
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
    url += '&tx_hex=' + txHex;
    url += '&node_count=' + node_count;
    return this.http.get(url);
  }

  SendTransaction(request:any){
    let url = this.baseEndpoint + this.apiEndpoint + '/SendTransaction';
    return this.http.post(url, request);
  }
}
