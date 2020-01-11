import {Entity} from '../entity.model';


export class CreateRequest extends Entity {
    startdate: Date;
    period: string;
    operatorId: number;
    insuranceAgentId: number;
    status: string;
    data: string;
    cost: number;
    clientId: number;
}
