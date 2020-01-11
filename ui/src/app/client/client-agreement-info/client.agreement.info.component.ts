import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';
import {StoreService} from '../../services/store.service';

@Component({
    templateUrl: './client.agreement.info.component.html',
    styleUrls: ['./client.agreement.info.component.css']
})
export class ClientAgreementInfoComponent implements OnInit {
    private id: number;

    constructor(private router: Router,
                private storeService: StoreService,
                private clientService: ClientService) {
        this.id = this.storeService.getId();
        this.clientService.getById(this.id);
    }

    ngOnInit() {
    }

    breakBrokerAgreement() {
        this.clientService.breakBrokerAgreement(this.id)
            .subscribe(() => this.router.navigateByUrl('/client/base'));
    }

}
