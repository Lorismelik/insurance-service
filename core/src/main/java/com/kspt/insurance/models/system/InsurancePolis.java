package com.kspt.insurance.models.system;

import com.kspt.insurance.configuration.Constants;
import com.kspt.insurance.models.AbstractEntity;
import lombok.*;
import org.jetbrains.annotations.NotNull;

import javax.persistence.*;
import java.time.Instant;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = Constants.System.INSURANCE_POLIS)
@EqualsAndHashCode(callSuper = true)
public final class InsurancePolis extends AbstractEntity {

    @Column(name = "clientId")
    private Long clientId;

    @Column(name = "insuranceAgentId")
    private Long insuranceAgentId;

    @Column(name = "period")
    private String period;

    @Column(name = "startDate")
    private Instant startDate;

    @Column(name = "data")
    private String data;

    @Column(name = "status")
    private String status;
}
