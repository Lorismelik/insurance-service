import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../core/enviroment';
import {Polis, BrokerageAccount, Client, ClientRequest, Operator, Transaction} from '../models';
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

    public setClientPassport(clientId: number, series: number, numberr: number) {
        const url = `${environment.getClientInfo}${clientId}/${environment.setClientPassport}`;
        return this.http.post<Client>(url, {series, numberr});
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

    closeBrokerageAccount(clientId: number) {
        const url = this.urlWithClientId(environment.closeBrokerageAccount, clientId);
        return this.http.post<boolean>(url, {});
    }

    putMoneyToAccount(clientId: number, money: number, currency: string) {
        const url = this.urlWithClientId(environment.putMoneyToAccount, clientId);
        return this.http.post<boolean>(url, {money, currency});
    }

    breakBrokerAgreement(clientId: number) {
        const url = this.urlWithClientId(environment.breakBrokerAgreement, clientId);
        return this.http.post<boolean>(url, {});
    }

    exchangeMoneyForStocks(clientId: number, quantity: number, fromType: string, toType: string) {
        const url = this.urlWithClientId(environment.exchangeMoneyToStocks, clientId);
        return this.http.post<ClientRequest>(url, {quantity, fromType, toType});
    }

    exchangeStocksToMoney(clientId: number, quantity: number, fromType: string, toType: string) {
        const url = this.urlWithClientId(environment.exchangeStocksToMoney, clientId);
        return this.http.post<ClientRequest>(url, {quantity, fromType, toType});
    }

    getTransactions(clientId: number) {
        const url = this.urlWithClientId(environment.getClientTransactions, clientId);
        return this.http.get<Transaction[]>(url);
    }

    getTransactionById(clientId: number, transactionId: number) {
        const url = this.urlWithClientIdAndPropertyId(environment.getClientTransactionById, clientId, transactionId);
        return this.http.get<Transaction>(url);
    }

    getRequests(clientId: number) {
        const url = this.urlWithClientId(environment.getClientRequests, clientId);
        return this.http.get<ClientRequest[]>(url);
    }

    getRequestById(clientId: number, requestId: number) {
        const url = this.urlWithClientIdAndPropertyId(environment.getClientRequestById, clientId, requestId);
        return this.http.get<ClientRequest>(url);
    }

    private urlWithClientId(urlWithoutId: string, clientId: number): string {
        return urlWithoutId.replace(':clientId', `${clientId}`);
    }

    private urlWithClientIdAndPropertyId(urlWithoutId: string, clientId: number, id: number): string {
        return urlWithoutId
            .replace(':clientId', `${clientId}`)
            .replace(':id', `${id}`);
    }
}
