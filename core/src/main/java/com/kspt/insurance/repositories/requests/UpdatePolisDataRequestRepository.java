package com.kspt.insurance.repositories.requests;

import com.kspt.insurance.models.requests.CreatePolisRequest;
import com.kspt.insurance.models.requests.UpdatePolisDataRequest;
import com.kspt.insurance.repositories.CommonRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface UpdatePolisDataRequestRepository extends CommonRepository<UpdatePolisDataRequest> {
    List<UpdatePolisDataRequest> findByClientId(@NotNull final Long id);

    List<UpdatePolisDataRequest> findByOperatorId(@NotNull final Long id);
}
