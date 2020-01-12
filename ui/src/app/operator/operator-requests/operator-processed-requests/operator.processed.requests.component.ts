import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {CreateRequest} from '../../../models/requests/CreateRequest';
import {InsurancePaymentsRequest} from '../../../models/requests/InsurancePaymentsRequest';
import {OperatorService} from '../../../services/operator.service';
import {StoreService} from '../../../services/store.service';
import {UpdatePolisDataRequest} from '../../../models/requests/UpdateDataRequest';
import {CreateRequestPopup} from '../../../request/create-request-popup/create.request.popup';


@Component({
    templateUrl: './operator.processed.requests.component.html'
})
export class OperatorProcessedRequestsComponent implements OnInit {
    @ViewChild(CreateRequestPopup, {static: false}) private createRequestPopup: CreateRequestPopup;
    private showCreateRequestPopup: boolean = false;
    private showPaymentsRequestPopup: boolean = false;
    protected operatorId: number;
    protected createRequests: CreateRequest[];
    private createRequest: CreateRequest;
    protected insurancePaymentsRequests: InsurancePaymentsRequest[];
    private paymentsRequest: InsurancePaymentsRequest;
    constructor(private storeService: StoreService,
                private operatorService: OperatorService,
                private router: Router) {
        this.operatorId = this.storeService.getId();
        this.getRequest();
    }

    ngOnInit() {
    }

    onCreateRequestClick(request: CreateRequest) {
        this.createRequest = request;
        this.showCreateRequestPopup = true;
    }

    onPaymentsRequestClick(request: InsurancePaymentsRequest) {
        this.paymentsRequest = request;
        this.showPaymentsRequestPopup = true;
    }

    onCloseCreateRequestPopup() {
        this.showCreateRequestPopup = false;
        this.getRequest();
    }

    onClosePaymentsRequestPopup() {
        this.showPaymentsRequestPopup = false;
        this.getRequest();
    }

    getRequest() {
        this.operatorService.getCreateRequests(this.operatorId).subscribe(data => this.createRequests = data.filter(x => x.status !== 'created' &&
            x.status !== 'declined' &&
            x.status !== 'completed')
            , error => alert("Error is occured"));
        this.operatorService.getInsurancePaymentsRequests(this.operatorId).subscribe(data => this.insurancePaymentsRequests = data.filter(x => x.status !== 'created' &&
            x.status !== 'declined' &&
            x.status !== 'completed'), error => alert("Error is occured"));
    }
}
