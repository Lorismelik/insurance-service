package com.kspt.insurance.repositories.requests;

import com.kspt.insurance.models.requests.CreatePolisRequest;
import com.kspt.insurance.repositories.CommonRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CreatePolisRequestRepository extends CommonRepository<CreatePolisRequest> {

    List<CreatePolisRequest> findByClientId(@NotNull final Long id);

    List<CreatePolisRequest> findByOperatorId(@NotNull final Long id);

    List<CreatePolisRequest> findByInsuranceAgentId(@NotNull final Long id);
}
