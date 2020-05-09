import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable()
export class SearchService extends BaseService {
    private readonly apiEndpoint = 'search';
    private baseEndpoint = '/api/';

    constructor(private http: HttpClient) { 
        super();
    }
    search(queryString: string) {
        let _URL = this.baseEndpoint + this.apiEndpoint + "/?searchString=" + queryString;
        return this.http.get(_URL);
    }
}