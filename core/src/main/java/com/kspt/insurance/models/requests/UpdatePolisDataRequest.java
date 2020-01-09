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

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = Constants.Request.UPDATE_POLIS_DATA_REQUEST)
@EqualsAndHashCode(callSuper = true)
public class UpdatePolisDataRequest extends AbstractEntity {

    @Column(name = "insurancePolisId")
    private Long insurancePolisId;

    @Column(name = "operatorId")
    private Long operatorId;

    @Column(name = "clientId")
    private Long clientId;

    @Column(name = "newData")
    private String newData;

    @Column(name = "status")
    private String status;
}
