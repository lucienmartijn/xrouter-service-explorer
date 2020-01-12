import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from '../shared/services/account.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit,OnDestroy{
  isExpanded = false;
  isUserAuthenticated = false;
  subscription: Subscription;
  userName: string;
  avatarUrl: string;

  constructor(private httpClient: HttpClient, private accountService: AccountService) { }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
    this.subscription = this.accountService.isUserAuthenticated.subscribe(isAuthenticated => {
      console.log(isAuthenticated);
      this.isUserAuthenticated = isAuthenticated;
      if (this.isUserAuthenticated) {
      this.httpClient.get(`/api/account/name`, { responseType: 'text', withCredentials: true }).subscribe(theName => {
          this.userName = theName;
        });
      this.httpClient.get(`/api/account/AvatarUrl`, { responseType: 'text', withCredentials: true }).subscribe(avatarUrl => {
        this.avatarUrl = avatarUrl;
      }); 
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.accountService.logout();
  }

  // simulateFailedCall() {
  //   this.httpClient.get(`${environment.apiUrl}/home/fail`).subscribe();
  // }

  login() {
    this.accountService.login();
  }
}
