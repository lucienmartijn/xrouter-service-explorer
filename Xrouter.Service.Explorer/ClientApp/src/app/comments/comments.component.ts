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

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {
  commentBody:string;
  comments:Comment[];
  @Input('nodePubKey') nodePubKey:string;
  @Input('serviceName') serviceName:string;
  @ViewChild('commentForm') serviceForm: NgForm;
  @ViewChildren('reply', { read: ViewContainerRef }) container: QueryList<ViewContainerRef>;
  @ViewChildren('replyButtons') replyButtonRef: QueryList<ElementRef>;
  componentRef:any[];

  isUserAuthenticated = false;
  subscription: Subscription;
  user:User;

  loading:boolean = true;

  constructor(
    private resolver: ComponentFactoryResolver, 
    private accountService: AccountService,
    private commentService: CommentService,
    private viewportScroller: ViewportScroller,
    private renderer: Renderer2) 
    {
      this.user = new User();
    }

  ngOnInit() {
    this.populateComments();

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

  onJump(elementId:string){
    this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.destroyComponents();
  }

  private populateComments(){
    this.commentService.getServiceComments(this.serviceName, this.nodePubKey).subscribe(comments => {
      console.log(comments);
      this.comments = comments;      
      this.componentRef = new Array<any>(comments.length);
      this.loading = false;
    });
  }

  editComment(index:number){
    this.commentService.editComment(this.comments[index]).subscribe(editedComment => {
      this.comments[index] = editedComment;
    });
  }

  deleteComment(index:number){
    if(confirm("Are you sure?")){ 
      this.commentService.deleteComment(this.comments[index].id).subscribe(res =>{
        this.populateComments();
      });
    }
  }

  createCommentReplyComponent(index:number) {
    let el = this.replyButtonRef.toArray()[index].nativeElement;
    let commentBox = this.container.toArray()[index];
    let componentRef = this.componentRef[index];
    if(el.textContent === "Cancel"){ 
      this.renderer.setProperty(el, "textContent", "Reply");
      componentRef.instance.newComment.unsubscribe();      
      componentRef.destroy();
    } else{   
      commentBox.clear();
      const factory = this.resolver.resolveComponentFactory(CommentNewComponent);
      
      this.componentRef[index] = commentBox.createComponent(factory);
      componentRef = this.componentRef[index];      
      componentRef.instance.nodePubKey = this.nodePubKey;
      componentRef.instance.serviceName = this.serviceName;
      componentRef.instance.user = this.user;
      componentRef.instance.commentId = this.comments[index].id;  
      componentRef.instance.newComment.subscribe(c => {
        this.comments.push(c);
        this.renderer.setProperty(el, "textContent", "Reply");
        componentRef.destroy();
      });

      this.renderer.setProperty(el, "textContent", "Cancel");
    }   
  }

  onNewComment(c:Comment){
    this.comments.push(c);
  }

  destroyComponents() {
    this.componentRef.forEach(ref => {
      ref.destroy();
    });
  }
}
