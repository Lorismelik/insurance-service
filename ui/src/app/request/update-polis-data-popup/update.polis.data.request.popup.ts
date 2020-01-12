import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {OperatorService} from '../../services/operator.service';
import {StoreService} from '../../services/store.service';
import {ClientService} from '../../services/client.service';
import {RoleEnumModel} from '../../models';
import {UpdatePolisDataRequest} from '../../models/requests/UpdateDataRequest';


@Component({
    selector: 'update-polis-data-request-popup',
    templateUrl: './update.polis.data.request.popup.html'
})
export class UpdatePolisDataRequestPopup implements OnInit {
    @Input() private request: UpdatePolisDataRequest;
    @Input() private role: RoleEnumModel;
    @Output() public onCloseEvent = new EventEmitter<any>();
    private operator: string;
    private client: string;
    private date: string;

    constructor(private router: Router,
                private storeService: StoreService,
                private clientService: ClientService,
                private operatorService: OperatorService) {}

    ngOnInit() {
        this.request.operatorId ? this.operatorService.getById(this.request.operatorId).subscribe(data => this.operator = data.name, error => alert("Error is occured")) : this.operator = 'Not stated';
        this.request.clientId && this.clientService.getById(this.request.clientId).subscribe(data => this.client = data.name, error => alert("Error is occured"));
    }

    approve() {
        this.operatorService.approveUpdateData(this.storeService.getId(), this.request.id, true)
            .subscribe(x => this.onCloseEvent.emit(), error => alert("Error is occured"));
    }

    decline() {
        this.operatorService.approveUpdateData(this.storeService.getId(), this.request.id, false)
            .subscribe(x => this.onCloseEvent.emit(), error => alert("Error is occured"));
    }

    close() {
        this.onCloseEvent.emit();
    }

}
