package com.kspt.insurance.repositories.requests;

import com.kspt.insurance.models.requests.CreatePolisRequest;
import com.kspt.insurance.models.requests.InsurancePaymentsRequest;
import com.kspt.insurance.repositories.CommonRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InsurancePaymentsRequestRepository extends CommonRepository<InsurancePaymentsRequest> {

    List<InsurancePaymentsRequest> findByClientId(@NotNull final Long id);

    List<InsurancePaymentsRequest> findByOperatorId(@NotNull final Long id);

    List<InsurancePaymentsRequest> findByInsuranceAgentId(@NotNull final Long id);
}