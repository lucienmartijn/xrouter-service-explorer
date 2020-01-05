import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { XrouterApiService } from '../shared/services/xrouter.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-view-snode',
  templateUrl: './view-snode.component.html',
  styleUrls: ['./view-snode.component.css']
})
export class ViewSnodeComponent implements OnInit, OnDestroy {
  private readonly PAGE_SIZE = 6; 

  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  loading:boolean;
  config:any;
  nodePubKey:string;
  service:string;
  xCloudServices:any;
  result:any;

  query:any = {
    page: 1,
    pageSize: this.PAGE_SIZE,
  };

  constructor(
    private xrouterApiService:XrouterApiService,
    private router:Router,
    private route:ActivatedRoute, 
    private location:Location
  ) 
  { 
    route.params.subscribe(p => {
      this.nodePubKey = p['nodePubKey'];
      this.service = p['service'];
      if (isNullOrUndefined(this.nodePubKey)) {
        router.navigate(['']);
        return; 
      }
      this.loading = true;
    });
  }

  ngOnInit() {
    this.xrouterApiService.GetNodeInfo(this.nodePubKey, this.service)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(result => {
        this.result = result;
        this.loading = false;
      },
      error => {
        this.router.navigate(['/error'], {queryParams: error});
      });
  }

  ngOnDestroy() {
    // This aborts all HTTP requests.
    this.ngUnsubscribe.next();
    // This completes the subject properlly.
    this.ngUnsubscribe.complete();
  }

  private populateXCloudServices(){
    this.xrouterApiService.FilterXCloudServiceServiceNode(this.query)
      .subscribe(result => {        
        this.xCloudServices = result;
      });
  }

  ngOnChanges(){
    this.initializeQuery();
	}

  onFilterChange() {
    this.query.page = 1; 
    this.populateXCloudServices();
  }

  private initializeQuery(){}

  resetFilter() {
    this.query = {
      page: 1,
      pageSize: this.PAGE_SIZE,
    };
    this.populateXCloudServices();
  }

  onPageChange(page) {
    this.query.page = page;
    this.populateXCloudServices();
  }

}