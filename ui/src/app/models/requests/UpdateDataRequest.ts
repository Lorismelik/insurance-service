import {Entity} from '../entity.model';

export class UpdatePolisDataRequest extends Entity {
    insurancePolisId: number;
    operatorId: number;
    newData: string;
    clientId: number;
    status: string;
}
