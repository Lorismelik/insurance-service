package com.kspt.insurance.models.requests;

import com.kspt.insurance.configuration.Constants;
import com.kspt.insurance.models.AbstractEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.time.Instant;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = Constants.Request.CLOSE_POLIS_REQUEST)
@EqualsAndHashCode(callSuper = true)
public class ClosePolisRequest extends AbstractEntity {

    @Column(name = "insurancePolisId")
    private Long insurancePolisId;

    @Column(name = "clientId")
    private Long clientId;

    @Column(name = "date")
    private Instant date;
}
