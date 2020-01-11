import {Entity} from "../entity.model";

export interface Polis extends Entity {
    clientId: number;
    insuranceAgentId: number;
    period: string;
    startDate: Date;
    data: string;
    status: string;
}
