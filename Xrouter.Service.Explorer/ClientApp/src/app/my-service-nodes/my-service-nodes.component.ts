import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { XrouterApiService } from '../shared/services/xrouter.service';
import { forkJoin } from 'rxjs';
import { NgForm } from '@angular/forms';
import { MyServiceNodesService } from '../shared/services/myservicenodes.service';

@Component({
  selector: 'app-my-service-nodes',
  templateUrl: './my-service-nodes.component.html',
  styleUrls: ['./my-service-nodes.component.css']
})
export class MyServiceNodesComponent implements OnInit {
  @ViewChild('serviceNodeForm') serviceForm: NgForm;
  serviceNodes:any;

  columns:any=[
    {title: 'Servicenode Name'},
    {title: 'Address'},
    {title: 'Ownership'},
    {title: 'Active'},
    {title: 'Remove'},
  ];

  loading:boolean;

  constructor(private router: Router, private myServiceNodesService: MyServiceNodesService) { }

  ngOnInit() {
    this.myServiceNodesService.GetServiceNodes('').subscribe(nodes => {
      this.serviceNodes = nodes;
    });
  }

  onSubmit() { 

  }
}
