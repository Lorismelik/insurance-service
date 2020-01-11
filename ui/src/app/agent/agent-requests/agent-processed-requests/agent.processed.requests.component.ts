import {Component, OnInit, ViewChild} from '@angular/core';
import {AgentService} from '../../../services/agent.service';
import {CreateRequest} from '../../../models/requests/CreateRequest';
import {InsurancePaymentsRequest} from '../../../models/requests/InsurancePaymentsRequest';
import {Router} from '@angular/router';
import {StoreService} from '../../../services/store.service';
import {CreateRequestPopup} from '../../../request/create.request.popup';

@Component({
    templateUrl: './agent.processed.requests.component.html'
})
export class AgentProcessedRequestsComponent implements OnInit {
    @ViewChild(CreateRequestPopup, {static: false}) private createRequestPopup: CreateRequestPopup;
    private showCreateRequestPopup: boolean = false;
    protected agentId: number;
    protected createRequests: CreateRequest[];
    private createRequest: CreateRequest;
    private agentData: string;
    protected insurancePaymentsRequests: InsurancePaymentsRequest[];
    constructor(private router: Router,
                private storeService: StoreService,
                private agentService: AgentService) {
        this.agentId = this.storeService.getId();
        this.agentService.getCreatePolis(this.agentId).subscribe(data => this.createRequests = data, error => alert(error));
        this.agentService.getInsurancePayments(this.agentId).subscribe(data => this.insurancePaymentsRequests = data, error => alert(error));
    }

    ngOnInit() {
    }

    onCloseCreateRequestPopup() {
        this.showCreateRequestPopup = false;
        this.agentService.getCreatePolis(this.agentId).subscribe(data => this.createRequests = data, error => alert(error));
        this.agentService.getInsurancePayments(this.agentId).subscribe(data => this.insurancePaymentsRequests = data, error => alert(error));
    }

    onCreateRequestClick(request: CreateRequest) {
        this.createRequest = request;
        this.showCreateRequestPopup = true;
    }

    onInsurancePaymentRequestClick(request: InsurancePaymentsRequest) {}
}
