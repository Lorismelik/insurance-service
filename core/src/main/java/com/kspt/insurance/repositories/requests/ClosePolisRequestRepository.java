package com.kspt.insurance.repositories.requests;

import com.kspt.insurance.models.requests.ClosePolisRequest;
import com.kspt.insurance.repositories.CommonRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ClosePolisRequestRepository extends CommonRepository<ClosePolisRequest> {
    List<ClosePolisRequest> findByClientId(@NotNull final Long id);
}
