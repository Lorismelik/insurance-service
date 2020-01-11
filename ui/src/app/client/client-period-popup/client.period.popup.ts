import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';
import {StoreService} from '../../services/store.service';
@Component({
    selector: 'client-period-popup',
    templateUrl: './client.period.popup.html'
})
export class CreatePeriodPopup implements OnInit {
    @Output() public onCloseEvent = new EventEmitter<any>();
    private period: string;

    constructor(private router: Router,
                private storeService: StoreService,
                private clientService: ClientService) {}

    ngOnInit() {
    }

    approve() {
    }

    decline() {
    }

    close() {
        this.onCloseEvent.emit();
    }

    save() {
        if (this.period) {
            this.clientService.createRequestForPolis(this.storeService.getId(), this.period).subscribe(
                x => this.onCloseEvent.emit(), error => alert("Error has occured")
            );
        }
    }
}
