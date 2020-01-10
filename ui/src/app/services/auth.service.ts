import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../core/enviroment';
import {Person} from '../models';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
    protected readonly http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    signIn(login: string, password: string): Observable<Person> {
        const url = environment.signIn;
        return this.http.post<Person>(url, {login, password});
    }

    signUp(login: string, password: string, personType: string, name: string): Observable<Person>  {
        const url = environment.signUp;
        return this.http.post<Person>(url, {login, password, personType, name});
    }

    signOut(id: number, personType: string) {
        const url = environment.signOut;
        return this.http.post(url, {id, personType});
    }
}
