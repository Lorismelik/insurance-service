import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {StoreService} from '../../services/store.service';
import {RoleEnumModel} from '../../models';

@Component({
    templateUrl: './sign.in.component.html',
})
export class SignInComponent implements OnInit {
    public login: string;
    public password: string;

    constructor(private router: Router,
                private authService: AuthService,
                private storeService: StoreService) {
        this.authService = authService;
    }

    ngOnInit() {
    }

    signIn() {
        if (this.login.length === 0 || this.password.length === 0) {
            alert('You must fill all fields');
        }

        this.authService.signIn(this.login, this.password).subscribe(
            data => {
                if (!data) {
                    alert(`No with your credentials`);
                } else {
                    this.storeService.setId(data.id);
                    this.storeService.setRole(data.personType);
                    switch (this.storeService.getRole()) {
                        case RoleEnumModel.Client: return this.router.navigateByUrl('/client/base');
                        case  RoleEnumModel.InsuranceAgent: return this.router.navigateByUrl('/agent/base');
                        case  RoleEnumModel.Operator: return this.router.navigateByUrl('/operator/base');
                    }
                }
            }, error => alert(error));
    }
}
