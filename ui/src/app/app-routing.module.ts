import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignInComponent} from './auth/signin/sign.in.component';
import {SignUpComponent} from './auth/signup/sign.up.component';
import {ClientBaseComponent} from "./client/client-base/client.base.component";
import {ClientInfoComponent} from "./client/client-info/client.info.component";
import {HomeComponent} from "./home/home.component";
import {ClientPassportComponent} from "./client/client-passport/client.passport.component";
import {ClientInsurancePolisComponent} from "./client/client-insurance-polis/client.insurance.polis.component";
import {ClientBrokerageAccountInfoComponent} from "./client/client-brokerage-account-info/client.brokerage.account.info.component";
import {ClientAgreementComponent} from "./client/client-argreement/client.agreement.component";
import {ClientAgreementInfoComponent} from "./client/client-agreement-info/client.agreement.info.component";
import {ClientAgreementExtendComponent} from "./client/client-agreement-extend/client.agreement.extend.component";
import {ClientPutMoneyComponent} from "./client/client-put-money/client.put.money.component";
import {ClientExchangeComponent} from "./client/client-exchange/client.exchange.component";
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
import {AgentBaseComponent} from "./agent/agent-base/agent.base.component";
import {AgentInfoComponent} from "./agent/agent-info/agent.info.component";
import {AgentProcessedRequestsComponent} from "./agent/agent-requests/agent.processed.requests.component";
import {BrokerRequestComponent} from "./agent/broker-request/broker.request.component";
import {BrokerAgreementsComponent} from "./agent/broker-agreements/broker.agreements.component";
import {BrokerAgreementComponent} from "./agent/broker-agreement/broker.agreement.component";
import {OperatorBaseComponent} from "./operator/operator-base/operator.base.component";
import {OperatorInfoComponent} from "./operator/operator-info/operator.info.component";
import {AdminBrokersComponent} from "./operator/admin-brokers/admin.brokers.component";
import {OperatorUnparentedRequestsComponent} from "./operator/operator-requests/operator-unparanted-requests/operator.unparented.requests.component";
import {AdminRatesComponent} from "./operator/admin-rates/admin.rates.component";
import {AdminBankComponent} from "./operator/admin-bank/admin.bank.component";
import {OperatorProcessedRequestsComponent} from './operator/operator-requests/operator-processed-requests/operator.processed.requests.component';
import {ClientProcessedRequestsComponent} from './client/client-requests/client-processed-requests/client.processed.requests.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'signin', component: SignInComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'client/base', component: ClientBaseComponent},
    {path: 'client/info', component: ClientInfoComponent},
    {path: 'client/passport', component: ClientPassportComponent},
    {path: 'client/brokerageAccount', component: ClientInsurancePolisComponent},
    {path: 'client/brokerageAccount/info', component: ClientBrokerageAccountInfoComponent},
    {path: 'client/agreement', component: ClientAgreementComponent},
    {path: 'client/agreement/info', component: ClientAgreementInfoComponent},
    {path: 'client/agreement/extend', component: ClientAgreementExtendComponent},
    {path: 'client/putMoney', component: ClientPutMoneyComponent},
    {path: 'client/exchange', component: ClientExchangeComponent},
    {path: 'client/exchange/moneyToStocks', component: ClientExchangeMoneyToStocksComponent},
    {path: 'client/exchange/stocksToMoney', component: ClientExchangeStocksToMoneyComponent},
    {path: 'client/requests/processed', component: ClientProcessedRequestsComponent},
    {path: 'client/request/:id', component: ClientRequestComponent},
    {path: 'client/transactions', component: ClientTransactionsComponent},
    {path: 'client/transaction/:id', component: ClientTransactionComponent},
    {path: 'client/assets', component: ClientAssetsComponent},
    {path: 'client/asset/:id', component: ClientAssetComponent},
    {path: 'client/stocks', component: ClientStocksComponent},
    {path: 'client/stock/:id', component: ClientStockComponent},
    {path: 'agent/base', component: AgentBaseComponent},
    {path: 'agent/info', component: AgentInfoComponent},
    {path: 'agent/requests/processed', component: AgentProcessedRequestsComponent},
    {path: 'agent/request/:id', component: BrokerRequestComponent},
    {path: 'agent/agreements', component: BrokerAgreementsComponent},
    {path: 'agent/agreement/:id', component: BrokerAgreementComponent},
    {path: 'operator/base', component: OperatorBaseComponent},
    {path: 'operator/info', component: OperatorInfoComponent},
    {path: 'operator/brokers', component: AdminBrokersComponent},
    {path: 'operator/requests/opened', component: OperatorUnparentedRequestsComponent},
    {path: 'operator/requests/processed', component: OperatorProcessedRequestsComponent},
    {path: 'operator/rates', component: AdminRatesComponent},
    {path: 'operator/bank', component: AdminBankComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
