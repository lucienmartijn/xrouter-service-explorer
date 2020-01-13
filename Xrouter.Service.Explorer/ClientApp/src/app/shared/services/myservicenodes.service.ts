import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient , HttpParams} from '@angular/common/http';
import { BaseService } from './base.service';
import { isNullOrUndefined } from 'util';
import { ConfigurationService } from './configuration.service';


@Injectable()
export class MyServiceNodesService extends BaseService{
  private readonly apiEndpoint = 'Servicenode';
  private baseEndpoint = '/api/';

  constructor(private http:HttpClient) {
    super();
   }

  GetServiceNode(id: number){
    return this.http.get(this.baseEndpoint + this.apiEndpoint + '/GetServiceNode/?id=' + id);
  }

  GetServiceNodes(id : string){
    return this.http.get(this.baseEndpoint + this.apiEndpoint + '/GetServiceNodes/?id=' + id);
  }

  create(servicenode:any){
    return this.http.post(this.baseEndpoint + this.apiEndpoint, servicenode);
  }

  delete(id:number){
    return this.http.delete(this.baseEndpoint + this.apiEndpoint + '/'+ id);
  }



}
