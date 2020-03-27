/**
 * The main component that renders single TabComponent
 * instances.
 */

import {
    Component,
    ContentChildren,
    QueryList,
    AfterContentInit,
    ViewChild,
    ComponentFactoryResolver,
    ViewContainerRef,
    Output,
    EventEmitter
  } from '@angular/core';
  
  import { TabComponent } from './tab.component';
  
  @Component({
    selector: 'my-tabs',
    template: `
      <ul class="nav nav-pills nav-fill mb-1">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" class="nav-item">
          <a [class.active]="tab.active" class="nav-link" href="javascript:void(0)">{{tab.title}}</a>
        </li>
       </ul>
       <ng-content></ng-content>
    `,
    styles: [
      `
      .tab-close {
        color: gray;
        text-align: right;
        cursor: pointer;
      }

      a.nav-link{
        border-bottom: 2px solid #007bff;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 0px;
        border-bottom-left-radius: 0px;
      }
      `
    ]
  })
  export class TabsComponent implements AfterContentInit {
    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
    
    // contentChildren are set
    ngAfterContentInit() {
      // get all active tabs
      let activeTabs = this.tabs.filter((tab)=>tab.active);
      
      // if there is no active tab set, activate the first
      if(activeTabs.length === 0) {
        this.selectTab(this.tabs.first);
      }
    }
    
    selectTab(tab){
        console.log(tab)
      // deactivate all tabs
      this.tabs.toArray().forEach(tab => tab.active = false);
      
      // activate the tab the user has clicked on.
      tab.active = true;
    }

    selectTabTest(e){
        console.log(e)
    }
  }
  