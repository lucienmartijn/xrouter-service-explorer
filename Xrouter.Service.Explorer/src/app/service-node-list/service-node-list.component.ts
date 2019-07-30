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

  serviceNodes;
  selectedWalletName:string;

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
        // this.selectedWalletName = this.result.spvConfigs[0].spvWallet;
        // this.onWalletChange();
      });
  }

  onQueryChange(query){
    this.query = query;
    this.populateServiceNodes();
  }

  onWalletChange(){
    console.log(this.selectedWalletName);
  }

  onNodeClick(index){
    let node = this.serviceNodes[index];
    if(node.xWallets.length > 0){
      let service = "xr::" + node.xWallets[0];
      this.router.navigate(['/xrouter-snode', node.nodePubKey, "xr::" + service]);
    }
      
  }


}
