package com.kspt.insurance.repositories.actors;

import com.kspt.insurance.models.actors.Operator;
import com.kspt.insurance.models.system.Credentials;
import com.kspt.insurance.repositories.CommonRepository;
import org.jetbrains.annotations.NotNull;

import java.util.Optional;

public interface OperatorRepository extends CommonRepository<Operator> {

    Optional<Operator> findByCredentials(@NotNull final Credentials credentials);
}
