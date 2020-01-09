package com.kspt.insurance.models.actors;

import com.kspt.insurance.configuration.Constants;
import com.kspt.insurance.models.requests.CreatePolisRequest;
import com.kspt.insurance.models.requests.InsurancePaymentsRequest;
import com.kspt.insurance.models.system.InsurancePolis;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.jetbrains.annotations.NotNull;

import javax.persistence.*;

import java.util.List;

@Data
@Entity
@NoArgsConstructor
@Table(name = Constants.Actor.INSURANCE_AGENT)
@EqualsAndHashCode(callSuper = true)
public final class InsuranceAgent extends Person {

    @ElementCollection(fetch = FetchType.LAZY)
    private List<InsurancePolis> insurancePolis;

    @ElementCollection(fetch = FetchType.LAZY)
    private List<CreatePolisRequest> createPolisRequests;

    @ElementCollection(fetch = FetchType.LAZY)
    private List<InsurancePaymentsRequest> insurancePaymentsRequests;

    public InsuranceAgent(@NotNull final String name,
                          @NotNull final String personType) {
        this.name = name;
        this.personType = personType;
    }
}
