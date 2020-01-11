import {Component, OnInit} from '@angular/core';
import {AgentService} from "../../services/agent.service";
import {StoreService} from "../../services/store.service";

@Component({
    templateUrl: './broker.agreement.component.html'
})
export class BrokerAgreementComponent implements OnInit {
    protected brokerId: number;
    protected agreementId: number;

    constructor(private storeService: StoreService,
                private brokerService: AgentService) {
        this.brokerId = this.storeService.getId();
        this.agreementId = this.storeService.getPropertyId();
    }

    ngOnInit() {
    }

}
