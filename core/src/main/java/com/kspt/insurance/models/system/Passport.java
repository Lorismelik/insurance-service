package com.kspt.insurance.models.system;

import com.kspt.insurance.configuration.Constants;
import com.kspt.insurance.models.AbstractEntity;
import lombok.*;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Table(name = Constants.System.PASSPORT)
@EqualsAndHashCode(callSuper = true)
public final class Passport extends AbstractEntity {

    @Column(name = "series")
    private int series;

    @Column(name = "number")
    private int number;

    public Passport(final int series,
                    final int number) {
        this.series = series;
        this.number = number;
    }

}
