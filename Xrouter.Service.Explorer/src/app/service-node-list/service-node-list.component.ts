import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { XrouterApiService } from '../shared/services/xrouter.service';

@Component({
  selector: 'app-service-node-list',
  templateUrl: './service-node-list.component.html',
  styleUrls: ['./service-node-list.component.css']
})
export class ServiceNodeListComponent implements OnInit {

  private readonly PAGE_SIZE = 3; 

  serviceNodes:any[];
  selectedSpvWallets:string[];
  selectedXCloudServices:string[];

  query:any = {
    pageSize: this.PAGE_SIZE,
  };
  queryPastCourses:any = {
    pageSize: this.PAGE_SIZE,
  }; 

  constructor(private router: Router, private xrouterService: XrouterApiService) { }

  ngOnInit() {
    this.populateServiceNodes();
  }

  private populateServiceNodes(){
    this.xrouterService.GetServiceNodeList()
      .subscribe(result => {
        this.serviceNodes = result;

        this.selectedXCloudServices = new Array<string>(result.length);
        this.selectedSpvWallets = new Array<string>(result.length);
        
        this.serviceNodes.forEach((sn, index) =>{  
          this.selectedSpvWallets[index] = sn.spvWallets[0];          
          this.selectedXCloudServices[index] = sn.xCloudServices[0];
        });
      });
  }

  onQueryChange(query){
    this.query = query;
    this.populateServiceNodes();
  }

  onSpvWalletChange(index:number, event:any){
    this.selectedSpvWallets[index] = event.target.value;    
  }

  onXCloudServiceChange(index:number, event:any){
    this.selectedXCloudServices[index] = event.target.value;    
  }

  // onSpvWalletClick(index:number){
  //   if(this.selectedSpvWallets[index].includes('x'))
  //   this.router.navigate(['/spv-wallets', this.selectedSpvWallets[index], this.serviceNodes[index].nodePubKey]);
  // }

  // onXCloudServiceClick(index:number){
  //   if(this.selectedXCloudServices[index].includes('x'))
  //   this.router.navigate(['/xcloud-services', this.selectedXCloudServices[index], this.serviceNodes[index].nodePubKey]);
  // }

  onNodeClick(index:number){
    let node = this.serviceNodes[index];
    this.router.navigate(['/xrouter-snodes', node.nodePubKey]);
  }


}
