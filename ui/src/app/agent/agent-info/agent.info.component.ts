import {Component, OnInit} from '@angular/core';
import {Agent, Operator} from '../../models';
import {StoreService} from '../../services/store.service';
import {AgentService} from '../../services/agent.service';

@Component({
    templateUrl: './agent.info.component.html'
})
export class AgentInfoComponent implements OnInit {
    private agentId: number;
    private agent: Agent;

    constructor(private storeService: StoreService,
                private agentService: AgentService) {
        this.agentId = this.storeService.getId();
        this.agentService.getById(this.agentId).subscribe(data => this.agent = data, error => alert(error));
    }

    ngOnInit() {
    }
}
