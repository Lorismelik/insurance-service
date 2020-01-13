import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../core/enviroment';
import {Polis, Client, Operator} from '../models';
import {CreateRequest} from '../models/requests/CreateRequest';
import {InsurancePaymentsRequest} from '../models/requests/InsurancePaymentsRequest';
import {UpdatePolisDataRequest} from '../models/requests/UpdateDataRequest';

@Injectable()
export class ClientService {
    protected readonly http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    public getById(clientId: number) {
        const url = this.urlWithClientId(environment.getClientById, clientId);
        return this.http.get<Client>(url);
    }

    public getPolis(clientId: number) {
        const url = this.urlWithClientId(environment.getPolis, clientId);
        return this.http.get<Polis[]>(url);
    }

    public setClientPassport(clientId: number, series: number, number: number) {
        const url = `${environment.getClientInfo}${clientId}/${environment.setClientPassport}`;
        return this.http.post<Client>(url, {series, number});
    }

    createRequestForPolis(clientId: number, period: string) {
        const url = this.urlWithClientId(environment.createRequestForPolis, clientId);
        return this.http.post<CreateRequest>(url, {period});
    }

    updateWallet(clientId: number, money: number) {
        const url = `${environment.getClient}${clientId}/updateWallet/${money}`;
        return this.http.get<Client>(url);
    }

    public getCreatePolis(clientId: number) {
        const url = this.urlWithClientId(environment.getCreatePolisClient, clientId);
        return this.http.get<CreateRequest[]>(url);
    }

    public getInsurancePayments(clientId: number) {
        const url = this.urlWithClientId(environment.getInsurancePaymentsClient, clientId);
        return this.http.get<InsurancePaymentsRequest[]>(url);
    }

    public getUpdateData(clientId: number) {
        const url = this.urlWithClientId(environment.getUpdateDataClient, clientId);
        return this.http.get<UpdatePolisDataRequest[]>(url);
    }

    public payForPolis(clientId: number, requestId: number) {
        const url = this.urlWithClientId(environment.payForPolis, clientId);
        return this.http.post<Polis>(url, {requestId});
    }

    public createUpdatePolisRequest(clientId: number, polisId: number, newData: string) {
        const url = this.urlWithClientId(environment.createUpdatePolisRequest, clientId);
        return this.http.post<UpdatePolisDataRequest>(url, {polisId, newData});
    }

    public CreateGetInsurancePaymentsRequest(clientId: number, polisId: number, additionalData: string) {
        const url = this.urlWithClientId(environment.createGetInsurancePaymentsRequest, clientId);
        return this.http.post<InsurancePaymentsRequest>(url, {polisId, additionalData});
    }

    public closePolicy(clientId: number, polisId: number) {
        const url = `${environment.getClientInfo}${clientId}/closePolis/${polisId}`;
        return this.http.get<Polis>(url);
    }

    private urlWithClientId(urlWithoutId: string, clientId: number): string {
        return urlWithoutId.replace(':clientId', `${clientId}`);
    }
}
