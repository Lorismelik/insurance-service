import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateRequest} from '../../models/requests/CreateRequest';
import {UpdatePolisDataRequest} from '../../models/requests/UpdateDataRequest';
import {InsurancePaymentsRequest} from '../../models/requests/InsurancePaymentsRequest';
import {StoreService} from '../../services/store.service';
import {OperatorService} from '../../services/operator.service';
import {Router} from '@angular/router';
import {CreateRequestPopup} from '../../request/create.request.popup';

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
        this.operatorService.checkUnparentedCreateRequests(this.operatorId).subscribe(data => this.createRequests = data);
        this.operatorService.checkUnresolvedUpdateDataRequests(this.operatorId).subscribe(data => this.updateDataRequests = data);
        this.operatorService.checkUnresolvedGetInsurancePaymentsRequests(this.operatorId).subscribe(data => this.insurancePaymentsRequests = data);
    }

    ngOnInit() {
    }

    onCreateRequestClick(request: CreateRequest) {
        this.createRequest = request;
        this.showCreateRequestPopup = true;
    }

    onCloseCreateRequestPopup() {
        this.showCreateRequestPopup = false;
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
