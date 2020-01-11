import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {CreateRequest} from '../../../models/requests/CreateRequest';
import {InsurancePaymentsRequest} from '../../../models/requests/InsurancePaymentsRequest';
import {OperatorService} from '../../../services/operator.service';
import {StoreService} from '../../../services/store.service';
import {UpdatePolisDataRequest} from '../../../models/requests/UpdateDataRequest';
import {CreateRequestPopup} from '../../../request/create.request.popup';


@Component({
    templateUrl: './operator.unparented.requests.component.html'
})
export class OperatorUnparentedRequestsComponent implements OnInit {
    @ViewChild(CreateRequestPopup, {static: false}) private createRequestPopup: CreateRequestPopup;
    private showCreateRequestPopup: boolean = false;
    protected operatorId: number;
    protected createRequests: CreateRequest[];
    private createRequest: CreateRequest;
    protected updateDataRequests: UpdatePolisDataRequest[];
    protected insurancePaymentsRequests: InsurancePaymentsRequest[];
    constructor(private storeService: StoreService,
                private operatorService: OperatorService,
                private router: Router) {
        this.operatorId = this.storeService.getId();
        this.operatorService.checkUnparentedCreateRequests(this.operatorId).subscribe(data => this.createRequests = data, error => alert("Error is occured"));
        this.operatorService.checkUnresolvedUpdateDataRequests(this.operatorId).subscribe(data => this.updateDataRequests = data, error => alert("Error is occured"));
        this.operatorService.checkUnresolvedGetInsurancePaymentsRequests(this.operatorId).subscribe(data => this.insurancePaymentsRequests = data, error => alert("Error is occured"));
    }

    ngOnInit() {
    }

    onCreateRequestClick(request: CreateRequest) {
        this.createRequest = request;
        this.showCreateRequestPopup = true;
    }

    onCloseCreateRequestPopup() {
        this.showCreateRequestPopup = false;
        this.operatorService.checkUnparentedCreateRequests(this.operatorId).subscribe(data => this.createRequests = data, error => alert("Error is occured"));
        this.operatorService.checkUnresolvedUpdateDataRequests(this.operatorId).subscribe(data => this.updateDataRequests = data, error => alert("Error is occured"));
        this.operatorService.checkUnresolvedGetInsurancePaymentsRequests(this.operatorId).subscribe(data => this.insurancePaymentsRequests = data, error => alert("Error is occured"));
    }

    onUpdateRequestClick(request: UpdatePolisDataRequest) {
        this.storeService.setPropertyId(request.id);
        return this.router.navigateByUrl(`/admin/request/${request.id}`);
    }

    onInsurancePaymentRequestClick(request: InsurancePaymentsRequest) {
        this.storeService.setPropertyId(request.id);
        return this.router.navigateByUrl(`/admin/request/${request.id}`);
    }
}
