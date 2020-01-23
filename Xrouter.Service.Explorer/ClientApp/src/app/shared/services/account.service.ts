
import { Injectable, Inject } from '@angular/core';
import { BaseService } from "./base.service";

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs'; 
import { DOCUMENT } from '@angular/common';

// Add the RxJS Observable operators we need in this app.
import { tap } from 'rxjs/operators';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable()
export class AccountService {
  private _isUserAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isUserAuthenticated: Observable<boolean> = this._isUserAuthenticatedSubject.asObservable();
  
  constructor(@Inject(DOCUMENT) private document: Document, private httpClient: HttpClient) { }

  updateUserAuthenticationStatus(){
    return this.httpClient.get<boolean>(`/api/account/isAuthenticated`, {withCredentials: true})
    .pipe(tap(isAuthenticated => {
      this._isUserAuthenticatedSubject.next(isAuthenticated);
    }));    
  }

  setUserAsNotAuthenticated(){
    this._isUserAuthenticatedSubject.next(false);
  }

  isAuthenticated():boolean{
    let isAuthenticated:boolean;
    this.isUserAuthenticated.subscribe(isAuth => isAuthenticated = isAuth);
    return isAuthenticated;
  }

  login() {
    this.document.location.href = this.document.location.origin + "/api/account/SignInWithDiscord";
  }

  logout() {
    this.document.location.href =  this.document.location.origin + "/api/account/logout";
  }
  
}
