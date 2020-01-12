import {Component, OnInit} from '@angular/core';
import {Agent, Client, Operator} from '../../models';
import {StoreService} from '../../services/store.service';
import {AgentService} from '../../services/agent.service';

@Component({
    templateUrl: './agent.clients.component.html'
})
export class AgentClients implements OnInit {
    private agentId: number;
    private clients: Client[];

    constructor(private storeService: StoreService,
                private agentService: AgentService) {
        this.agentId = this.storeService.getId();
        this.agentService.getClientsById(this.agentId).subscribe(data => this.clients = data, error => alert(error));
    }

    ngOnInit() {
    }
}
