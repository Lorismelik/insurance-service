import {Component, OnInit} from '@angular/core';
import {Operator} from '../../models';
import {StoreService} from '../../services/store.service';
import {OperatorService} from '../../services/operator.service';
import {CreateRequest} from '../../models/requests/CreateRequest';

@Component({
    templateUrl: './operator.info.component.html'
})
export class OperatorInfoComponent implements OnInit {
    private operatorId: number;
    private wallet: number;
    private operator: Operator;
    private account: number;

    constructor(private storeService: StoreService,
                private operatorService: OperatorService) {
        this.operatorId = this.storeService.getId();
        this.operatorService.getById(this.operatorId).subscribe(data => {
            this.operator = data;
            this.wallet = data.bank;
        });
    }

    ngOnInit() {
    }

    onUpdateClick(sum: number) {
        return this.operatorService.updateWallet(this.operatorId, sum).subscribe(res => this.wallet = res.bank, error => alert(error));
    }
}
