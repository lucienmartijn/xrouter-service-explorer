import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient , HttpParams} from '@angular/common/http';
import { BaseService } from './base.service';
import { isNullOrUndefined } from 'util';
import { ConfigurationService } from './configuration.service';
import { MyServiceNode } from '../models/myservicenode.model';
import { cp } from '@angular/core/src/render3';
import { NewComment } from '../models/newComment.model';
import { Comment } from '../models/comment.model';
import { SaveComment } from '../models/saveComment.model';


@Injectable()
export class CommentService extends BaseService{
  private readonly apiEndpoint = 'Comment';
  private baseEndpoint = '/api/';

  constructor(private http:HttpClient) {
    super();
   }

  newComment(comment:NewComment){
    return this.http.post<Comment>(this.baseEndpoint + this.apiEndpoint + '/NewComment/', comment);
  }

  editComment(comment:SaveComment){
    return this.http.put<Comment>(this.baseEndpoint + this.apiEndpoint + '/' + comment.id, comment);
  }

  deleteComment(id:string){
    return this.http.delete<string>(this.baseEndpoint + this.apiEndpoint + '/' + id);
  }

  getServiceComments(serviceId:string, nodePubKey:string){
    return this.http.get<Comment[]>(this.baseEndpoint + this.apiEndpoint + '/GetServiceComments?' + "&serviceId=" + serviceId + "&nodePubKey=" + nodePubKey);
  }
}
