import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {SignInComponent} from './auth/signin/sign.in.component';
import {SignUpComponent} from './auth/signup/sign.up.component';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {ClientBaseComponent} from './client/client-base/client.base.component';
import {ClientInfoComponent} from './client/client-info/client.info.component';
import {ClientPassportComponent} from './client/client-passport/client.passport.component';
import {ClientInsurancePolisComponent} from './client/client-insurance-polis/client.insurance.polis.component';
import {ClientService} from './services/client.service';
import {OperatorService} from './services/operator.service';
import {AgentService} from './services/agent.service';
import {AgentBaseComponent} from './agent/agent-base/agent.base.component';
import {AgentInfoComponent} from './agent/agent-info/agent.info.component';
import {AgentProcessedRequestsComponent} from './agent/agent-requests/agent.processed.requests.component';
import {OperatorBaseComponent} from './operator/operator-base/operator.base.component';
import {OperatorInfoComponent} from './operator/operator-info/operator.info.component';
import {StoreService} from './services/store.service';
import {CreateRequestPopup} from './request/create.request.popup';
import {CreatePeriodPopup} from './client/client-period-popup/client.period.popup';
import {OperatorUnparentedRequestsComponent} from './operator/operator-requests/operator-unparanted-requests/operator.unparented.requests.component';
import {OperatorProcessedRequestsComponent} from './operator/operator-requests/operator-processed-requests/operator.processed.requests.component';
import {ClientProcessedRequestsComponent} from './client/client-requests/client-processed-requests/client.processed.requests.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        SignInComponent,
        SignUpComponent,
        ClientBaseComponent,
        ClientInfoComponent,
        ClientPassportComponent,
        ClientInsurancePolisComponent,
        AgentBaseComponent,
        AgentInfoComponent,
        AgentProcessedRequestsComponent,
        OperatorBaseComponent,
        OperatorInfoComponent,
        OperatorUnparentedRequestsComponent,
        CreateRequestPopup,
        CreatePeriodPopup,
        OperatorProcessedRequestsComponent,
        ClientProcessedRequestsComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [
        AuthService,
        OperatorService,
        AgentService,
        ClientService,
        StoreService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
