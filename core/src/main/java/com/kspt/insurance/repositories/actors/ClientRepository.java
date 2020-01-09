package com.kspt.insurance.repositories.actors;

import com.kspt.insurance.models.actors.Client;
import com.kspt.insurance.models.system.InsurancePolis;
import com.kspt.insurance.models.system.Credentials;
import com.kspt.insurance.models.system.Passport;
import com.kspt.insurance.repositories.CommonRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClientRepository extends CommonRepository<Client> {

    Optional<Client> findByPassport(@NotNull final Passport passport);

    Optional<Client> findByInsurancePolis(@NotNull final InsurancePolis insurancePolis);

    Optional<Client> findByCredentials(@NotNull final Credentials credentials);
}
