import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {CreateRequest} from '../../../models/requests/CreateRequest';
import {InsurancePaymentsRequest} from '../../../models/requests/InsurancePaymentsRequest';
import {StoreService} from '../../../services/store.service';
import {UpdatePolisDataRequest} from '../../../models/requests/UpdateDataRequest';
import {CreateRequestPopup} from '../../../request/create.request.popup';
import {ClientService} from '../../../services/client.service';


@Component({
    templateUrl: './client.closed.requests.component.html'
})
export class ClientClosedRequestsComponent implements OnInit {
    @ViewChild(CreateRequestPopup, {static: false}) private createRequestPopup: CreateRequestPopup;
    private showCreateRequestPopup: boolean = false;
    protected clientId: number;
    protected createRequests: CreateRequest[];
    private createRequest: CreateRequest;
    protected updateDataRequests: UpdatePolisDataRequest[];
    protected insurancePaymentsRequests: InsurancePaymentsRequest[];
    constructor(private storeService: StoreService,
                private clientService: ClientService,
                private router: Router) {
        this.clientId = this.storeService.getId();
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
        this.clientService.getCreatePolis(this.clientId).subscribe(data => this.createRequests = data.filter(x => x.status === 'declined' ||
            x.status === 'completed')
            , error => alert('Error is occured'));
        this.clientService.getInsurancePayments(this.clientId).subscribe(data => this.insurancePaymentsRequests = data.filter(x => x.status === 'declined' ||
            x.status === 'completed'), error => alert('Error is occured'));
        this.clientService.getUpdateData(this.clientId).subscribe(data => this.updateDataRequests = data.filter(x => x.status === 'declined' ||
            x.status === 'completed'), error => alert('Error is occured'));
    }
}
