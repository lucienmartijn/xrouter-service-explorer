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

  GetNodeInfo(nodePubKey:string){
    let url = this.baseEndpoint + this.apiEndpoint + '/GetNodeInfo/?nodePubKey=' + nodePubKey;
    console.log(url);
    return this.http.get<ServiceNode>(url);
  }
}
