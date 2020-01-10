import {Component, OnInit} from '@angular/core';
import {Agent, Operator} from '../../models';
import {StoreService} from '../../services/store.service';
import {AgentService} from "../../services/agent.service";

@Component({
    templateUrl: './broker.info.component.html'
})
export class BrokerInfoComponent implements OnInit {
    private brokerId: number;
    private broker: Agent;

    constructor(private storeService: StoreService,
                private brokerService: AgentService) {
        this.brokerId = this.storeService.getId();
        this.brokerService.getById(this.brokerId).subscribe(data => this.broker = data);
    }

    ngOnInit() {
    }
}
