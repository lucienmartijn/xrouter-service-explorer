export class Comment {
    public id:string;
    public body:string;
    public userName:string;
    public avatarUrl:string;
    public datetime:Date;
    public replies: Comment[];
}
