import { OnInit, OnDestroy, Component, ViewChildren, QueryList, ViewContainerRef, ElementRef, Input, ComponentFactoryResolver, Renderer2 } from "@angular/core";
import { AccountService } from "../shared/services/account.service";
import { CommentService } from "../shared/services/comment.service";
import { ViewportScroller } from "@angular/common";
import { User } from "../shared/models/user.model";
import { Subscription, forkJoin } from "rxjs";
import { Comment } from '../shared/models/Comment.model';
import { SaveComment } from "../shared/models/saveComment.model";
import { CommentNewComponent } from "../comment-new/comment-new.component";

@Component({
    selector: 'comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.css'],
  })
  export class CommentComponent implements OnInit, OnDestroy {
    @Input('comment') comment:Comment;
    @Input('nodePubKey') nodePubKey:string;
    @Input('serviceName') serviceName:string;
    @Input('user')user:User;
    commentBody:string;
    isUserAuthenticated = false;
    @ViewChildren('reply', { read: ViewContainerRef }) container: ViewContainerRef;
    @ViewChildren('replyButtons') replyButtonRef: ElementRef;
    componentRef:any;

    constructor(private resolver: ComponentFactoryResolver, 
            private accountService: AccountService,
            private commentService: CommentService,
            private viewportScroller: ViewportScroller,
            private renderer: Renderer2) 
    {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.destroyComponents();
    }

        
    onJump(elementId:string){
        this.viewportScroller.scrollToAnchor(elementId);
    }

    toggleEditComment(){
        this.comment.editMode = true;
    }
    
    editComment(){
        let editedComment = new SaveComment();
        editedComment.body = this.comment.body;
        editedComment.id = this.comment.id;
        this.commentService.editComment(editedComment).subscribe(editedComment => {
            this.comment = editedComment;
        });
    }
    
    cancelEditComment(){
        this.comment.editMode = false;
    }

    deleteComment(){
        if(confirm("Are you sure?")){ 
                this.commentService.deleteComment(this.comment.id).subscribe(res =>{
                // this.populateComments();
            });
        }
    }

    createCommentReplyComponent() {
        //FIXME
        let el = this.replyButtonRef.nativeElement;
        console.log(el);
        let commentBox = this.container;
        let componentRef = this.componentRef;

        if(el.textContent === "Cancel"){ 
            this.renderer.setProperty(el, "textContent", "Reply");
            componentRef.instance.newComment.unsubscribe();      
            componentRef.destroy();
        } else{   
            commentBox.clear();
            const factory = this.resolver.resolveComponentFactory(CommentNewComponent);
            
            this.componentRef = commentBox.createComponent(factory);
            componentRef = this.componentRef;
            componentRef.instance.nodePubKey = this.nodePubKey;
            componentRef.instance.serviceName = this.serviceName;
            componentRef.instance.user = this.user;
            componentRef.instance.commentId = this.comment.id;  
            componentRef.instance.newComment.subscribe(c => {
            // this.loading = true;
            // this.populateComments();
            this.renderer.setProperty(el, "textContent", "Reply");
            componentRef.destroy();
            });
    
            this.renderer.setProperty(el, "textContent", "Cancel");
        }   
    }

    destroyComponents() {
        this.componentRef.forEach(ref => {
            ref.destroy();
        });
    }
  }