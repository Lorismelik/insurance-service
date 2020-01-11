import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignInComponent} from './auth/signin/sign.in.component';
import {SignUpComponent} from './auth/signup/sign.up.component';
import {ClientBaseComponent} from './client/client-base/client.base.component';
import {ClientInfoComponent} from './client/client-info/client.info.component';
import {HomeComponent} from './home/home.component';
import {ClientPassportComponent} from './client/client-passport/client.passport.component';
import {ClientInsurancePolisComponent} from './client/client-insurance-polis/client.insurance.polis.component';
import {AgentBaseComponent} from './agent/agent-base/agent.base.component';
import {AgentInfoComponent} from './agent/agent-info/agent.info.component';
import {AgentProcessedRequestsComponent} from './agent/agent-requests/agent-processed-requests/agent.processed.requests.component';
import {OperatorBaseComponent} from './operator/operator-base/operator.base.component';
import {OperatorInfoComponent} from './operator/operator-info/operator.info.component';
import {OperatorUnparentedRequestsComponent} from './operator/operator-requests/operator-unparanted-requests/operator.unparented.requests.component';
import {OperatorProcessedRequestsComponent} from './operator/operator-requests/operator-processed-requests/operator.processed.requests.component';
import {ClientProcessedRequestsComponent} from './client/client-requests/client-processed-requests/client.processed.requests.component';
import {ClientClosedRequestsComponent} from './client/client-requests/client-closed-requests/client.closed.requests.component';
import {AgentClosedRequestsComponent} from './agent/agent-requests/agent-closed-requests/agent.closed.requests.component';
import {OperatorClosedRequestsComponent} from './operator/operator-requests/operator-closed-requests/operator.closed.requests.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'signin', component: SignInComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'client/base', component: ClientBaseComponent},
    {path: 'client/info', component: ClientInfoComponent},
    {path: 'client/passport', component: ClientPassportComponent},
    {path: 'client/polis', component: ClientInsurancePolisComponent},
    {path: 'client/requests/processed', component: ClientProcessedRequestsComponent},
    {path: 'client/requests/closed', component: ClientClosedRequestsComponent},
    {path: 'agent/base', component: AgentBaseComponent},
    {path: 'agent/info', component: AgentInfoComponent},
    {path: 'agent/requests/processed', component: AgentProcessedRequestsComponent},
    {path: 'agent/requests/closed', component: AgentClosedRequestsComponent},
    {path: 'operator/base', component: OperatorBaseComponent},
    {path: 'operator/info', component: OperatorInfoComponent},
    {path: 'operator/requests/opened', component: OperatorUnparentedRequestsComponent},
    {path: 'operator/requests/processed', component: OperatorProcessedRequestsComponent},
    {path: 'operator/requests/closed', component: OperatorClosedRequestsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
