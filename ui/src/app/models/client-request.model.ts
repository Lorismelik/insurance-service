import {Entity} from "./entity.model";

export class ClientRequest extends Entity {
    startDate: Date;
    adminId: number;
    brokerId: number;
    clientId: number;
    quantity: number;
    fromType: string;
    toType: string;
    status: string;
    requestType: string;
}
