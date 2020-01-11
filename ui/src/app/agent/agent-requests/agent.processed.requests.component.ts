import {Component, OnInit, ViewChild} from '@angular/core';
import {ClientRequest} from '../../models';
import {AgentService} from '../../services/agent.service';
import {Router} from '@angular/router';
import {StoreService} from '../../services/store.service';
import {CreateRequestPopup} from '../../request/create.request.popup';
import {CreateRequest} from '../../models/requests/CreateRequest';
import {UpdatePolisDataRequest} from '../../models/requests/UpdateDataRequest';
import {InsurancePaymentsRequest} from '../../models/requests/InsurancePaymentsRequest';

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

    onRequestClick(request: ClientRequest) {
        this.storeService.setPropertyId(request.id);
        return this.router.navigateByUrl(`/agent/request/${request.id}`);
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
}
