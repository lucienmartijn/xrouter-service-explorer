import { Component, OnInit, EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { XrouterApiService } from '../shared/services/xrouter.service';
import { forkJoin, Observable } from 'rxjs';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { MyServiceNodesService } from '../shared/services/myservicenodes.service';
import { isNullOrUndefined } from 'util';
import { MyServiceNode } from '../shared/models/myservicenode.model';
import { NgbModal, ModalDismissReasons, NgbModalRef, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceNode } from '../shared/models/servicenode.model';


@Component({
  selector: 'validate-servicenode-modal-content',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-basic-title">Verify Your Servicenode</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">

    <p>Follow the steps below to sign a message which proves your ownership of this servicenode.</p>
    <p>This is a trustless process and does not give any keys to service-explorer</p>
    <p>Proving ownership this way grants a Verified badge next to your name</p>
    <hr class="my-4">
    <mat-vertical-stepper [linear]="isLinear" #stepper>
    <mat-step>
      <ng-template matStepLabel>Open Wallet</ng-template>
      <div>
        <p>Open the BlocknetDX wallet application</p>
        <img src="../../assets/openblocknet.png" alt="openblocknet" class="img-thumbnail">
        <br/>
        <button type="button" class="btn btn-primary" matStepperNext>Next</button>
      </div>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Sign Message</ng-template>
      <div>
        <p>Click on "File" and then Sign "Message"</p>
        <img src="../../assets/signmsgclick.png" alt="signmessageclick" class="img-thumbnail">
        <br/>
        <button type="button" class="btn btn-primary" matStepperNext>Next</button>
      </div>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Copy Paste Address</ng-template>
      <div>
        <p>Copy this exact address: <strong>{{ servicenode.address }}</strong></p>
        <p>Paste it into the black box</p>
        <img src="../../assets/signmsgaddress.png" alt="signmessageaddress" class="img-thumbnail">
        <br/>
        <button type="button" class="btn btn-primary" matStepperNext>Next</button>
      </div>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Copy Paste Message</ng-template>
      <div>
        <p>Copy this exact message <strong>{{ toBeSignedMessage }}</strong></p>
        <p>Paste it into the white box</p>
        <img src="../../assets/signmsgmsg.png" alt="signmessagemsg" class="img-thumbnail">
        <br/>
        <button type="button" class="btn btn-primary" matStepperNext>Next</button>
      </div>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Sign Message</ng-template>
      <div>
        <p>Press the "Sign Message" button</p>
        <img src="../../assets/signmsgsign.png" alt="signmessagesign" class="img-thumbnail">
        <br/>
        <button type="button" class="btn btn-primary" matStepperNext>Next</button>
      </div>
    </mat-step>
    <mat-step>
      <ng-template matStepLabel>Copy Signature</ng-template>
      <div>
        <p>Press the "Copy" button</p>
        <img src="../../assets/signmsgcopy.png" alt="signmessagecopy" class="img-thumbnail">
        <br/>
        <button type="button" class="btn btn-primary" matStepperNext>Next</button>
      </div>
    </mat-step>
    <mat-step [stepControl]="formGroup">
      <form [formGroup]="formGroup" (ngSubmit)="onVerifySubmit()" #form="ngForm">
        <ng-template matStepLabel>Enter signature</ng-template>
        <p>Copy and paste the signature message into this box and click Verify Servicenode</p>
          <div class="input-group" style="margin-top: 1%;">
            <input type="text" class="form-control" placeholder="Signature" formControlName="signature" required>
              <div class="input-group-append">
                <button type="submit" class="btn btn-primary" [disabled]="form.pristine || form.invalid">Verify Servicenode</button>
              </div>
          </div>
          {{ f.value }}
          <div *ngIf="f.signature.invalid && (f.signature.dirty || f.signature.touched)" class="alert alert-danger">
            <div *ngIf="f.signature.errors.required">
              Signature is required.
            </div>
            <div *ngIf="f.signature.errors.minlength">
              Signature must be at least 88 characters long.
            </div>
          </div>
          <div *ngIf="submitted && !signatureValidated" class="alert alert-danger">
              {{ resultMessage }}
            </div>      
        <div>
          <br/>
          <button type="button" class="btn btn-primary" matStepperPrevious>Back</button>
        </div>
      </form>
    </mat-step>
  </mat-vertical-stepper>
  </div>
  <div class="modal-footer">

  </div>
  `
})
export class ValidateServicenodeModalContent implements OnInit {
  @Input() servicenode:MyServiceNode;
  isLinear = false;
  formGroup: FormGroup;

  toBeSignedMessage:string
  signatureMessage:string;
  closeResult: string;
  submitted:boolean = false;
  signatureValidated:boolean;
  resultMessage:string;

  constructor(public activeModal: NgbActiveModal, 
    private myServiceNodesService: MyServiceNodesService, 
    private router:Router,
    private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.toBeSignedMessage = "service-explorer-verification-" + this.servicenode.id;
    this.formGroup = this._formBuilder.group({
      signature: ['', [Validators.required, Validators.minLength(88), Validators.maxLength(88)]]
    });
  }

  onVerifySubmit(){
    if(this.formGroup.invalid) return;

    let address = this.servicenode.address;
    this.myServiceNodesService.verifyMessage(address, encodeURIComponent(this.formGroup.get('signature').value), this.toBeSignedMessage).subscribe(res => {
      this.submitted = true;
      if(res){
        this.activeModal.close(res);
      } else{
        this.signatureValidated = res;
        this.resultMessage = "Service node not verified!";
      }
    },
    err =>{
      this.submitted = true;
      this.signatureValidated = false;
      this.resultMessage = err.message;
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.formGroup.controls; }

}

@Component({
  selector: 'app-my-service-nodes',
  templateUrl: './my-service-nodes.component.html',
  styleUrls: ['./my-service-nodes.component.css']
})
export class MyServiceNodesComponent implements OnInit {
  @ViewChild('f') serviceNodeForm: NgForm;
  allServiceNodes:any;
  myServiceNodes:MyServiceNode[];
  newServiceNode: MyServiceNode = new MyServiceNode();
  serviceNodePublicAddress:string;
  private applicationUserId:string;
  
  columns:any=[
    {title: 'Servicenode Name'},
    {title: 'Address'},
    {title: 'Ownership'},
    {title: 'Active'},
    {title: 'Remove'},
  ];

  loading:boolean;

  constructor(private router: Router, 
    private route:ActivatedRoute,
    private myServiceNodesService: MyServiceNodesService, 
    private xrouterApiService: XrouterApiService,
    private modalService: NgbModal
    ) { 
      route.params.subscribe(p => {
        this.applicationUserId = p['id'];
        if (isNullOrUndefined(this.applicationUserId)) {
          router.navigate(['']);
          return; 
        }
      });
      this.loading = true;
      this.newServiceNode.applicationUserId = this.applicationUserId;
    }

  ngOnInit() {
    var observableMyServiceNodes: Observable<MyServiceNode[]> = this.myServiceNodesService.GetServiceNodes(this.applicationUserId);
    var observableAllServiceNodes: Observable<any> = this.xrouterApiService.GetServiceNodeList();

    forkJoin([observableMyServiceNodes, observableAllServiceNodes]).subscribe(([mySn, allSn]) =>{
      this.loading = false;
      this.allServiceNodes = allSn;
      this.myServiceNodes = mySn;
    }, err => {
      if(err.status == 404)
        this.router.navigate(['']);
    });
  }

  onSubmit() {
    const servicenode = this.allServiceNodes.items.find(sn => sn.address === this.newServiceNode.address);
    this.newServiceNode.status = servicenode.status;
    this.newServiceNode.sNodeKey = servicenode.sNodeKey;
    this.myServiceNodesService.create(this.newServiceNode)
      .subscribe(serviceNode =>{
        this.myServiceNodes.push(serviceNode);
      }, err => {
        this.router.navigate(['/error'], {queryParams: err});
      });
  }

  onRemove(index:number){
    let id = this.myServiceNodes[index].id;
    if(confirm("Are you sure?")){
      this.myServiceNodesService.delete(id).subscribe(snId => {
        this.myServiceNodes.splice(index, 1);
      }, err => {
        this.router.navigate(['/error'], {queryParams: err});
      });
    }
  }
  
  open(index: number) {
    const modalReference = this.modalService.open(ValidateServicenodeModalContent, {size: 'lg', windowClass:'wide-modal'});
    modalReference.componentInstance.servicenode = this.myServiceNodes[index];
    modalReference.result.then(res => {
      let myServiceNode = this.myServiceNodes[index];
      const servicenode = this.allServiceNodes.items.find(sn => sn.address === this.newServiceNode.address);
      let updatedServiceNode = new MyServiceNode();      
      updatedServiceNode.address = myServiceNode.address;
      updatedServiceNode.applicationUserId = myServiceNode.applicationUserId;
      updatedServiceNode.id = myServiceNode.id;
      updatedServiceNode.ownership = res;
      updatedServiceNode.status = myServiceNode.status;
      updatedServiceNode.sNodeKey = servicenode.sNodeKey;
      console.log(updatedServiceNode);

      this.myServiceNodesService.update(myServiceNode.id, updatedServiceNode).subscribe(sn =>{
        this.myServiceNodes[index].ownership = sn.ownership;
      });  
    });
  }
}
