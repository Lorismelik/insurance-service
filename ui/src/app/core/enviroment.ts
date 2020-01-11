const baseUrl = 'http://localhost:8080/api/';
const operatorPrefix = baseUrl + 'operator/';
const agentPrefix = baseUrl + 'agent/';
const clientPrefix = baseUrl + 'client/';
const systemPrefix = baseUrl + 'system/';

export function createEnv() {
    return {
        clientPrefix,
        getClientInfo: clientPrefix,
        getClientById: clientPrefix + 'get/:clientId',
        setClientPassport: 'setPassport',
        openBrokerageAccount: clientPrefix + 'openBrokerageAccount/:clientId',
        closeBrokerageAccount: clientPrefix + 'closeBrokerageAccount/:clientId',
        putMoneyToAccount: clientPrefix + ':clientId/putMoneyToAccount',
        makeBrokerAgreement: clientPrefix + ':clientId/makeBrokerAgreement',
        extendBrokerAgreement: clientPrefix + ':clientId/extendBrokerAgreement',
        breakBrokerAgreement: clientPrefix + ':clientId/breakBrokerAgreement',
        exchangeMoneyToStocks: clientPrefix + ':clientId/exchangeMoneyToStocks',
        exchangeStocksToMoney: clientPrefix + ':clientId/exchangeStocksToMoney',
        getClientTransactions: clientPrefix + ':clientId/getTransactions',
        getClientTransactionById: clientPrefix + ':clientId/transaction/:id',
        getClientRequests: clientPrefix + ':clientId/getRequests',
        getClientRequestById: clientPrefix + ':clientId/request/:id',

        checkBrokerRequests: agentPrefix + ':brokerId/checkRequests',
        declineClientRequest: agentPrefix + ':brokerId/declineClientRequest',

        getOperator: operatorPrefix,
        getOperatorById: operatorPrefix + 'get/:operatorId',
        getAdminBrokers: operatorPrefix + ':adminId/getBrokers',
        declineRequest: operatorPrefix + 'declineRequest/:clientRequestId',
        getRates: operatorPrefix + 'getRates',
        getBankAssets: operatorPrefix + 'getBankAssets',

        signIn: systemPrefix + 'signIn',
        signUp: systemPrefix + 'signUp',
        signOut: systemPrefix + 'signOut',

        checkUnparentedCreateRequests: operatorPrefix + ':operatorId/checkUnresolvedCreate',
        checkUnresolvedUpdateDataRequests: operatorPrefix + ':operatorId/checkUnresolvedUpdateData',
        checkUnresolvedGetInsurancePaymentsRequests: operatorPrefix + ':operatorId/checkUnresolvedGetInsurancePayments',
        getCreateRequestsOperator: operatorPrefix + ':operatorId/getCreatePolis',
        getInsurancePaymentsOperator: operatorPrefix + ':operatorId/getInsurancePayments',
        getUpdateDataOperator: operatorPrefix + ':operatorId/getUpdateData',
        delegateCreateRequest: operatorPrefix + ':operatorId/delegateCreate',
        approveCreateRequest: operatorPrefix + ':operatorId/approveCreate',

        getAgent: agentPrefix,
        getAgentById: agentPrefix + 'get/:agentId',
        getAllAgents: agentPrefix + 'getAll',
        getInsurancePaymentsAgent : agentPrefix + ':agentId/getInsurancePayments',
        getCreatePolisAgent: agentPrefix + ':agentId/getCreatePolis',
        processCreateRequest: agentPrefix + ':agentId/processCreateRequest',

        getClient: clientPrefix,
        getPolis: clientPrefix + ':clientId/getPolis',
        createRequestForPolis: clientPrefix + ':clientId/createPolis',
        getCreatePolisClient: clientPrefix + ':clientId/getCreatePolis',
        getUpdateDataClient: clientPrefix + ':clientId/getUpdateData',
        getInsurancePaymentsClient: clientPrefix + ':clientId/getInsurancePayments',
        getClosePolisClient: clientPrefix + ':clientId/getClosePolis',
        payForPolis: clientPrefix + ':clientId/payForPolis'
    };
}

export let environment = createEnv();
