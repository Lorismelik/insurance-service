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
        validateClientRequest: agentPrefix + ':brokerId/validateClientRequest',
        approveClientRequest: agentPrefix + ':brokerId/approveClientRequest',
        declineClientRequest: agentPrefix + ':brokerId/declineClientRequest',

        getOperator: operatorPrefix,
        getOperatorById: operatorPrefix + 'get/:operatorId',
        getAdminBrokers: operatorPrefix + ':adminId/getBrokers',
        approveRequest: operatorPrefix + ':adminId/approveRequest',
        declineRequest: operatorPrefix + 'declineRequest/:clientRequestId',
        getRates: operatorPrefix + 'getRates',
        getBankAssets: operatorPrefix + 'getBankAssets',

        signIn: systemPrefix + 'signIn',
        signUp: systemPrefix + 'signUp',
        signOut: systemPrefix + 'signOut',

        checkUnparentedCreateRequests: operatorPrefix + ':operatorId/checkUnresolvedCreate',
        checkUnresolvedUpdateDataRequests: operatorPrefix + ':operatorId/checkUnresolvedUpdateData',
        checkUnresolvedGetInsurancePaymentsRequests: operatorPrefix + ':operatorId/checkUnresolvedGetInsurancePayments',

        getAgent: agentPrefix,
        getAgentById: agentPrefix + 'get/:agentId',
        getAllAgents: agentPrefix + 'getAll'
    };
}

export let environment = createEnv();
