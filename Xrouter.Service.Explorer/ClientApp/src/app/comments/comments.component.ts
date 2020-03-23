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
export class CommentsComponent implements OnInit {
  
  comments:Comment[];
  @Input('nodePubKey') nodePubKey:string;
  @Input('serviceName') serviceName:string;

  loading:boolean;

  constructor(private commentService: CommentService){}

  ngOnInit() {
    this.populateComments();
  }

  private populateComments(){
    this.loading = true;
    this.commentService.getServiceComments(this.serviceName, this.nodePubKey).subscribe(comments => {
      console.log(comments);
      this.comments = comments;      
      this.loading = false;
    });
  }

  onNewComment(c:Comment){
    this.comments.push(c);
    this.populateComments();
  }

  onDeletedComment(commentId:number){
    const index = this.comments.findIndex(c => c.id == commentId);
    this.comments.splice(index, 1);
  }
}
