package com.kspt.insurance.models.actors;

import com.kspt.insurance.configuration.Constants;
import com.kspt.insurance.models.requests.CreatePolisRequest;
import com.kspt.insurance.models.requests.InsurancePaymentsRequest;
import com.kspt.insurance.models.requests.UpdatePolisDataRequest;
import com.kspt.insurance.models.system.InsurancePolis;
import com.kspt.insurance.models.system.Passport;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.jetbrains.annotations.NotNull;

import javax.persistence.*;

import java.util.List;

@Data
@Entity
@NoArgsConstructor
@Table(name = Constants.Actor.CLIENT)
@EqualsAndHashCode(callSuper = true)
public final class Client extends Person {

    @JoinColumn(name = "passportId")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Passport passport;

    @JoinColumn(name = "insurancePolisId")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private InsurancePolis insurancePolis;

    @ElementCollection(fetch = FetchType.LAZY)
    private List<CreatePolisRequest> createPolisRequests;

    @ElementCollection(fetch = FetchType.LAZY)
    private List<UpdatePolisDataRequest> updatePolisDataRequests;

    @ElementCollection(fetch = FetchType.LAZY)
    private List<InsurancePaymentsRequest> insurancePaymentsRequest;

    @ElementCollection(fetch = FetchType.LAZY)
    private List<Long> requests;

    @ElementCollection(fetch = FetchType.LAZY)
    private List<Long> transactions;

    @Column(name = "wallet")
    protected Integer wallet;

    @Column(name = "phone")
    protected String phone;

    public Client(@NotNull final String name,
                  @NotNull final String personType) {
        this.name = name;
        this.personType = personType;
        this.wallet = 0;
    }
}
