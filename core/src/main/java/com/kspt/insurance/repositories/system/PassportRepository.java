package com.kspt.insurance.repositories.system;

import com.kspt.insurance.models.system.Passport;
import com.kspt.insurance.repositories.CommonRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Repository;

@Repository
public interface PassportRepository extends CommonRepository<Passport> {

    @Override
    void delete(@NotNull final Passport passport);
}
