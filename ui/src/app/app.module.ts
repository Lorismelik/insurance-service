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
import {AgentProcessedRequestsComponent} from './agent/agent-requests/agent-processed-requests/agent.processed.requests.component';
import {OperatorBaseComponent} from './operator/operator-base/operator.base.component';
import {OperatorInfoComponent} from './operator/operator-info/operator.info.component';
import {StoreService} from './services/store.service';
import {CreateRequestPopup} from './request/create-request-popup/create.request.popup';
import {CreatePeriodPopup} from './client/client-period-popup/client.period.popup';
import {OperatorUnparentedRequestsComponent} from './operator/operator-requests/operator-unparanted-requests/operator.unparented.requests.component';
import {OperatorProcessedRequestsComponent} from './operator/operator-requests/operator-processed-requests/operator.processed.requests.component';
import {ClientProcessedRequestsComponent} from './client/client-requests/client-processed-requests/client.processed.requests.component';
import {ClientClosedRequestsComponent} from './client/client-requests/client-closed-requests/client.closed.requests.component';
import {AgentClosedRequestsComponent} from './agent/agent-requests/agent-closed-requests/agent.closed.requests.component';
import {OperatorClosedRequestsComponent} from './operator/operator-requests/operator-closed-requests/operator.closed.requests.component';
import {ClientInsurancePolisPopup} from './client/client-insurance-polis-popup/client.insurance.polis.popup';
import {AgentClients} from './agent/agent-clients/agent.clients.component';
import {UpdatePolisDataRequestPopup} from './request/update-polis-data-popup/update.polis.data.request.popup';
import {ClientPaymentRequestCommentPopup} from './client/client-payment-request-comment-popup/client.payment.request.comment.popup';
import {GetPaymentsRequestPopup} from './request/get-payments-request-popup/get.payments.request.popup';

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
        ClientClosedRequestsComponent,
        AgentClosedRequestsComponent,
        OperatorClosedRequestsComponent,
        ClientInsurancePolisPopup,
        UpdatePolisDataRequestPopup,
        ClientPaymentRequestCommentPopup,
        GetPaymentsRequestPopup,
        AgentClients
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
