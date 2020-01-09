package com.kspt.insurance.services;

import com.kspt.insurance.configuration.Constants;
import com.kspt.insurance.models.actors.Operator;
import com.kspt.insurance.models.actors.InsuranceAgent;
import com.kspt.insurance.models.actors.Client;
import com.kspt.insurance.models.actors.Person;
import com.kspt.insurance.models.system.Credentials;
import com.kspt.insurance.repositories.actors.InsuranceAgentRepository;
import com.kspt.insurance.repositories.actors.ClientRepository;
import com.kspt.insurance.repositories.actors.OperatorRepository;
import com.kspt.insurance.repositories.system.CredentialsRepository;
import org.jetbrains.annotations.NotNull;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class SystemService {

    private final OperatorRepository operatorRepository;
    private final ClientRepository clientRepository;
    private final InsuranceAgentRepository insuranceAgentRepository;
    private final CredentialsRepository credentialsRepository;

    public SystemService(@NotNull final OperatorRepository operatorRepository,
                         @NotNull final ClientRepository clientRepository,
                         @NotNull final InsuranceAgentRepository insuranceAgentRepository,
                         @NotNull final CredentialsRepository credentialsRepository) {
        this.operatorRepository = operatorRepository;
        this.clientRepository = clientRepository;
        this.insuranceAgentRepository = insuranceAgentRepository;
        this.credentialsRepository = credentialsRepository;
    }

    public Person signUp(@NotNull final Map<String, Object> data) {
        final String login = data.get("login").toString();
        final String password = data.get("password").toString();
        final Credentials credentials = new Credentials(login, password);

        final String personType = data.get("personType").toString();
        credentials.setType(personType);
        final String name = data.get("name").toString();

        switch (personType) {
            case Constants.Actor.CLIENT: {
                Client client = new Client(name, personType);
                client.setCredentials(credentials);
                return clientRepository.save(client);
            }
            case Constants.Actor.INSURANCE_AGENT: {
                InsuranceAgent insuranceAgent = new InsuranceAgent(name, personType);
                insuranceAgent.setCredentials(credentials);
                return insuranceAgentRepository.save(insuranceAgent);
                            }
            case Constants.Actor.OPERATOR: {
                Operator operator = new Operator(name, personType);
                operator.setBank(1000);
                operator.setCredentials(credentials);
                return operatorRepository.save(operator);
            }
            default:
                return null;
        }
    }

    public Person signIn(@NotNull final Map<String, Object> data) {
        final String login = data.get("login").toString();
        final String password = data.get("password").toString();
        final Credentials credentialsWithoutId = new Credentials(login, password);
        final Credentials credentials = credentialsRepository.findByLoginAndPassword(
                credentialsWithoutId.getLogin(),
                credentialsWithoutId.getPassword()).orElse(null);
        if (credentials != null) {
            final String personType = credentials.getType();
            try {
                switch (personType) {
                    case Constants.Actor.CLIENT: {
                        Client client = clientRepository.findByCredentials(credentials).orElse(null);
                        if (client != null) {
                            client.setIsAuthenticated(true);
                            return clientRepository.save(client);
                        }
                        break;
                    }
                    case Constants.Actor.INSURANCE_AGENT: {
                        InsuranceAgent insuranceAgent = insuranceAgentRepository.findByCredentials(credentials).orElse(null);
                        if (insuranceAgent != null) {
                            insuranceAgent.setIsAuthenticated(true);
                            return insuranceAgentRepository.save(insuranceAgent);
                        }
                        break;
                    }
                    case Constants.Actor.OPERATOR: {
                        Operator operator = operatorRepository.findByCredentials(credentials).orElse(null);
                        if (operator != null) {
                            operator.setIsAuthenticated(true);
                            return operatorRepository.save(operator);
                        }
                        break;
                    }
                }
            } catch (Exception ignored) {
            }
        }
        return null;
    }

    public boolean signOut(@NotNull final Map<String, Object> data) {
        final Long id = Long.parseLong(data.get("id").toString());
        final String personType = data.get("personType").toString();
        switch (personType) {
            case Constants.Actor.CLIENT: {
                Client client = clientRepository.findById(id).orElse(null);
                if (client != null) {
                    client.setIsAuthenticated(false);
                    clientRepository.save(client);
                    return true;
                }
                break;
            }
            case Constants.Actor.INSURANCE_AGENT: {
                InsuranceAgent insuranceAgent = insuranceAgentRepository.findById(id).orElse(null);
                if (insuranceAgent != null) {
                    insuranceAgent.setIsAuthenticated(false);
                    insuranceAgentRepository.save(insuranceAgent);
                    return true;
                }
                break;
            }
            case Constants.Actor.OPERATOR: {
                Operator operator = operatorRepository.findById(id).orElse(null);
                if (operator != null) {
                    operator.setIsAuthenticated(false);
                    operatorRepository.save(operator);
                    return true;
                }
                break;
            }
        }
        return false;
    }
}
