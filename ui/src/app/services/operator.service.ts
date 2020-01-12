import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../core/enviroment';
import {Operator} from '../models';
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
        const url = this.urlWithOperatorId(environment.checkUnresolvedUpdateDataRequests, operatorId);
        return this.http.get<UpdatePolisDataRequest[]>(url);
    }

    checkUnresolvedGetInsurancePaymentsRequests(operatorId: number) {
        const url = this.urlWithOperatorId(environment.checkUnresolvedGetInsurancePaymentsRequests, operatorId);
        return this.http.get<InsurancePaymentsRequest[]>(url);
    }

    updateWallet(operatorId: number, amount: number) {
        const url = `${environment.getOperator}${operatorId}/updateBank/${amount}`;
        return this.http.get<Operator>(url);
    }

    delegateCreateRequest(operatorId: number, agentId: string, requestId: number) {
        const url = this.urlWithOperatorId(environment.delegateCreateRequest, operatorId);
        return this.http.post<CreateRequest>(url, {agentId, requestId});
    }

    getCreateRequests(operatorId: number) {
        const url = this.urlWithOperatorId(environment.getCreateRequestsOperator, operatorId);
        return this.http.get<CreateRequest[]>(url);
    }

    getUpdateDataRequests(operatorId: number) {
        const url = this.urlWithOperatorId(environment.getUpdateDataOperator, operatorId);
        return this.http.get<UpdatePolisDataRequest[]>(url);
    }

    getInsurancePaymentsRequests(operatorId: number) {
        const url = this.urlWithOperatorId(environment.getInsurancePaymentsOperator, operatorId);
        return this.http.get<InsurancePaymentsRequest[]>(url);
    }

    approveCreateRequest(operatorId: number, requestId: number, cost: number, approved: boolean) {
        const url = this.urlWithOperatorId(environment.approveCreateRequest, operatorId);
        return this.http.post<CreateRequest>(url, {requestId, cost, approved});
    }

    approveUpdateData(operatorId: number, requestId: number, approved: boolean) {
        const url = this.urlWithOperatorId(environment.approveUpdateData, operatorId);
        return this.http.post<UpdatePolisDataRequest>(url, {requestId, approved});
    }

    approvePaymentsRequest(operatorId: number, requestId: number, approved: boolean) {
        const url = this.urlWithOperatorId(environment.approveGetInsurancePayments, operatorId);
        return this.http.post<InsurancePaymentsRequest>(url, {requestId, approved});
    }
    getById(operatorId: number) {
        const url = this.urlWithOperatorId(environment.getOperatorById, operatorId);
        return this.http.get<Operator>(url);
    }

    delegateGetInsurancePayments(operatorId: number, requestId: number) {
        const url = this.urlWithOperatorId(environment.delegateGetInsurancePayments, operatorId);
        return this.http.post<InsurancePaymentsRequest>(url, {requestId});
    }

    private urlWithOperatorId(urlWithoutId: string, operatorId: number): string {
        return urlWithoutId.replace(':operatorId', `${operatorId}`);
    }
}
