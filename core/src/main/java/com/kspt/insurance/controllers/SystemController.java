package com.kspt.insurance.controllers;

import com.kspt.insurance.models.actors.Person;
import com.kspt.insurance.services.SystemService;
import org.jetbrains.annotations.NotNull;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("system")
public final class SystemController {

    private final SystemService service;

    public SystemController(@NotNull final SystemService service) {
        this.service = service;
    }

    // contract: login, password, personType, name
    @PostMapping("signUp")
    public Person signUp(@RequestBody final Map<String, Object> data) {
        return service.signUp(data);
    }

    // contract: personType, login, password
    @PostMapping("signIn")
    public Person signIn(@RequestBody final Map<String, Object> data) {
        return service.signIn(data);
    }

    // contract: id, personType
    @PostMapping("signOut")
    public boolean signOut(@RequestBody final Map<String, Object> data) {
        return service.signOut(data);
    }
}
