import {Person} from './person.model';
import {Passport} from '..';


export interface Client extends Person {
    passport: Passport;
    wallet: number;
}
