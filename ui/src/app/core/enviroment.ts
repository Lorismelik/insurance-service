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

        getOperator: operatorPrefix,
        getOperatorById: operatorPrefix + 'get/:operatorId',

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
        approveUpdateData: operatorPrefix + ':operatorId/approveUpdateData',
        approveGetInsurancePayments: operatorPrefix+ ':operatorId/approveGetInsurancePayments',
        delegateGetInsurancePayments: operatorPrefix + ':operatorId/delegateGetInsurancePayments',

        getAgent: agentPrefix,
        getAgentById: agentPrefix + 'get/:agentId',
        getAllAgents: agentPrefix + 'getAll',
        getInsurancePaymentsAgent : agentPrefix + ':agentId/getInsurancePayments',
        getCreatePolisAgent: agentPrefix + ':agentId/getCreatePolis',
        getClientsById: agentPrefix + ':agentId/getClientsById',
        processCreateRequest: agentPrefix + ':agentId/processCreateRequest',
        processGetInsurancePaymentsRequest: agentPrefix + ':agentId/processGetInsurancePaymentsRequest',

        getClient: clientPrefix,
        getPolis: clientPrefix + ':clientId/getPolis',
        createRequestForPolis: clientPrefix + ':clientId/createPolis',
        getCreatePolisClient: clientPrefix + ':clientId/getCreatePolis',
        getUpdateDataClient: clientPrefix + ':clientId/getUpdateData',
        getInsurancePaymentsClient: clientPrefix + ':clientId/getInsurancePayments',
        getClosePolisClient: clientPrefix + ':clientId/getClosePolis',
        payForPolis: clientPrefix + ':clientId/payForPolis',
        createGetInsurancePaymentsRequest: clientPrefix + ':clientId/createGetInsurancePaymentsRequest',
        createUpdatePolisRequest: clientPrefix + ':clientId/createUpdatePolisRequest',
    };
}

export let environment = createEnv();
