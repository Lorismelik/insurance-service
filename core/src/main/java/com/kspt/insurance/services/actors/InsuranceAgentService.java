package com.kspt.insurance.services.actors;

import com.kspt.insurance.configuration.Constants;
import com.kspt.insurance.models.requests.CreatePolisRequest;
import com.kspt.insurance.models.actors.InsuranceAgent;
import com.kspt.insurance.models.requests.InsurancePaymentsRequest;
import com.kspt.insurance.repositories.actors.ClientRepository;
import com.kspt.insurance.repositories.actors.InsuranceAgentRepository;
import com.kspt.insurance.repositories.requests.CreatePolisRequestRepository;
import com.kspt.insurance.repositories.requests.InsurancePaymentsRequestRepository;
import com.kspt.insurance.services.CrudService;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class InsuranceAgentService extends CrudService<InsuranceAgent, InsuranceAgentRepository> {

    private final ClientRepository clientRepository;
    private final CreatePolisRequestRepository createPolisRequestRepository;
    private final InsurancePaymentsRequestRepository insurancePaymentsRequestRepository;

    public InsuranceAgentService(@NotNull final InsuranceAgentRepository repository,
                                 @NotNull final CreatePolisRequestRepository createPolisRequestRepository,
                                 @NotNull final ClientRepository clientRepository,
                                 @NotNull final InsurancePaymentsRequestRepository insurancePaymentsRequestRepository) {
        super(repository);
        this.createPolisRequestRepository = createPolisRequestRepository;
        this.clientRepository = clientRepository;
        this.insurancePaymentsRequestRepository = insurancePaymentsRequestRepository;
    }

    public List<CreatePolisRequest> getCreatePolisRequestById(@NotNull final Long agentId) {
        return  createPolisRequestRepository.findByInsuranceAgentId(agentId).stream().filter(x ->
                !x.getStatus().equals(Constants.InsurancePaymentsStatus.DECLINED) &&  !x.getStatus().equals(Constants.InsurancePaymentsStatus.COMPLETED))
                .collect(Collectors.toList());
    }

    public List<InsurancePaymentsRequest> getInsurancePaymentsRequestById(@NotNull final Long agentId) {
        return  insurancePaymentsRequestRepository.findByInsuranceAgentId(agentId).stream().filter(x ->
                !x.getStatus().equals(Constants.InsurancePaymentsStatus.DECLINED) &&  !x.getStatus().equals(Constants.InsurancePaymentsStatus.COMPLETED))
                .collect(Collectors.toList());
    }

    public CreatePolisRequest processCreatePolisRequest(@NotNull final Long agentId,
                                                 @NotNull final Map<String, String> data) {
        InsuranceAgent agent = repository.findById(agentId).orElse(null);
        if (agent == null || !agent.getIsAuthenticated()) return null;
        String polisData = data.get("data");
        Long requestId = Long.parseLong(data.get("requestId"));
        Optional<CreatePolisRequest> optionalCreatePolisRequest = createPolisRequestRepository.findById(requestId);
        if (!optionalCreatePolisRequest.isPresent()) return null;
        CreatePolisRequest createPolisRequest = optionalCreatePolisRequest.get();
        createPolisRequest.setData(polisData);
        createPolisRequest.setStatus(Constants.CreatePolisStatus.WAITING_FOR_APPROVE);
        return createPolisRequestRepository.save(createPolisRequest);
    }

    public InsurancePaymentsRequest processInsurancePaymentsRequest(@NotNull final Long agentId,
                                                                    @NotNull final Map<String, String> data) {
        InsuranceAgent agent = repository.findById(agentId).orElse(null);
        if (agent == null || !agent.getIsAuthenticated()) return null;
        Long requestId = Long.parseLong(data.get("requestId"));
        Optional<InsurancePaymentsRequest> optionalInsurancePaymentsRequest = insurancePaymentsRequestRepository.findById(requestId);
        if (!optionalInsurancePaymentsRequest.isPresent()) return null;
        InsurancePaymentsRequest insurancePaymentsRequest = optionalInsurancePaymentsRequest.get();
        String review = data.get("review");
        Integer payments = Integer.parseInt(data.get("payments"));
        insurancePaymentsRequest.setReview(review);
        insurancePaymentsRequest.setPayments(payments);
        insurancePaymentsRequest.setStatus(Constants.InsurancePaymentsStatus.WAITING_FOR_APPROVE);
        return insurancePaymentsRequestRepository.save(insurancePaymentsRequest);
    }
}
