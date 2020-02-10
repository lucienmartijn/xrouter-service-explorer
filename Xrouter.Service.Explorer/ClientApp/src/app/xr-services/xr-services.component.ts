import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { XrouterApiService } from '../shared/services/xrouter.service';

@Component({
  selector: 'app-services',
  templateUrl: './xr-services.component.html',
  styleUrls: ['./xr-services.component.css']
})
export class XrServicesComponent implements OnInit {

  private readonly PAGE_SIZE = 3; 

  services = {};

  query:any = {
    pageSize: this.PAGE_SIZE,
  };
  queryPastCourses:any = {
    pageSize: this.PAGE_SIZE,
  }; 
  loading: boolean;

  constructor(private router: Router, private xrouterService: XrouterApiService) { 
    this.loading = true;
  }

  ngOnInit() {
    this.populateServices();
  }

  private populateServices(){
    this.xrouterService.GetNetworkServices()
      .subscribe(result => {
        this.services = result;
        this.loading = false;
      });
  }

  onQueryChange(query){
    this.query = query;
    this.populateServices();
  }
}
