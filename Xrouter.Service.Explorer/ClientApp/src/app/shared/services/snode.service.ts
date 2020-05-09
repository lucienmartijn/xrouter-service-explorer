import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient , HttpParams} from '@angular/common/http';
import { BaseService } from './base.service';
import { isNullOrUndefined } from 'util';
import { ConfigurationService } from './configuration.service';
import { ServiceNode } from '../models/servicenode.model';


@Injectable()
export class ServiceNodeService extends BaseService{
  private readonly apiEndpoint = 'servicenode';
  private baseEndpoint = '/api/';

  constructor(private http:HttpClient) {
    super();
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

  FilterXCloudServiceServiceNode(filter){
    let url = this.baseEndpoint + this.apiEndpoint + '/FilterXCloudServiceServiceNode' + '?' + this.toQueryString(filter);
    return this.http.get<any>(url);
  }

  GetServiceNodeList(filter?){
    let url = this.baseEndpoint + this.apiEndpoint + '/GetServiceNodeList' + '?' + this.toQueryString(filter);
    return this.http.get<any>(url);
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
}
