import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ClientService} from '../../services/client.service';
import {StoreService} from '../../services/store.service';
@Component({
    selector: 'client-payment-request-comment-popup',
    templateUrl: './client.payment.request.comment.popup.html'
})
export class ClientPaymentRequestCommentPopup implements OnInit {
    @Output() public onCloseEvent = new EventEmitter<any>();
    @Input() public polisId: number;
    private data: string;

    constructor(private router: Router,
                private storeService: StoreService,
                private clientService: ClientService) {}

    ngOnInit() {
    }

    close() {
        this.onCloseEvent.emit();
    }

    save() {
        this.clientService.CreateGetInsurancePaymentsRequest(this.storeService.getId(), this.polisId, this.data).subscribe(
            x => this.onCloseEvent.emit(), error => alert("Error has occured")
        );
    }
}
