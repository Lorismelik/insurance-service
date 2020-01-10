import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../core/enviroment';
import {Operator, BankRecord, ClientRequest, Rate, Transaction} from '../models';
import {Agent} from '../models';
import {CreateRequest} from '../models/requests/CreateRequest';
import {UpdatePolisDataRequest} from '../models/requests/UpdateDataRequest';
import {InsurancePaymentsRequest} from '../models/requests/InsurancePaymentsRequest';

@Injectable()
export class OperatorService {
    protected readonly http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    checkUnparentedCreateRequests(operatorId: number) {
        const url = this.urlWithOperatorId(environment.checkUnparentedCreateRequests, operatorId);
        return this.http.get<CreateRequest[]>(url);
    }

    checkUnresolvedUpdateDataRequests(operatorId: number) {
        const url = this.urlWithOperatorId(environment.checkUnparentedCreateRequests, operatorId);
        return this.http.get<UpdatePolisDataRequest[]>(url);
    }

    checkUnresolvedGetInsurancePaymentsRequests(operatorId: number) {
        const url = this.urlWithOperatorId(environment.checkUnparentedCreateRequests, operatorId);
        return this.http.get<InsurancePaymentsRequest[]>(url);
    }

    updateWallet(operatorId: number, amount: number) {
        const url = `${environment.getOperator}${operatorId}/updateBank/${amount}`;
        return this.http.get<Operator>(url);
    }

    approveRequest(adminId: number, clientRequestId: number) {
        const url = this.urlWithOperatorId(environment.approveRequest, adminId);
        return this.http.post<Transaction>(url, {clientRequestId});
    }

    declineRequest(clientRequestId: number) {
        const url = this.urlWithRequestId(environment.declineRequest, clientRequestId);
        return this.http.post(url, {});
    }

    getRates() {
        const url = environment.getRates;
        return this.http.get<Rate[]>(url);
    }

    getBankMoney() {
        const url = environment.getBankAssets;
        return this.http.get<BankRecord[]>(url);
    }

    getById(adminId: number) {
        const url = this.urlWithOperatorId(environment.getOperatorById, adminId);
        return this.http.get<Operator>(url);
    }

    getBrokers(adminId: number) {
        const url = this.urlWithOperatorId(environment.getAdminBrokers, adminId);
        return this.http.get<Agent[]>(url);
    }

    private urlWithOperatorId(urlWithoutId: string, operatorId: number): string {
        return urlWithoutId.replace(':operatorId', `${operatorId}`);
    }

    private urlWithRequestId(urlWithoutId: string, clientRequestId: number): string {
        return urlWithoutId.replace(':clientRequestId', `${clientRequestId}`);
    }
}
