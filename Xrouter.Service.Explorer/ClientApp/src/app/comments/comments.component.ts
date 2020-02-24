import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ElementRef, Renderer2, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { XrouterApiService } from '../shared/services/xrouter.service';
import { CommentService } from '../shared/services/comment.service';
import { NewComment } from '../shared/models/newComment.model';
import { Comment } from '../shared/models/Comment.model';
import { NgForm } from '@angular/forms';
import { CommentNewComponent } from '../comment-new/comment-new.component';
import { AccountService } from '../shared/services/account.service';
import { Subscription, forkJoin } from 'rxjs';
import { User } from '../shared/models/user.model';
import { ViewportScroller } from '@angular/common';
import { SaveComment } from '../shared/models/saveComment.model';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit, OnDestroy {
  
  comments:Comment[];
  @Input('nodePubKey') nodePubKey:string;
  @Input('serviceName') serviceName:string;

  isUserAuthenticated = false;
  subscription: Subscription;
  user:User;

  loading:boolean = true;

  constructor(
    private accountService: AccountService,
    private commentService: CommentService,
    ) 
    {
      this.user = new User();

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
              console.log(err);
          });
        }
      });
    }

  ngOnInit() {
    this.populateComments();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private populateComments(){
    this.commentService.getServiceComments(this.serviceName, this.nodePubKey).subscribe(comments => {
      this.comments = comments;      
      this.loading = false;
    });
  }

  onNewComment(c:Comment){
    this.comments.push(c);
  }
}
