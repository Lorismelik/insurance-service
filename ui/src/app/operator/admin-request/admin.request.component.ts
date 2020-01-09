import {Component, OnInit} from '@angular/core';
import {ClientRequest} from '../../models';
import {Router} from '@angular/router';
import {OperatorService} from '../../services/operator.service';
import {StoreService} from "../../services/store.service";

@Component({
    templateUrl: './admin.request.component.html'
})
export class AdminRequestComponent implements OnInit {
    private readonly adminId: number;
    private readonly requestId: number;
    private request: ClientRequest;

    constructor(private router: Router,
                private storeService: StoreService,
                private adminService: OperatorService) {
        this.adminId = this.storeService.getId();
        this.requestId = this.storeService.getPropertyId();
        this.adminService.checkRequests(this.adminId)
            .subscribe(data => this.request = data.find(x => x.id === this.requestId));
    }

    ngOnInit() {
    }

    approve() {
        this.adminService.approveRequest(this.adminId, this.requestId)
            .subscribe(() => this.router.navigateByUrl('/operator/base'));
    }

    decline() {
        this.adminService.declineRequest(this.requestId)
            .subscribe(() => this.router.navigateByUrl('/operator/base'));
    }
}
