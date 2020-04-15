import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ValidateServicenodeModalContent, MyServiceNodesComponent } from './my-service-nodes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicenodeAddressValidatorDirective } from '../shared/directives/snode-address-validator';
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule
    ],
  declarations: [MyServiceNodesComponent, ValidateServicenodeModalContent, ServicenodeAddressValidatorDirective],
  exports: [MyServiceNodesComponent],
  bootstrap: [MyServiceNodesComponent],
  entryComponents: [ValidateServicenodeModalContent]
})
export class NgbdModalComponentModule {}
