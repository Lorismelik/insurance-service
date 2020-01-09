package com.kspt.insurance.controllers.actors;

import com.kspt.insurance.configuration.Constants;
import com.kspt.insurance.controllers.CrudController;
import com.kspt.insurance.models.requests.CreatePolisRequest;
import com.kspt.insurance.models.requests.InsurancePaymentsRequest;
import com.kspt.insurance.models.requests.UpdatePolisDataRequest;
import com.kspt.insurance.models.actors.Operator;
import com.kspt.insurance.services.actors.OperatorService;
import org.jetbrains.annotations.NotNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(Constants.Actor.OPERATOR)
public final class OperatorController extends CrudController<Operator, OperatorService> {

    public OperatorController(@NotNull OperatorService service) {
        super(service);
    }

    @PostMapping("{requestId}/delegateCreate")
    public CreatePolisRequest delegateCreateRequest(@PathVariable final Long requestId,
                                                    @RequestBody final Map<String, String> data) {
        return service.delegateCreateRequestToAgent(requestId, data);
    }

    @PostMapping("{requestId}/delegateGetInsurancePayments")
    public InsurancePaymentsRequest delegateGetInsurancePayments(@PathVariable final Long requestId,
                                                                 @RequestBody final Map<String, String> data) {
        return service.delegateGetInsurancePaymentsRequestToAgent(requestId, data);
    }

    @GetMapping("{operatorId}/checkUnresolvedCreate")
    public List<CreatePolisRequest> getUnresolvedCreateRequests(@PathVariable final Long operatorId) {
        return service.getUnresolvedCreateRequests(operatorId);
    }

    @GetMapping("{operatorId}/checkUnresolvedUpdateData")
    public List<UpdatePolisDataRequest> getUnresolvedUpdateDataRequests(@PathVariable final Long operatorId) {
        return service.getUnresolvedUpdateRequests(operatorId);
    }

    @GetMapping("{operatorId}/checkUnresolvedGetInsurancePayments")
    public List<InsurancePaymentsRequest> getUnresolvedGetInsurancePaymentsRequests(@PathVariable final Long operatorId) {
        return service.getUnresolvedInsurancePaymentsRequests(operatorId);
    }

    @GetMapping("{operatorId}/getCreateRequestsById")
    public List<CreatePolisRequest> getCreateRequestsById(@PathVariable final Long operatorId) {
        return service.getCreateRequestsByOperator(operatorId);
    }

    @PostMapping("{requestId}/approveCreate")
    public CreatePolisRequest makeDecisionForCreateRequest(@PathVariable final Long requestId,
                                                           @RequestBody final Map<String, String> data) {
        return service.makeDecisionForCreateRequest(requestId, data);
    }

    @PostMapping("{requestId}/approveUpdateData")
    public UpdatePolisDataRequest makeDecisionForUpdateDataRequest(@PathVariable final Long requestId,
                                                                   @RequestBody final Map<String, String> data) {
        return service.makeDecisionForUpdateDataRequest(requestId, data);
    }

    @PostMapping("{requestId}/approveGetInsurancePayments")
    public InsurancePaymentsRequest makeDecisionForGetInsurancePaymentsRequest(@PathVariable final Long requestId,
                                                                   @RequestBody final Map<String, String> data) {
        return service.makeDecisionForGetInsurancePaymentsRequest(requestId, data);
    }

    @GetMapping("{operatorId}/updateBank/{money}")
    public Operator updateWallet(@PathVariable final Long operatorId,
                                 @PathVariable final Integer money) {
        return service.updateBank(operatorId, money);
    }

    @GetMapping("{operatorId}/getInsurancePayments")
    public List<InsurancePaymentsRequest> getInsurancePayments(@PathVariable final Long operatorId) {
        return service.getInsurancePaymentsRequestById(operatorId);
    }

    @GetMapping("{operatorId}/getCreatePolis")
    public List<CreatePolisRequest> getCreatePolis(@PathVariable final Long operatorId) {
        return service.getCreatePolisRequestById(operatorId);
    }

    @GetMapping("{operatorId}/getUpdateData")
    public List<UpdatePolisDataRequest> getUpdateData(@PathVariable final Long operatorId) {
        return service.getUpdatePolisDataRequestById(operatorId);
    }
}
