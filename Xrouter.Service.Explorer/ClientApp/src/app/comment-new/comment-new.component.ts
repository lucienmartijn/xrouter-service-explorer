import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { XrouterApiService } from '../shared/services/xrouter.service';
import { CommentService } from '../shared/services/comment.service';
import { NewComment } from '../shared/models/newComment.model';
import { Comment } from '../shared/models/Comment.model';
import { NgForm } from '@angular/forms';
import { User } from '../shared/models/user.model';
@Component({
  selector: 'comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.css']
})
export class CommentNewComponent implements OnInit {
  commentBody:string;
  @Output('newComment') newComment = new EventEmitter<Comment>();

  @Input('nodePubKey') nodePubKey:string;
  @Input('serviceName') serviceName:string;
  @Input('user') user:User;
  @Input('commentId') commentId:string;

  @ViewChild('commentForm') serviceForm: NgForm;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    
  }

  onCommentSubmit(){
    let newComment = new NewComment();
    newComment.commentBody = this.commentBody;
    newComment.nodePubKey = this.nodePubKey;
    newComment.serviceId = this.serviceName;
    newComment.commentId = this.commentId;
    this.commentService.newComment(newComment).subscribe(newComment =>{
      this.newComment.emit(newComment);
      this.serviceForm.reset();
    });
  }
}
