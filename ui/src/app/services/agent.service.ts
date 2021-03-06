import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../core/enviroment';
import {Agent, Client} from '../models';
import {CreateRequest} from '../models/requests/CreateRequest';
import {InsurancePaymentsRequest} from '../models/requests/InsurancePaymentsRequest';

@Injectable()
export class AgentService {
    protected readonly http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    getById(agentId: number) {
        const url = this.urlWithAgentId(environment.getAgentById, agentId);
        return this.http.get<Agent>(url);
    }

    getAll() {
        return this.http.get<Agent[]>(environment.getAllAgents);
    }

    getCreatePolis(agentId: number) {
        const url = this.urlWithAgentId(environment.getCreatePolisAgent, agentId);
        return this.http.get<CreateRequest[]>(url);
    }

    getClientsById(agentId: number) {
        const url = this.urlWithAgentId(environment.getClientsById, agentId);
        return this.http.get<Client[]>(url);
    }

    getInsurancePayments(agentId: number) {
        const url = this.urlWithAgentId(environment.getInsurancePaymentsAgent, agentId);
        return this.http.get<InsurancePaymentsRequest[]>(url);
    }

    processCreateRequest(agentd: number, data: string, requestId: number) {
        const url = this.urlWithAgentId(environment.processCreateRequest, agentd);
        return this.http.post<CreateRequest>(url, {data, requestId});
    }

    processGetInsurancePaymentsRequest(agentd: number, review: string, requestId: number, payments: number) {
        const url = this.urlWithAgentId(environment.processGetInsurancePaymentsRequest, agentd);
        return this.http.post<CreateRequest>(url, {review, payments, requestId});
    }

    private urlWithAgentId(urlWithoutId: string, agentId: number): string {
        return urlWithoutId.replace(':agentId', `${agentId}`);
    }

}
