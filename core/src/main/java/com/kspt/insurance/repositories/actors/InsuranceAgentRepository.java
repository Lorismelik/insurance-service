package com.kspt.insurance.repositories.actors;

import com.kspt.insurance.models.actors.InsuranceAgent;
import com.kspt.insurance.models.system.Credentials;
import com.kspt.insurance.repositories.CommonRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InsuranceAgentRepository extends CommonRepository<InsuranceAgent> {

    Optional<InsuranceAgent> findByCredentials(@NotNull final Credentials credentials);

}
