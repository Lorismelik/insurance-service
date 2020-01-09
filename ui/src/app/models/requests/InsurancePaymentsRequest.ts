import {Entity} from '../entity.model';


export class InsurancePaymentsRequest extends Entity {
    insurancePolisId: number;
    operatorId: number;
    insuranceAgentId: number;
    clientId: number;
    status: string;
    additionalData: string;
    review: string;
    payments: number;
    date: Date;
}
