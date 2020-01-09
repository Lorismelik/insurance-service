package com.kspt.insurance.controllers.actors;

import com.kspt.insurance.configuration.Constants;
import com.kspt.insurance.controllers.CrudController;
import com.kspt.insurance.models.requests.ClosePolisRequest;
import com.kspt.insurance.models.requests.CreatePolisRequest;
import com.kspt.insurance.models.requests.InsurancePaymentsRequest;
import com.kspt.insurance.models.requests.UpdatePolisDataRequest;
import com.kspt.insurance.models.actors.Client;
import com.kspt.insurance.models.system.InsurancePolis;
import com.kspt.insurance.services.actors.ClientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(Constants.Actor.CLIENT)
public final class ClientController extends CrudController<Client, ClientService> {

    public ClientController(ClientService clientService) {
        super(clientService);
    }

    // series, number
    @PostMapping("{clientId}/setPassport")
    public Client setPassport(@PathVariable final Long clientId,
                              @RequestBody final Map<String, String> data) {
        return service.setPassport(clientId, data);
    }

    // phone
    @PostMapping("{clientId}/setPhone")
    public Client setPhone(@PathVariable final Long clientId,
                              @RequestBody final Map<String, String> data) {
        return service.setPhone(clientId, data);
    }

    // period
    @PostMapping("{clientId}/createPolis")
    public CreatePolisRequest createPolis(@PathVariable final Long clientId,
                                          @RequestBody final Map<String, String> data) {
        return service.createRequestForPolis(clientId, data);
    }

    @GetMapping("{clientId}/closePolis/{polisId}")
    public ClosePolisRequest createPolis(@PathVariable final Long clientId,
                                         @PathVariable final Long polisId) {
        return service.closePolis(clientId, polisId);
    }

    // additionalData
    @PostMapping("{clientId}/CreateGetInsurancePaymentsRequest")
    public InsurancePaymentsRequest getInsurancePayments(@PathVariable final Long clientId,
                                                         @RequestBody final Map<String, String> data) {
        return service.createRequestForInsurancePayments(clientId, data);
    }

    // newData, polisId
    @PostMapping("{clientId}/createUpdatePolisRequest")
    public UpdatePolisDataRequest updatePolis(@PathVariable final Long clientId,
                                              @RequestBody final Map<String, String> data) {
        return service.createRequestForUpdatePolis(clientId, data);
    }

    // requestId
    @PostMapping("{clientId}/payForPolis")
    public InsurancePolis payForPolis(@PathVariable final Long clientId,
                                      @RequestBody final Map<String, String> data) {
        return service.payForPolis(clientId, data);
    }

    @GetMapping("{clientId}/updateWallet/{money}")
    public Client updateWallet(@PathVariable final Long clientId,
                                          @PathVariable final Integer money) {
        return service.updateWallet(clientId, money);
    }

    @GetMapping("{clientId}/getInsurancePayments")
    public List<InsurancePaymentsRequest> getInsurancePayments(@PathVariable final Long clientId) {
        return service.getInsurancePaymentsRequestById(clientId);
    }

    @GetMapping("{clientId}/getCreatePolis")
    public List<CreatePolisRequest> getCreatePolis(@PathVariable final Long clientId) {
        return service.getCreatePolisRequestById(clientId);
    }

    @GetMapping("{clientId}/getUpdateData")
    public List<UpdatePolisDataRequest> getUpdateData(@PathVariable final Long clientId) {
        return service.getUpdatePolisDataRequestById(clientId);
    }

    @GetMapping("{clientId}/getClosePolis")
    public List<ClosePolisRequest> getClosePolis(@PathVariable final Long clientId) {
        return service.getClosePolisRequestById(clientId);
    }
}
