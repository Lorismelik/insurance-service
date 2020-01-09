import {Person} from "./person.model";
import {Transaction} from "../treasury/transaction.model";

export interface Operator extends Person {
    brokers: number[];
    account: number;
    transactions: Transaction[];
}
