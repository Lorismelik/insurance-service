package com.kspt.insurance.controllers.actors;

import com.kspt.insurance.configuration.Constants;
import com.kspt.insurance.controllers.CrudController;
import com.kspt.insurance.models.actors.Client;
import com.kspt.insurance.models.requests.CreatePolisRequest;
import com.kspt.insurance.models.actors.InsuranceAgent;
import com.kspt.insurance.models.requests.InsurancePaymentsRequest;
import com.kspt.insurance.services.actors.InsuranceAgentService;
import org.jetbrains.annotations.NotNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(Constants.Actor.INSURANCE_AGENT)
public final class InsuranceAgentController extends CrudController<InsuranceAgent, InsuranceAgentService> {

    public InsuranceAgentController(@NotNull InsuranceAgentService service) {
        super(service);
    }

    // requestId, data
    @PostMapping("{agentId}/processCreateRequest")
    public CreatePolisRequest processCreateRequest(@PathVariable final Long agentId,
                                            @RequestBody final Map<String, String> data) {
        return service.processCreatePolisRequest(agentId, data);
    }

    // requestId, review, payments
    @PostMapping("{agentId}/processGetInsurancePaymentsRequest")
    public InsurancePaymentsRequest processGetInsurancePaymentsRequest(@PathVariable final Long agentId,
                                                                       @RequestBody final Map<String, String> data) {
        return service.processInsurancePaymentsRequest(agentId, data);
    }

    @GetMapping("{agentId}/getInsurancePayments")
    public List<InsurancePaymentsRequest> getInsurancePayments(@PathVariable final Long agentId) {
        return service.getInsurancePaymentsRequestById(agentId);
    }

    @GetMapping("{agentId}/getCreatePolis")
    public List<CreatePolisRequest> getCreatePolis(@PathVariable final Long agentId) {
        return service.getCreatePolisRequestById(agentId);
    }

    @GetMapping("{agentId}/getClientsById")
    public List<Client> getClientsById(@PathVariable final Long agentId) {
        return service.getClientsById(agentId);
    }
}
