import {Injectable} from '@angular/core';

@Injectable()
export class StoreService {
    private id: number;
    private role: RoleEnum;
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

    getRole(): RoleEnum {
        return this.role;
    }

    setRole(value: string) {
        switch (value) {
            case 'client': this.role = RoleEnum.Client; break;
            case 'insuranceAgent': this.role = RoleEnum.InsuranceAgent; break;
            case 'operator':  this.role = RoleEnum.Operator;
        }
    }
}
