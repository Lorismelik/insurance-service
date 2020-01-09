package com.kspt.insurance.services.actors;

import com.kspt.insurance.configuration.Constants;
import com.kspt.insurance.models.actors.InsuranceAgent;
import com.kspt.insurance.models.requests.ClosePolisRequest;
import com.kspt.insurance.models.requests.CreatePolisRequest;
import com.kspt.insurance.models.requests.InsurancePaymentsRequest;
import com.kspt.insurance.models.requests.UpdatePolisDataRequest;
import com.kspt.insurance.models.actors.Client;
import com.kspt.insurance.models.system.*;
import com.kspt.insurance.repositories.actors.ClientRepository;
import com.kspt.insurance.repositories.actors.OperatorRepository;
import com.kspt.insurance.repositories.requests.ClosePolisRequestRepository;
import com.kspt.insurance.repositories.requests.CreatePolisRequestRepository;
import com.kspt.insurance.repositories.requests.InsurancePaymentsRequestRepository;
import com.kspt.insurance.repositories.requests.UpdatePolisDataRequestRepository;
import com.kspt.insurance.repositories.system.InsurancePolisRepository;
import com.kspt.insurance.repositories.system.PassportRepository;
import com.kspt.insurance.services.CrudService;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.*;

@Service
public class ClientService extends CrudService<Client, ClientRepository> {

    private final PassportRepository passportRepository;
    private final CreatePolisRequestRepository createPolisRequestRepository;
    private final OperatorRepository operatorRepository;
    private final InsurancePolisRepository insurancePolisRepository;
    private final UpdatePolisDataRequestRepository updatePolisDataRequestRepository;
    private final InsurancePaymentsRequestRepository insurancePaymentsRequestRepository;
    private final ClosePolisRequestRepository closePolisRequestRepository;

    public ClientService(@NotNull final ClientRepository clientRepository,
                         @NotNull final PassportRepository passportRepository,
                         @NotNull final CreatePolisRequestRepository createPolisRequestRepository,
                         @NotNull final OperatorRepository operatorRepository,
                         @NotNull final InsurancePolisRepository insurancePolisRepository,
                         @NotNull final UpdatePolisDataRequestRepository updatePolisDataRequestRepository,
                         @NotNull final InsurancePaymentsRequestRepository insurancePaymentsRequestRepository,
                         @NotNull final ClosePolisRequestRepository closePolisRequestRepository) {
        super(clientRepository);
        this.updatePolisDataRequestRepository = updatePolisDataRequestRepository;
        this.operatorRepository = operatorRepository;
        this.passportRepository = passportRepository;
        this.createPolisRequestRepository = createPolisRequestRepository;
        this.insurancePolisRepository = insurancePolisRepository;
        this.insurancePaymentsRequestRepository = insurancePaymentsRequestRepository;
        this.closePolisRequestRepository = closePolisRequestRepository;
    }

    @Override
    public Client update(@NotNull final Long id,
                         @NotNull final Client client) {
        if (repository.existsById(id)) {
            if (client.getIsAuthenticated()) {
                client.setId(id);
                return repository.save(client);
            }
        }
        return null;
    }

    public List<CreatePolisRequest> getCreatePolisRequestById(@NotNull final Long clientId) {
        return  createPolisRequestRepository.findByClientId(clientId);
    }

    public List<InsurancePaymentsRequest> getInsurancePaymentsRequestById(@NotNull final Long clientId) {
        return  insurancePaymentsRequestRepository.findByClientId(clientId);
    }

    public List<UpdatePolisDataRequest> getUpdatePolisDataRequestById(@NotNull final Long clientId) {
        return  updatePolisDataRequestRepository.findByClientId(clientId);
    }

    public List<ClosePolisRequest> getClosePolisRequestById(@NotNull final Long clientId) {
        return  closePolisRequestRepository.findByClientId(clientId);
    }

    @Transactional
    public Client setPassport(@NotNull final Long clientId,
                              @NotNull final Map<String, String> data) {
        Client client = repository.findById(clientId).orElse(null);
        if (client == null || !client.getIsAuthenticated()) return null;
        final int series = Integer.parseInt(data.get("series"));
        final int number = Integer.parseInt(data.get("number"));
        final Passport passport = passportRepository.save(new Passport(series, number));
        client.setPassport(passport);
        return repository.save(client);
    }

    public Client setPhone(@NotNull final Long clientId,
                              @NotNull final Map<String, String> data) {
        Client client = repository.findById(clientId).orElse(null);
        if (client == null || !client.getIsAuthenticated()) return null;
        final String phone = data.get("phone");
        client.setPhone(phone);
        return repository.save(client);
    }

    @Transactional
    public CreatePolisRequest createRequestForPolis(@NotNull final Long clientId,
                                                @NotNull final Map<String, String> data) {
        Optional<Client> optionalClient = repository.findById(clientId);
        if (!optionalClient.isPresent()) return null;
        Client client = optionalClient.get();
        final String period = data.get("period");
        CreatePolisRequest request = new CreatePolisRequest(clientId, period);
        CreatePolisRequest savedRequest = createPolisRequestRepository.save(request);
        List<CreatePolisRequest> createPolisRequests = client.getCreatePolisRequests();
        createPolisRequests.add(savedRequest);
        client.setCreatePolisRequests(createPolisRequests);
        repository.save(client);
        return savedRequest;
    }

    @Transactional
    public UpdatePolisDataRequest createRequestForUpdatePolis(@NotNull final Long clientId,
                                                    @NotNull final Map<String, String> data) {
        Client client = repository.findById(clientId).orElse(null);
        if (client == null || !client.getIsAuthenticated()) return null;
        final String newData = data.get("newData");
        final Long polisId = Long.parseLong(data.get("polisId"));
        UpdatePolisDataRequest request = new UpdatePolisDataRequest(polisId, null, clientId, newData, Constants.UpdatePolisDataStatus.CREATED);
        UpdatePolisDataRequest savedRequest = updatePolisDataRequestRepository.save(request);
        List<UpdatePolisDataRequest> updatePolisDataRequest = client.getUpdatePolisDataRequests();
        updatePolisDataRequest.add(savedRequest);
        client.setUpdatePolisDataRequests(updatePolisDataRequest);
        repository.save(client);
        return savedRequest;
    }

    @Transactional
    public InsurancePaymentsRequest createRequestForInsurancePayments(@NotNull final Long clientId,
                                                                      @NotNull final Map<String, String> data) {
        Client client = repository.findById(clientId).orElse(null);
        if (client == null || !client.getIsAuthenticated()) return null;
        final String additionalData = data.get("additionalData");
        InsurancePaymentsRequest request = new InsurancePaymentsRequest(clientId, additionalData);
        InsurancePaymentsRequest savedRequest = insurancePaymentsRequestRepository.save(request);
        List<InsurancePaymentsRequest> insurancePaymentsRequests = client.getInsurancePaymentsRequest();
        insurancePaymentsRequests.add(savedRequest);
        client.setInsurancePaymentsRequest(insurancePaymentsRequests);
        repository.save(client);
        return savedRequest;
    }

    @Transactional
    public InsurancePolis payForPolis(@NotNull final Long clientId,
                                      @NotNull final Map<String, String> data) {
        Client client = repository.findById(clientId).orElse(null);
        if (client == null || !client.getIsAuthenticated()) return null;
        final Long requestId = Long.parseLong(data.get("requestId"));
        Optional<CreatePolisRequest> optionalRequest = createPolisRequestRepository.findById(requestId);
        if (!optionalRequest.isPresent()) return null;
        CreatePolisRequest createPolisRequest = optionalRequest.get();
        if (client.getWallet() >= createPolisRequest.getCost() && !createPolisRequest.getStatus().equals(Constants.CreatePolisStatus.DECLINED)) {
            client.setWallet(client.getWallet() - createPolisRequest.getCost());
            operatorRepository.findById(createPolisRequest.getOperatorId()).ifPresent(
                    x -> {x.setBank(x.getBank() + createPolisRequest.getCost()); operatorRepository.save(x);}
            );
            createPolisRequest.setStatus(Constants.CreatePolisStatus.COMPLETED);
            createPolisRequestRepository.save(createPolisRequest);
            InsurancePolis polis = new InsurancePolis(clientId,
                    createPolisRequest.getInsuranceAgentId(),
                    createPolisRequest.getPeriod(),
                    createPolisRequest.getStartdate(),
                    createPolisRequest.getData(),
                    Constants.PolisStatus.OPENED
                    );
            return insurancePolisRepository.save(polis);

        }
        return null;
    }

    public Client updateWallet(@NotNull final Long clientId,
                               @NotNull final Integer money) {
        Client client = repository.findById(clientId).orElse(null);
        if (client == null || !client.getIsAuthenticated()) return null;
        client.setWallet(client.getWallet() + money);
        return repository.save(client);
    }

    @Transactional
    public ClosePolisRequest closePolis(@NotNull final Long clientId,
                                        @NotNull final Long polisId) {
        Client client = repository.findById(clientId).orElse(null);
        if (client == null || !client.getIsAuthenticated()) return null;
        Optional<InsurancePolis> optionalInsurancePolis = insurancePolisRepository.findById(polisId);
        if (!optionalInsurancePolis.isPresent()) return null;
        InsurancePolis insurancePolis = optionalInsurancePolis.get();
        insurancePolis.setStatus(Constants.PolisStatus.CLOSED);
        ClosePolisRequest request = new ClosePolisRequest(polisId, clientId, Instant.now());
        insurancePolisRepository.save(insurancePolis);
        return closePolisRequestRepository.save(request);

    }
}
