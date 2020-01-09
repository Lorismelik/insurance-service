package com.kspt.insurance.models.actors;

import com.kspt.insurance.models.AbstractEntity;
import com.kspt.insurance.models.system.Credentials;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
@EqualsAndHashCode(callSuper = true)
public class Person extends AbstractEntity {

    @Column(name = "name", nullable = false)
    protected String name;

    @Column(name = "personType", nullable = false)
    protected String personType;

    @Column(name = "authenticated")
    protected Boolean isAuthenticated = false;

    @JoinColumn(name = "credentialsId")
    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    protected Credentials credentials;

}
