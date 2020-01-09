import {Component, OnInit} from '@angular/core';
import {BankRecord} from "../../models";
import {OperatorService} from "../../services/operator.service";

@Component({
    templateUrl: './admin.bank.component.html'
})
export class AdminBankComponent implements OnInit {
    protected bank: BankRecord[];

    constructor(private adminService: OperatorService) {
        this.adminService.getBankMoney().subscribe(data => this.bank = data);
    }

    ngOnInit() {
    }

}
