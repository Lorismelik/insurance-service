import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './sign.up.component.html',
    styleUrls: ['./sign.up.component.css']
})
export class SignUpComponent implements OnInit {
    protected login: string;
    protected password: string;
    protected personType: string;
    protected name: string;
    protected readonly authService: AuthService;

    constructor(private router: Router, authService: AuthService) {
        this.authService = authService;
    }

    ngOnInit() {
    }

    signUp() {
        this.authService.signUp(this.login, this.password, this.personType, this.name).subscribe(
            data => {}, error => console.error(error)
        );
        this.router.navigateByUrl('/signin');
    }

}
