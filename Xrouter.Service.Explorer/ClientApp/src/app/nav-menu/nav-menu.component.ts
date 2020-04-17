import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { AccountService } from '../shared/services/account.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit, OnDestroy{
  isExpanded = false;
  isUserAuthenticated = false;
  subscription: Subscription;
  user:User;

  constructor(
    private router: Router, 
    private accountService: AccountService,
    @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute, ) { 
    this.user = new User();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
    this.subscription = this.accountService.isUserAuthenticated.subscribe(isAuthenticated => {
      this.isUserAuthenticated = isAuthenticated;
      if (this.isUserAuthenticated) {
        var sources = [
          this.accountService.name(),
          this.accountService.avatarUrl(),
          this.accountService.id(),
        ];

        forkJoin(sources).subscribe(data =>{
          this.user.userName = data[0];
          this.user.avatarUrl = data[1];
          this.user.userId = data[2];
        }, err => {
          if(err.status == 404)
            this.router.navigate(['']);
        });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.accountService.logout(this.document.location.hash.substr(1));
  }

  login() {
    this.accountService.login(this.document.location.hash.substr(1));
  }
}
