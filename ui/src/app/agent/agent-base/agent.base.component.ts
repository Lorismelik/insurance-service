import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {StoreService} from '../../services/store.service';

@Component({
    templateUrl: './agent.base.component.html'
})
export class AgentBaseComponent implements OnInit {
    private agentId: number;

    constructor(private router: Router,
                private authService: AuthService,
                private storeService: StoreService) {
        this.agentId = this.storeService.getId();
    }

    ngOnInit() {
    }

    signOut() {
        this.authService.signOut(this.agentId, 'agent')
            .subscribe(() => this.router.navigateByUrl('/'), error => alert(error));
    }
}
