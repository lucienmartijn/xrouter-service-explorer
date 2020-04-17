import { Component, OnInit } from '@angular/core';
import { XrouterApiService } from '../shared/services/xrouter.service';
import { forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  constructor(private router: Router,private xrouterService: XrouterApiService){}
  networkServiceCount:any;
  xCloudServices:any;
  spvWallets:any;
  ngOnInit(): void {
   var sources = [
     this.xrouterService.GetServiceNodeCount(),
     this.xrouterService.GetNetworkServices(),
     this.xrouterService.GetNetworkSpvWallets()
   ];

   forkJoin(sources).subscribe(data =>{
      this.networkServiceCount = data[0];
      this.xCloudServices = data[1];
      this.spvWallets = data[2];
    }, err => {
      if(err.status == 404)
        this.router.navigate(['']);
    });
  }
}
