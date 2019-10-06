import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { isNullOrUndefined } from 'util';
import { SessionService } from './session.service';


@Injectable()
export class XrouterApiService extends BaseService{
  private readonly apiEndpoint = 'blocknet/xrouter';
  private baseEndpoint = ''; // http://localhost

  constructor(private http:HttpClient, private sessionService:SessionService) {
    super();
    this.baseEndpoint = sessionService.getApiURI();
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
    return this.http.get<XrouterServiceInfo>(url);
  }

  GetSpvWalletInfo(service: string, nodePubKey?: string, node_count:number = 1){
    let url = this.baseEndpoint + this.apiEndpoint + '/GetSpvWalletInfo/?service=' + service;
    if(!isNullOrUndefined(nodePubKey)){
      url += '&nodePubKey=' + nodePubKey;
    }
    url += '&node_count=' + node_count;
    return this.http.get<XrouterServiceInfo>(url);
  }

  GetNodeInfo(nodePubKey:string, service?:string, node_count:number = 1){
    let url = this.baseEndpoint + this.apiEndpoint + '/GetNodeInfo/?nodePubKey=' + nodePubKey;
    if(!isNullOrUndefined(service)){
      url += '&service=' + service;
    }
    url += '&node_count=' + node_count;
    return this.http.get<ServiceNode>(url);
  }

  GetServiceNodeList(){
    let url = this.baseEndpoint + this.apiEndpoint + '/GetServiceNodeList'
    return this.http.get<any[]>(url);
  }

  Service(request:any){
    let url = this.baseEndpoint + this.apiEndpoint + '/Service';
    return this.http.post(url, request);
  }
}
