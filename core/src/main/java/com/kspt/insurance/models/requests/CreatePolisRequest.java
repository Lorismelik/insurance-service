package com.kspt.insurance.models.requests;

import com.kspt.insurance.configuration.Constants;
import com.kspt.insurance.models.AbstractEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.jetbrains.annotations.NotNull;

import javax.persistence.*;
import java.time.Instant;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Table(name = Constants.Request.CREATE_POLIS_REQUEST)
public final class CreatePolisRequest extends AbstractEntity {

    @Column(name = "startdate")
    private Instant startdate;

    @Column(name = "period")
    private String period;

    @Column(name = "operatorId")
    private Long operatorId;

    @Column(name = "clientId")
    private Long clientId;

    @Column(name = "insuranceAgentId")
    private Long insuranceAgentId;

    @Column(name = "status")
    private String status;

    @Column(name = "data")
    private String data;

    @Column(name = "cost")
    private Integer cost;


    public CreatePolisRequest(@NotNull final Long clientId,
                              @NotNull final String period) {
        this.clientId = clientId;
        this.period = period;
        this.startdate = Instant.now();

        this.status = Constants.CreatePolisStatus.CREATED;
    }

}
