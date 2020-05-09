import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient , HttpParams} from '@angular/common/http';
import { BaseService } from './base.service';
import { isNullOrUndefined } from 'util';
import { ConfigurationService } from './configuration.service';
import { ServiceNode } from '../models/servicenode.model';


@Injectable()
export class StatisticsService extends BaseService{
  private readonly apiEndpoint = 'stats';
  private baseEndpoint = '/api/';

  constructor(private http:HttpClient) {
    super();
   }

  GetServiceNodeCount(){
    return this.http.get<number>(this.baseEndpoint + this.apiEndpoint + '/GetServiceNodeCount');
  }

  GetEnterpriseXRouterCount(){
    return this.http.get<number>(this.baseEndpoint + this.apiEndpoint + '/GetEnterpriseXRouterServiceNodeCount');
  }
}
