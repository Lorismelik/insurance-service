import {Component, OnInit} from '@angular/core';
import {AgentService} from '../../services/agent.service';
import {Router} from '@angular/router';
import {StoreService} from "../../services/store.service";

@Component({
    templateUrl: './broker.agreements.component.html'
})
export class BrokerAgreementsComponent implements OnInit {
    private brokerId: number;

    constructor(private router: Router,
                private storeService: StoreService,
                private brokerService: AgentService) {
        this.brokerId = this.storeService.getId();
        this.brokerService.getById(this.brokerId);
    }

    ngOnInit() {
    }

    onAgreementClick(agreement: any) {
        this.storeService.setPropertyId(agreement.id);
        return this.router.navigateByUrl(`/broker/agreement/${agreement.id}`);
    }
}
