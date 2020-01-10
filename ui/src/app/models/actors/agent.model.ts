import {Agreement, Person} from '..';

export interface Agent extends Person {
    adminId: number;
    agreements: Agreement[];
}
