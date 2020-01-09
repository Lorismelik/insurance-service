package com.kspt.insurance.models.actors;

import com.kspt.insurance.configuration.Constants;
import com.kspt.insurance.models.requests.CreatePolisRequest;
import com.kspt.insurance.models.requests.InsurancePaymentsRequest;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.jetbrains.annotations.NotNull;

import javax.persistence.*;

import java.util.List;

@Data
@Entity
@NoArgsConstructor
@Table(name = Constants.Actor.OPERATOR)
@EqualsAndHashCode(callSuper = true)
public final class Operator extends Person {

    @Column(name = "bank", nullable = false)
    protected Integer bank;

    @ElementCollection(fetch = FetchType.LAZY)
    private List<CreatePolisRequest> createPolisRequests;

    @ElementCollection(fetch = FetchType.LAZY)
    private List<InsurancePaymentsRequest> insurancePaymentsRequests;

    public Operator(@NotNull final String name,
                    @NotNull final String personType) {
        this.name = name;
        this.personType = personType;
    }
}
