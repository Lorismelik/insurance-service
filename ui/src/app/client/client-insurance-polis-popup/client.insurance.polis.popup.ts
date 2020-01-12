import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';
import {StoreService} from '../../services/store.service';
import {Polis} from '../../models';
import {AgentService} from '../../services/agent.service';
@Component({
    selector: 'client-insurance-polis-popup',
    templateUrl: './client.insurance.polis.popup.html'
})
export class ClientInsurancePolisPopup implements OnInit {
    @Output() public onCloseEvent = new EventEmitter<any>();
    @Input() public polis: Polis;
    private showCommentPopup: boolean = false;
    private date: string;
    private client: string;
    private agent: string;
    private data: string;

    constructor(private router: Router,
                private storeService: StoreService,
                private clientService: ClientService,
                private agentService: AgentService) {}

    ngOnInit() {
        this.clientService.getById(this.polis.clientId).subscribe(data => this.client = data.name, error => alert("Error is occured"));
        this.agentService.getById(this.polis.insuranceAgentId).subscribe(data => this.agent = data.name, error => alert("Error is occured"));
        this.date = new Date(this.polis.startDate).toDateString();
        this.data = this.polis.data;
    }

    update(newData: string) {
        this.clientService.createUpdatePolisRequest(this.storeService.getId(), this.polis.id, newData)
            .subscribe(x => this.onCloseEvent.emit(), error => alert("Error is occured"));
    }

    onPaymentsClick() {
        this.showCommentPopup = true;
    }

    onClosePayments() {
        this.showCommentPopup = false;
    }

    close() {
        this.onCloseEvent.emit();
    }
}
