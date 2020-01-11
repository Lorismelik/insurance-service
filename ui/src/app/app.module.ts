import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {SignInComponent} from './auth/signin/sign.in.component';
import {SignUpComponent} from './auth/signup/sign.up.component';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {ClientBaseComponent} from "./client/client-base/client.base.component";
import {ClientInfoComponent} from "./client/client-info/client.info.component";
import {ClientPassportComponent} from "./client/client-passport/client.passport.component";
import {ClientInsurancePolisComponent} from "./client/client-insurance-polis/client.insurance.polis.component";
import {ClientBrokerageAccountInfoComponent} from "./client/client-brokerage-account-info/client.brokerage.account.info.component";
import {ClientPutMoneyComponent} from "./client/client-put-money/client.put.money.component";
import {ClientExchangeComponent} from "./client/client-exchange/client.exchange.component";
import {ClientAgreementComponent} from "./client/client-argreement/client.agreement.component";
import {ClientAgreementExtendComponent} from "./client/client-agreement-extend/client.agreement.extend.component";
import {ClientAgreementInfoComponent} from "./client/client-agreement-info/client.agreement.info.component";
import {ClientExchangeMoneyToStocksComponent} from "./client/client-exchange-money-to-stocks/client.exchange.money.to.stocks.component";
import {ClientExchangeStocksToMoneyComponent} from "./client/client-exchange-stocks-to-money/client.exchange.stocks.to.money.component";
import {ClientRequestsComponent} from "./client/client-requests/client.requests.component";
import {ClientRequestComponent} from "./client/client-request/client.request.component";
import {ClientTransactionsComponent} from "./client/client-transactions/client.transactions.component";
import {ClientTransactionComponent} from "./client/client-transaction/client.transaction.component";
import {ClientAssetsComponent} from "./client/client-assets/client.assets.component";
import {ClientAssetComponent} from "./client/client-asset/client.asset.component";
import {ClientStocksComponent} from "./client/client-stocks/client.stocks.component";
import {ClientStockComponent} from "./client/client-stock/client.stock.component";
import {ClientService} from "./services/client.service";
import {OperatorService} from "./services/operator.service";
import {AgentService} from "./services/agent.service";
import {AgentBaseComponent} from "./agent/agent-base/agent.base.component";
import {AgentInfoComponent} from "./agent/agent-info/agent.info.component";
import {AgentProcessedRequestsComponent} from "./agent/agent-requests/agent.processed.requests.component";
import {BrokerRequestComponent} from "./agent/broker-request/broker.request.component";
import {BrokerAgreementsComponent} from "./agent/broker-agreements/broker.agreements.component";
import {BrokerAgreementComponent} from "./agent/broker-agreement/broker.agreement.component";
import {OperatorBaseComponent} from "./operator/operator-base/operator.base.component";
import {OperatorInfoComponent} from "./operator/operator-info/operator.info.component";
import {AdminBrokersComponent} from "./operator/admin-brokers/admin.brokers.component";
import {AdminRatesComponent} from "./operator/admin-rates/admin.rates.component";
import {AdminBankComponent} from "./operator/admin-bank/admin.bank.component";
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
        ClientBrokerageAccountInfoComponent,
        ClientAgreementComponent,
        ClientAgreementInfoComponent,
        ClientAgreementExtendComponent,
        ClientPutMoneyComponent,
        ClientExchangeComponent,
        ClientExchangeMoneyToStocksComponent,
        ClientExchangeStocksToMoneyComponent,
        ClientRequestsComponent,
        ClientRequestComponent,
        ClientTransactionsComponent,
        ClientTransactionComponent,
        ClientAssetsComponent,
        ClientAssetComponent,
        ClientStocksComponent,
        ClientStockComponent,
        AgentBaseComponent,
        AgentInfoComponent,
        AgentProcessedRequestsComponent,
        BrokerRequestComponent,
        BrokerAgreementsComponent,
        BrokerAgreementComponent,
        OperatorBaseComponent,
        OperatorInfoComponent,
        AdminBrokersComponent,
        OperatorUnparentedRequestsComponent,
        AdminRatesComponent,
        AdminBankComponent,
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
