import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {OperatorService} from '../../services/operator.service';
import {StoreService} from '../../services/store.service';
import {ClientService} from '../../services/client.service';
import {RoleEnumModel} from '../../models';
import {UpdatePolisDataRequest} from '../../models/requests/UpdateDataRequest';
import {InsurancePaymentsRequest} from '../../models/requests/InsurancePaymentsRequest';
import {AgentService} from '../../services/agent.service';


@Component({
    selector: 'get-payments-request-popup',
    templateUrl: './get.payments.request.popup.html'
})
export class GetPaymentsRequestPopup implements OnInit {
    @Input() private request: InsurancePaymentsRequest;
    @Input() private role: RoleEnumModel;
    @Output() public onCloseEvent = new EventEmitter<any>();
    private operator: string;
    private agent: string;
    private client: string;
    private date: string;
    private review: string;
    private payments: number;

    constructor(private router: Router,
                private storeService: StoreService,
                private clientService: ClientService,
                private agentService: AgentService,
                private operatorService: OperatorService) {}

    ngOnInit() {
        this.request.operatorId ? this.operatorService.getById(this.request.operatorId).subscribe(data => this.operator = data.name, error => alert("Error is occured")) : this.operator = 'Not stated';
        this.request.clientId && this.clientService.getById(this.request.clientId).subscribe(data => this.client = data.name, error => alert("Error is occured"));
        this.request.insuranceAgentId && this.agentService.getById(this.request.insuranceAgentId).subscribe(data => this.agent = data.name, error => alert("Error is occured"));
        this.date = new Date(this.request.date).toDateString();
    }

    approve() {
        this.operatorService.getById(this.storeService.getId()).subscribe(x => {
            if (this.request.payments > x.bank) {
                alert('You havent enough money');
            } else {
                this.operatorService.approvePaymentsRequest(this.storeService.getId(), this.request.id, true)
                    .subscribe(x => this.onCloseEvent.emit(), error => alert("Error is occured"));
            }
        }, error => alert("Error is occured") );

    }

    getOnMe() {
        this.operatorService.delegateGetInsurancePayments(this.storeService.getId(), this.request.id)
            .subscribe(x => this.onCloseEvent.emit(), error => alert("Error is occured"));
    }

    giveAssessment() {
        this.agentService.processGetInsurancePaymentsRequest(this.storeService.getId(), this.review, this.request.id, this.payments)
            .subscribe(x => this.onCloseEvent.emit(), error => alert("Error is occured"));
    }

    decline() {
        this.operatorService.approvePaymentsRequest(this.storeService.getId(), this.request.id, false)
            .subscribe(x => this.onCloseEvent.emit(), error => alert("Error is occured"));
    }

    close() {
        this.onCloseEvent.emit();
    }

}
