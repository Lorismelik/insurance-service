import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StoreService} from '../../services/store.service';
import {ClientService} from '../../services/client.service';
import {Client} from '../../models';

@Component({
    templateUrl: './client.agreement.component.html'
})
export class ClientAgreementComponent implements OnInit {
    private id: number;
    private client: Client;
    private validity: string;
    constructor(private router: Router,
                private storeService: StoreService,
                private clientService: ClientService) {
        this.id = this.storeService.getId();
        this.getClient();
    }

    ngOnInit() {
    }

    makeBrokerAgreement() {
    }

    getClient() {
        this.clientService.getById(this.id).subscribe(data => this.client = data);
    }
}
