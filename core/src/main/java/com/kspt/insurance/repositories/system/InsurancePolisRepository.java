package com.kspt.insurance.repositories.system;

import com.kspt.insurance.models.requests.ClosePolisRequest;
import com.kspt.insurance.models.system.InsurancePolis;
import com.kspt.insurance.repositories.CommonRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InsurancePolisRepository extends CommonRepository<InsurancePolis> {
    List<InsurancePolis> findByClientId(@NotNull final Long id);
}
