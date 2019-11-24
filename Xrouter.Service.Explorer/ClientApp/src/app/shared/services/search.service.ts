import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SessionService } from './session.service';
import { BaseService } from './base.service';

@Injectable()
export class SearchService extends BaseService {
// clientID: string = 'PAST YOUR CLIENT ID';
// baseUrl: string = 'https://api.spotify.com/v1/search?type=artist&limit=10&client_id=' + this.clientID + '&q=';

private readonly apiEndpoint = 'blocknet/xrouter';
private baseEndpoint = ''; // http://localhost

constructor(private http: HttpClient, private sessionService:SessionService) { 
    super();
    this.baseEndpoint = sessionService.getApiURI();
}
search(queryString: string) {
      let _URL = this.baseEndpoint + this.apiEndpoint + "/?searchString=" + queryString;
      return this.http.get(_URL);
  }
}