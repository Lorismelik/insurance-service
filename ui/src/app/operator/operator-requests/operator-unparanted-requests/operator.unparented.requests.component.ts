import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {CreateRequest} from '../../../models/requests/CreateRequest';
import {InsurancePaymentsRequest} from '../../../models/requests/InsurancePaymentsRequest';
import {OperatorService} from '../../../services/operator.service';
import {StoreService} from '../../../services/store.service';
import {UpdatePolisDataRequest} from '../../../models/requests/UpdateDataRequest';
import {CreateRequestPopup} from '../../../request/create-request-popup/create.request.popup';


@Component({
    templateUrl: './operator.unparented.requests.component.html'
})
export class OperatorUnparentedRequestsComponent implements OnInit {
    @ViewChild(CreateRequestPopup, {static: false}) private createRequestPopup: CreateRequestPopup;
    private showCreateRequestPopup: boolean = false;
    private showUpdateRequestPopup: boolean = false;
    private showPaymentsRequestPopup: boolean = false;
    protected operatorId: number;
    protected createRequests: CreateRequest[];
    private createRequest: CreateRequest;
    protected updateDataRequests: UpdatePolisDataRequest[];
    private updateRequest: UpdatePolisDataRequest;
    protected insurancePaymentsRequests: InsurancePaymentsRequest[];
    private insurancePaymentsRequest: InsurancePaymentsRequest;
    constructor(private storeService: StoreService,
                private operatorService: OperatorService,
                private router: Router) {
        this.operatorId = this.storeService.getId();
        this.getRequests();
    }

    ngOnInit() {
    }

    onCreateRequestClick(request: CreateRequest) {
        this.createRequest = request;
        this.showCreateRequestPopup = true;
    }

    onUpdateRequestClick(request: UpdatePolisDataRequest) {
        this.updateRequest = request;
        this.showUpdateRequestPopup = true;
    }

    onPaymentRequestClick(request: InsurancePaymentsRequest) {
        this.insurancePaymentsRequest = request;
        this.showPaymentsRequestPopup = true;
    }

    onCloseCreateRequestPopup() {
        this.showCreateRequestPopup = false;
        this.getRequests();
    }

    onCloseUpdateRequestPopup() {
        this.showUpdateRequestPopup = false;
        this.getRequests();
    }

    onClosePaymentsRequestPopup() {
        this.showPaymentsRequestPopup = false;
        this.getRequests();
    }

    getRequests() {
        this.operatorService.checkUnparentedCreateRequests(this.operatorId).subscribe(data => this.createRequests = data, error => alert("Error is occured"));
        this.operatorService.checkUnresolvedUpdateDataRequests(this.operatorId).subscribe(data => this.updateDataRequests = data, error => alert("Error is occured"));
        this.operatorService.checkUnresolvedGetInsurancePaymentsRequests(this.operatorId).subscribe(data => this.insurancePaymentsRequests = data, error => alert("Error is occured"));
    }
}
