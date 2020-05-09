import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient , HttpParams} from '@angular/common/http';
import { BaseService } from './base.service';
import { isNullOrUndefined } from 'util';
import { ConfigurationService } from './configuration.service';
import { ServiceNode } from '../models/servicenode.model';


@Injectable()
export class XCloudService extends BaseService{
  private readonly apiEndpoint = 'xrs';
  private baseEndpoint = '/api/';

  constructor(private http:HttpClient, private configurationService:ConfigurationService) {
    super();
   }

  Service(request:any){
    let url = this.baseEndpoint + this.apiEndpoint + '/Service';
    return this.http.post(url, request);
  }

}
