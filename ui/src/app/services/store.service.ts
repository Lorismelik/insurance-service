import {Injectable} from '@angular/core';
import {RoleEnumModel} from '../models';

@Injectable()
export class StoreService {
    private id: number;
    private role: RoleEnumModel;
    private propertyId: number;

    constructor() {
    }

    getId() {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getPropertyId() {
        return this.propertyId;
    }

    setPropertyId(propertyId: number) {
        this.propertyId = propertyId;
    }

    getRole(): RoleEnumModel {
        return this.role;
    }

    setRole(value: string) {
        switch (value) {
            case 'client': this.role = RoleEnumModel.Client; break;
            case 'agent': this.role = RoleEnumModel.InsuranceAgent; break;
            case 'operator':  this.role = RoleEnumModel.Operator;
        }
    }
}
