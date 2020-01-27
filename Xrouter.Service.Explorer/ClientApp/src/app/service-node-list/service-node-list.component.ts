import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { XrouterApiService } from '../shared/services/xrouter.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-service-node-list',
  templateUrl: './service-node-list.component.html',
  styleUrls: ['./service-node-list.component.css']
})
export class ServiceNodeListComponent implements OnInit {
  private readonly PAGE_SIZE = 6; 

  @Output('query-changed') queryChanged = new EventEmitter();
  
  serviceNodes:any;
  spvWallets:any;
  xCloudServices:any;

  query:any = {
    page: 1,
    pageSize: this.PAGE_SIZE,
    atleastOneSpvWallet: true
  };

  columns:any=[
    {title: 'Node Id', key: 'nodeId'},
    {title: 'Address', key: 'addr'},
    {title: 'Spv Wallets', key: 'spvWallets'},
    {title: 'XCloud Services', key: 'xCloudServices'},
  ];

  loading:boolean;

  constructor(private router: Router, private xrouterService: XrouterApiService) { 
    this.loading = true;
  }

  ngOnInit() {
    var sources = [
      this.xrouterService.GetNetworkServices(),
      this.xrouterService.GetNetworkSpvWallets(),
    ];
  
    forkJoin(sources).subscribe(data =>{
      this.xCloudServices = data[0];
      this.spvWallets = data[1];
      this
    }, err => {
      if(err.status == 404)
        this.router.navigate(['']);
    });
    this.populateServiceNodes();
  }

  private populateServiceNodes(){
    this.xrouterService.GetServiceNodeList(this.query)
      .subscribe(result => {        
        this.serviceNodes = result;
        this.loading = false;
      });
  }

  ngOnChanges(){
    this.initializeQuery();
	}

  onFilterChange() {
    this.query.page = 1; 
    this.populateServiceNodes();
  }

  private initializeQuery(){}

  resetFilter() {
    this.query = {
      page: 1,
      pageSize: this.PAGE_SIZE,
      atleastOneSpvWallet: true
    };
    this.populateServiceNodes();
  }

  onPageChange(page) {
    this.query.page = page;
    this.populateServiceNodes();
  }
}
