package com.kspt.insurance.models.requests;

import com.kspt.insurance.configuration.Constants;
import com.kspt.insurance.models.AbstractEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.jetbrains.annotations.NotNull;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.Instant;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = Constants.Request.INSURANCE_PAYMENTS_REQUEST)
@EqualsAndHashCode(callSuper = true)
public class InsurancePaymentsRequest extends AbstractEntity {

    @Column(name = "insurancePolisId")
    private Long insurancePolisId;

    @Column(name = "operatorId")
    private Long operatorId;

    @Column(name = "clientId")
    private Long clientId;

    @Column(name = "insuranceAgentId")
    private Long insuranceAgentId;

    @Column(name = "additionalData")
    private String additionalData;

    @Column(name = "review")
    private String review;

    @Column(name = "payments")
    private Integer payments;

    @Column(name = "status")
    private String status;

    @Column(name = "date")
    private Instant date;

    public InsurancePaymentsRequest(@NotNull final Long clientId,
                              @NotNull final String additionalData) {
        this.clientId = clientId;
        this.additionalData = additionalData;
        this.date = Instant.now();
        this.status = Constants.InsurancePaymentsStatus.CREATED;
    }
}
