import {Person} from './person.model';
import {BrokerageAccount, ClientRequest, Passport, Transaction} from '..';

export interface Client extends Person {
    passport: Passport;
    wallet: number;
    requests: ClientRequest[];
    transactions: Transaction[];
    brokerageAccount: BrokerageAccount;
}
