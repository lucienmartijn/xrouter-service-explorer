import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'service-list',
  template: `
        <table class="table table-striped">
            <thead>
              <tr>
                <th *ngFor="let c of columns">
                    <div *ngIf="c.isSortable" (click)="sortBy(c.key)">
                        {{ c.title }}
                        <i *ngIf="query.sortBy === c.key" 
                          class="fa"
                          [class.fa-sort-asc]="query.isSortAscending"
                          [class.fa-sort-desc]="!query.isSortAscending"
                        ></i>
                      </div>
                      <div *ngIf="!c.isSortable">
                        {{ c.title }}
                      </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let c of services.items">
                <td><a [routerLink]="[c.name]">{{c.name}}</a></td>
                <td>{{c.nodeCount}}</td>
              </tr>
            </tbody>
          </table>
  `
})
export class ServiceListComponent implements OnInit {

  private readonly PAGE_SIZE = 3; 

  @Input('services') services:any = {};

  @Input('query-init') queryInit = {};

  @Output('query-changed') queryChanged = new EventEmitter();

  query: any = {
    pageSize: this.PAGE_SIZE
  };
  
  columns:any=[
    {title: 'Name', key: 'name'},
    {title: 'Node Count', key: 'nodeCount', isSortable: true},
    {}
  ];
  
  constructor() { }

  ngOnInit() {
    this.initializeQuery();
  }

  ngOnChanges(){
    this.initializeQuery();
	}

  onFilterChange() {
    this.query.page = 1; 
    this.queryChanged.emit(this.query);
  }

  private initializeQuery(){
  }

  resetFilter() {
    this.query = {
      page: 1,
      pageSize: this.PAGE_SIZE,
    };
    this.queryChanged.emit(this.query);
  }

  sortBy(columnName) {
    if (this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending; 
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
    }

    this.queryChanged.emit(this.query);
  }

  onPageChange(page) {
    this.query.page = page;
    this.queryChanged.emit(this.query);
  }

}
