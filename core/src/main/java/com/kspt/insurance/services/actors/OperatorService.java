package com.kspt.insurance.services.actors;

import com.kspt.insurance.configuration.Constants;
import com.kspt.insurance.models.actors.Client;
import com.kspt.insurance.models.requests.CreatePolisRequest;
import com.kspt.insurance.models.requests.InsurancePaymentsRequest;
import com.kspt.insurance.models.requests.UpdatePolisDataRequest;
import com.kspt.insurance.models.actors.InsuranceAgent;
import com.kspt.insurance.models.actors.Operator;
import com.kspt.insurance.repositories.actors.ClientRepository;
import com.kspt.insurance.repositories.actors.InsuranceAgentRepository;
import com.kspt.insurance.repositories.actors.OperatorRepository;
import com.kspt.insurance.repositories.requests.CreatePolisRequestRepository;
import com.kspt.insurance.repositories.requests.InsurancePaymentsRequestRepository;
import com.kspt.insurance.repositories.requests.UpdatePolisDataRequestRepository;
import com.kspt.insurance.repositories.system.InsurancePolisRepository;
import com.kspt.insurance.services.CrudService;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OperatorService extends CrudService<Operator, OperatorRepository> {

    private final ClientRepository clientRepository;
    private final CreatePolisRequestRepository createPolisRequestRepository;
    private final InsuranceAgentRepository insuranceAgentRepository;
    private final InsurancePolisRepository insurancePolisRepository;
    private final UpdatePolisDataRequestRepository updatePolisDataRequestRepository;
    private final InsurancePaymentsRequestRepository insurancePaymentsRequestRepository;

    public OperatorService(@NotNull OperatorRepository repository,
                           @NotNull final ClientRepository clientRepository,
                           @NotNull final InsuranceAgentRepository insuranceAgentRepository,
                           @NotNull final CreatePolisRequestRepository createPolisRequestRepository,
                           @NotNull final UpdatePolisDataRequestRepository updatePolisDataRequestRepository,
                           @NotNull final InsurancePolisRepository insurancePolisRepository,
                           @NotNull final InsurancePaymentsRequestRepository insurancePaymentsRequestRepository) {
        super(repository);
        this.insurancePolisRepository = insurancePolisRepository;
        this.updatePolisDataRequestRepository = updatePolisDataRequestRepository;
        this.insuranceAgentRepository = insuranceAgentRepository;
        this.createPolisRequestRepository = createPolisRequestRepository;
        this.clientRepository = clientRepository;
        this.insurancePaymentsRequestRepository = insurancePaymentsRequestRepository;
    }

    public List<CreatePolisRequest> getCreatePolisRequestById(@NotNull final Long operatorId) {
        return  createPolisRequestRepository.findByOperatorId(operatorId);
    }

    public List<InsurancePaymentsRequest> getInsurancePaymentsRequestById(@NotNull final Long operatorId) {
        return  insurancePaymentsRequestRepository.findByOperatorId(operatorId);
    }

    public List<UpdatePolisDataRequest> getUpdatePolisDataRequestById(@NotNull final Long operatorId) {
        return  updatePolisDataRequestRepository.findByOperatorId(operatorId);
    }

    @Transactional
    public CreatePolisRequest delegateCreateRequestToAgent(@NotNull final Long operatorId,
                                                           @NotNull final Map<String, String> data) {
        Long requestId = Long.parseLong(data.get("requestId"));
        Operator operator = repository.findById(operatorId).orElse(null);
        if (operator == null || !operator.getIsAuthenticated()) return null;
        Long agentId = Long.parseLong(data.get("agentId"));

        Optional<CreatePolisRequest> requestOptional = createPolisRequestRepository.findById(requestId);
        if (!requestOptional.isPresent()) return null;
        CreatePolisRequest request = requestOptional.get();
        request.setOperatorId(operatorId);
        request.setInsuranceAgentId(agentId);
        request.setStatus(Constants.CreatePolisStatus.PROCESSED);
        CreatePolisRequest savedRequest = createPolisRequestRepository.save(request);
        InsuranceAgent agent = insuranceAgentRepository.findById(agentId).get();
        List<CreatePolisRequest> operatorRequests = operator.getCreatePolisRequests();
        operatorRequests.add(savedRequest);
        List<CreatePolisRequest> agentRequests = agent.getCreatePolisRequests();
        agentRequests.add(savedRequest);
        operator.setCreatePolisRequests(operatorRequests);
        agent.setCreatePolisRequests(agentRequests);
        repository.save(operator);
        insuranceAgentRepository.save(agent);
        return savedRequest;
    }

    @Transactional
    public InsurancePaymentsRequest delegateGetInsurancePaymentsRequestToAgent(@NotNull final Long operatorId,
                                                                               @NotNull final Map<String, String> data) {
        Long requestId = Long.parseLong(data.get("requestId"));
        Operator operator = repository.findById(operatorId).orElse(null);
        if (operator == null || !operator.getIsAuthenticated()) return null;
        Long agentId = Long.parseLong(data.get("agentId"));

        Optional<InsurancePaymentsRequest> requestOptional = insurancePaymentsRequestRepository.findById(requestId);
        if (!requestOptional.isPresent()) return null;
        InsurancePaymentsRequest request = requestOptional.get();
        request.setOperatorId(operatorId);
        request.setInsuranceAgentId(agentId);
        request.setStatus(Constants.InsurancePaymentsStatus.PROCESSED);
        InsurancePaymentsRequest savedRequest = insurancePaymentsRequestRepository.save(request);
        InsuranceAgent agent = insuranceAgentRepository.findById(agentId).get();
        List<InsurancePaymentsRequest> operatorRequests = operator.getInsurancePaymentsRequests();
        operatorRequests.add(savedRequest);
        List<InsurancePaymentsRequest> agentRequests = agent.getInsurancePaymentsRequests();
        agentRequests.add(savedRequest);
        operator.setInsurancePaymentsRequests(operatorRequests);
        agent.setInsurancePaymentsRequests(agentRequests);
        repository.save(operator);
        insuranceAgentRepository.save(agent);
        return savedRequest;
    }

    public List<CreatePolisRequest> getUnresolvedCreateRequests(Long id) {
        Operator operator = repository.findById(id).orElse(null);
        if (operator == null || !operator.getIsAuthenticated()) return null;
        return createPolisRequestRepository.findAll()
                .stream()
                .filter(x -> x.getInsuranceAgentId() == null && x.getOperatorId() == null)
                .collect(Collectors.toList());
    }

    public List<CreatePolisRequest> getCreateRequestsByOperator(Long id) {
        Operator operator = repository.findById(id).orElse(null);
        if (operator == null || !operator.getIsAuthenticated()) return null;
        return createPolisRequestRepository.findByOperatorId(id);
    }

    public List<UpdatePolisDataRequest> getUpdateRequestsByOperator(Long id) {
        Operator operator = repository.findById(id).orElse(null);
        if (operator == null || !operator.getIsAuthenticated()) return null;
        return updatePolisDataRequestRepository.findByOperatorId(id);
    }

    public List<InsurancePaymentsRequest> getInsurancePaymentsRequestsByOperator(Long id) {
        Operator operator = repository.findById(id).orElse(null);
        if (operator == null || !operator.getIsAuthenticated()) return null;
        return insurancePaymentsRequestRepository.findByOperatorId(id);
    }

    public List<UpdatePolisDataRequest> getUnresolvedUpdateRequests(Long id) {
        Operator operator = repository.findById(id).orElse(null);
        if (operator == null || !operator.getIsAuthenticated()) return null;
        return updatePolisDataRequestRepository.findAll()
                .stream()
                .filter(x -> x.getOperatorId() == null)
                .collect(Collectors.toList());
    }

    public List<InsurancePaymentsRequest> getUnresolvedInsurancePaymentsRequests(Long id) {
        Operator operator = repository.findById(id).orElse(null);
        if (operator == null || !operator.getIsAuthenticated()) return null;
        return insurancePaymentsRequestRepository.findAll()
                .stream()
                .filter(x -> x.getOperatorId() == null)
                .collect(Collectors.toList());
    }

    @Transactional
    public CreatePolisRequest makeDecisionForCreateRequest(@NotNull final Long operatorId,
                                                           @NotNull final Map<String, String> data) {
        Long requestId = Long.parseLong(data.get("requestId"));
        Operator operator = repository.findById(operatorId).orElse(null);
        if (operator == null || !operator.getIsAuthenticated()) return null;
        boolean approved = Boolean.parseBoolean(data.get("approved"));
        Optional<CreatePolisRequest> requestOptional = createPolisRequestRepository.findById(requestId);
        if (!requestOptional.isPresent()) return null;
        CreatePolisRequest request = requestOptional.get();
        if (!approved) {
            request.setStatus(Constants.CreatePolisStatus.DECLINED);
        } else {
            request.setStatus(Constants.CreatePolisStatus.APPROVED);
            Integer cost = Integer.parseInt(data.get("cost"));
            request.setCost(cost);
        }
        return createPolisRequestRepository.save(request);
    }

    @Transactional
    public InsurancePaymentsRequest makeDecisionForGetInsurancePaymentsRequest(@NotNull final Long operatorId,
                                                           @NotNull final Map<String, String> data) {
        Long requestId = Long.parseLong(data.get("requestId"));
        Operator operator = repository.findById(operatorId).orElse(null);
        if (operator == null || !operator.getIsAuthenticated()) return null;
        boolean approved = Boolean.parseBoolean(data.get("approved"));
        Optional<InsurancePaymentsRequest> requestOptional = insurancePaymentsRequestRepository.findById(requestId);
        if (!requestOptional.isPresent()) return null;
        InsurancePaymentsRequest request = requestOptional.get();
        Optional<Client> clientOptional = clientRepository.findById(request.getClientId());
        if (!clientOptional.isPresent()) return null;
        Client client = clientOptional.get();
        if (!approved) {
            request.setStatus(Constants.InsurancePaymentsStatus.DECLINED);
        } else {
            if (operator.getBank() >= request.getPayments()) {
                request.setStatus(Constants.InsurancePaymentsStatus.COMPLETED);
                operator.setBank(operator.getBank() - request.getPayments());
                client.setWallet(client.getWallet() + request.getPayments());
                clientRepository.save(client);
                repository.save(operator);
            }
        }
        return insurancePaymentsRequestRepository.save(request);
    }

    @Transactional
    public UpdatePolisDataRequest makeDecisionForUpdateDataRequest(@NotNull final Long operatorId,
                                                           @NotNull final Map<String, String> data) {
        Long requestId = Long.parseLong(data.get("requestId"));
        Operator operator = repository.findById(operatorId).orElse(null);
        if (operator == null || !operator.getIsAuthenticated()) return null;
        boolean approved = Boolean.parseBoolean(data.get("approved"));
        Optional<UpdatePolisDataRequest> requestOptional = updatePolisDataRequestRepository.findById(requestId);
        if (!requestOptional.isPresent()) return null;
        UpdatePolisDataRequest request = requestOptional.get();
        if (!approved) {
            request.setStatus(Constants.UpdatePolisDataStatus.DECLINED);
        } else {
            request.setStatus(Constants.UpdatePolisDataStatus.COMPLETED);
            String newData = data.get("newData");
            insurancePolisRepository.findById(request.getInsurancePolisId()).ifPresent( x -> {
                x.setData(newData);
                insurancePolisRepository.save(x);
            });

        }
        request.setOperatorId(operatorId);
        return updatePolisDataRequestRepository.save(request);
    }

    public Operator updateBank(@NotNull final Long operatorId,
                               @NotNull final Integer money) {
        Operator operator = repository.findById(operatorId).orElse(null);
        if (operator == null || !operator.getIsAuthenticated()) return null;
        operator.setBank(operator.getBank() + money);
        return repository.save(operator);
    }
}
