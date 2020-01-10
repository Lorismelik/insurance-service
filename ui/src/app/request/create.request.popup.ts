import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {OperatorService} from '../services/operator.service';
import {StoreService} from '../services/store.service';
import {CreateRequest} from '../models/requests/CreateRequest';
import {ClientService} from '../services/client.service';
import {AgentService} from '../services/agent.service';


@Component({
    selector: 'create-request-popup',
    templateUrl: './create.request.popup.html'
})
export class CreateRequestPopup implements OnInit {
    @Input() private request: CreateRequest;
    @Input() private role: RoleEnum;
    @Output() public onCloseEvent = new EventEmitter<any>();
    private operator: string;
    private client: string;
    private agent: string;
    private agents: any[];

    constructor(private router: Router,
                private storeService: StoreService,
                private clientService: ClientService,
                private operatorService: OperatorService,
                private agentService: AgentService) {}

    ngOnInit() {
        this.request.operatorId ? this.operatorService.getById(this.request.operatorId).subscribe(data => this.operator = data.name) : this.operator = 'Not stated';
        this.clientService.getById(this.request.clientId).subscribe(data => this.client = data.name);
        this.request.operatorId ? this.agentService.getById(this.request.insuranceAgentId).subscribe(data => this.agent = data.name) : this.agent = 'Not stated';
        this.agentService.getAll().subscribe(data => data.forEach(x => this.agents.push({name: x.name, id: x.adminId})));
    }

    approve() {
    }

    decline() {
    }

    close() {
        this.onCloseEvent.emit();
    }
}
