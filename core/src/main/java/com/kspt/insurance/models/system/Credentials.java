package com.kspt.insurance.models.system;

import com.kspt.insurance.configuration.Constants;
import com.kspt.insurance.models.AbstractEntity;
import lombok.*;
import org.jetbrains.annotations.NotNull;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@Table(name = Constants.System.CREDENTIALS)
@EqualsAndHashCode(callSuper = true)
public final class Credentials extends AbstractEntity {

    @Column(name = "login")
    private String login;

    @Column(name = "password")
    private String password;

    @Column(name = "type")
    private String type;

    public Credentials(@NotNull final String login,
                       @NotNull final String password) {
        this.login = login;
        this.password = password;
    }

}
