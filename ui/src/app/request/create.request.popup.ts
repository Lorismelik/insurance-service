import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {OperatorService} from '../services/operator.service';
import {StoreService} from '../services/store.service';
import {CreateRequest} from '../models/requests/CreateRequest';
import {ClientService} from '../services/client.service';
import {AgentService} from '../services/agent.service';
import {RoleEnumModel} from '../models';


@Component({
    selector: 'create-request-popup',
    templateUrl: './create.request.popup.html'
})
export class CreateRequestPopup implements OnInit {
    @Input() private request: CreateRequest;
    @Input() private role: RoleEnumModel;
    @Output() public onCloseEvent = new EventEmitter<any>();
    private operator: string;
    private client: string;
    private agent: string;
    private agents: any[] = [];
    private date: string;
    private selectedAgent: any;
    private agentData: string;
    private cost: number;

    constructor(private router: Router,
                private storeService: StoreService,
                private clientService: ClientService,
                private operatorService: OperatorService,
                private agentService: AgentService) {}

    ngOnInit() {
        this.request.operatorId ? this.operatorService.getById(this.request.operatorId).subscribe(data => this.operator = data.name, error => alert("Error is occured")) : this.operator = 'Not stated';
        this.request.clientId && this.clientService.getById(this.request.clientId).subscribe(data => this.client = data.name, error => alert("Error is occured"));
        this.request.insuranceAgentId ? this.agentService.getById(this.request.insuranceAgentId).subscribe(data => this.agent = data.name, error => alert("Error is occured")) : this.agent = 'Not stated';
        this.agentService.getAll().subscribe(data => {
            data.forEach(x => this.agents.push({name: x.name, id: x.id}));
        });
        this.date = new Date(this.request.startdate).toDateString();
    }

    approve() {
        this.operatorService.approveCreateRequest(this.storeService.getId(), this.request.id, this.cost, true)
            .subscribe(x => this.onCloseEvent.emit(), error => alert("Error is occured"));
    }

    decline() {
        this.operatorService.approveCreateRequest(this.storeService.getId(), this.request.id, this.cost, false)
            .subscribe(x => this.onCloseEvent.emit(), error => alert("Error is occured"));
    }

    close() {
            this.onCloseEvent.emit();
    }

    save() {
        if (this.storeService.getRole() === RoleEnumModel.Operator) {
            if (this.selectedAgent && this.storeService.getRole() === RoleEnumModel.Operator && this.request.status === 'created') {
                this.operatorService.delegateCreateRequest(this.storeService.getId(), this.selectedAgent, this.request.id).subscribe(x => this.onCloseEvent.emit(), error => alert("Error is occured"));
            }
        }

        if (this.storeService.getRole() === RoleEnumModel.InsuranceAgent) {
            if (this.request.status === 'processed') {
                this.agentService.processCreateRequest(this.storeService.getId(), this.agentData, this.request.id).subscribe(x => this.onCloseEvent.emit(), error => alert("Error is occured"));
            }
        }
    }

    pay() {
        this.clientService.getById(this.request.clientId).subscribe(x => {
            if (x.wallet >= this.request.cost) {
                this.clientService.payForPolis(this.storeService.getId(), this.request.id).subscribe(res => this.onCloseEvent.emit(), e => alert("Error is occured"));
            } else {
                alert("You havent enough money!")
            }
        }, error => alert("Error is occured"));
    }
}
