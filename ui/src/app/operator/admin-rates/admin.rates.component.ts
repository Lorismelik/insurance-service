import {Component, OnInit} from '@angular/core';
import {Rate} from "../../models";
import {OperatorService} from "../../services/operator.service";

@Component({
    templateUrl: './admin.rates.component.html'
})
export class AdminRatesComponent implements OnInit {
    protected rates: Rate[];

    constructor(private adminService: OperatorService) {
        this.adminService.getRates().subscribe(data => this.rates = data);
    }

    ngOnInit() {
    }

}
