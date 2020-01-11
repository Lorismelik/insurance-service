import {
    Component,
    OnInit
} from '@angular/core';
import {Client} from '../../models';
import {StoreService} from '../../services/store.service';
import {ClientService} from '../../services/client.service';

@Component({
    templateUrl: './client.info.component.html',
    styleUrls: ['./client.info.component.css']
})
export class ClientInfoComponent implements OnInit {
    private id: number;
    protected client: Client;
    editMode = false;
    private wallet: number;
    private account: number;

    constructor(private storeService: StoreService,
                private clientService: ClientService) {
        this.id = this.storeService.getId();
        this.clientService.getById(this.id)
            .subscribe(data => {
                this.client = data as Client;
                this.wallet = this.client.wallet;
            });
    }

    ngOnInit() {
    }

    onUpdateClick(sum: number) {
        return this.clientService.updateWallet(this.storeService.getId(), sum).subscribe(res => this.wallet = res.wallet, error => alert(error));
    }

}
