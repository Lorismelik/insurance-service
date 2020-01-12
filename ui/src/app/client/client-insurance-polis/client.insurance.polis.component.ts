import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Client, Polis} from '../../models';
import {ClientService} from '../../services/client.service';
import {StoreService} from '../../services/store.service';
import {CreateRequest} from '../../models/requests/CreateRequest';

@Component({
    templateUrl: './client.insurance.polis.component.html'
})
export class ClientInsurancePolisComponent implements OnInit {
    private id: number;
    private client: Client;
    private showCreateRequestPopup: boolean = false;
    private showPolisPopup: boolean = false;
    private polises: Polis[];
    private polis: Polis;
    constructor(private router: Router,
                private storeService: StoreService,
                private clientService: ClientService) {
        this.id = this.storeService.getId();
        this.clientService.getById(this.id).subscribe(data => this.client = data);
        this.clientService.getPolis(this.id).subscribe(x => this.polises = x, error => alert("Error has occured"));
    }

    ngOnInit() {
    }

    onPolisClick(polis: Polis) {
        this.polis = polis;
        this.showPolisPopup = true;
    }

    createPolis() {
        this.showCreateRequestPopup = true;
    }

    onCloseCreatePolisPopup() {
        this.showCreateRequestPopup = false;
    }
    onClosePolisPopup() {
        this.showPolisPopup = false;
    }
}
