import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../core/enviroment';
import {Agent, ClientRequest} from '../models';

@Injectable()
export class AgentService {
    protected readonly http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    getById(agentId: number) {
        const url = this.urlWithBrokerId(environment.getAgentById, agentId);
        return this.http.get<Agent>(url);
    }

    getAll() {
        return this.http.get<Agent[]>(environment.getAllAgents);
    }

    checkRequests(brokerId: number) {
        const url = this.urlWithBrokerId(environment.checkBrokerRequests, brokerId);
        return this.http.get<ClientRequest[]>(url);
    }

    validateClientRequest(brokerId: number, clientRequestId: number) {
        const url = this.urlWithBrokerId(environment.validateClientRequest, brokerId);
        return this.http.post<boolean>(url, {clientRequestId});
    }

    approveClientRequest(brokerId: number, clientRequestId: number) {
        let url = this.urlWithBrokerId(environment.approveClientRequest, brokerId);
        return this.http.post(url, {clientRequestId});
    }

    declineClientRequest(brokerId: number, clientRequestId: number) {
        let url = this.urlWithBrokerId(environment.declineClientRequest, brokerId);
        return this.http.post(url, {clientRequestId});
    }

    private urlWithBrokerId(urlWithoutId: string, agentId: number): string {
        return urlWithoutId.replace(':agentId', `${agentId}`);
    }

}
