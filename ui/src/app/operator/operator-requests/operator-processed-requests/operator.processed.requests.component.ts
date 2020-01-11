import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {CreateRequest} from '../../../models/requests/CreateRequest';
import {InsurancePaymentsRequest} from '../../../models/requests/InsurancePaymentsRequest';
import {OperatorService} from '../../../services/operator.service';
import {StoreService} from '../../../services/store.service';
import {UpdatePolisDataRequest} from '../../../models/requests/UpdateDataRequest';
import {CreateRequestPopup} from '../../../request/create.request.popup';


@Component({
    templateUrl: './operator.processed.requests.component.html'
})
export class OperatorProcessedRequestsComponent implements OnInit {
    @ViewChild(CreateRequestPopup, {static: false}) private createRequestPopup: CreateRequestPopup;
    private showCreateRequestPopup: boolean = false;
    protected operatorId: number;
    protected createRequests: CreateRequest[];
    private createRequest: CreateRequest;
    protected insurancePaymentsRequests: InsurancePaymentsRequest[];
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

    onCloseCreateRequestPopup() {
        this.showCreateRequestPopup = false;
        this.getRequest();
    }

    onUpdateRequestClick(request: UpdatePolisDataRequest) {
        this.storeService.setPropertyId(request.id);
        return this.router.navigateByUrl(`/admin/request/${request.id}`);
    }

    onInsurancePaymentRequestClick(request: InsurancePaymentsRequest) {
        this.storeService.setPropertyId(request.id);
        return this.router.navigateByUrl(`/admin/request/${request.id}`);
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
