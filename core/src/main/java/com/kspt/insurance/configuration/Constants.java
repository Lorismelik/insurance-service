package com.kspt.insurance.configuration;

public class Constants {

    public static final class Actor {
        public static final String OPERATOR = "operator";
        public static final String INSURANCE_AGENT = "agent";
        public static final String CLIENT = "client";
    }

    public static final class Period {
        public static final String YEAR = "year";
        public static final String HALF_YEAR = "half year";
        public static final String MONTH = "month";
    }

    public static final class Request {
        public static final String CREATE_POLIS_REQUEST = "create_polis_request";
        public static final String UPDATE_POLIS_DATA_REQUEST = "update_polis_data_request";
        public static final String INSURANCE_PAYMENTS_REQUEST = "insurance_payments_request";
        public static final String CLOSE_POLIS_REQUEST = "close_polis_request";
    }

    public static final class CreatePolisStatus {
        public static final String DECLINED = "declined";
        public static final String APPROVED = "approved";
        public static final String COMPLETED = "completed";
        public static final String CREATED = "created";
        public static final String PROCESSED = "processed";
        public static final String WAITING_FOR_APPROVE = "waiting for approve";
    }

    public static final class InsurancePaymentsStatus {
        public static final String DECLINED = "declined";
        public static final String COMPLETED = "approved";
        public static final String CREATED = "created";
        public static final String PROCESSED = "processed";
        public static final String WAITING_FOR_APPROVE = "waiting for approve";
    }

    public static final class UpdatePolisDataStatus {
        public static final String DECLINED = "declined";
        public static final String COMPLETED = "completed";
        public static final String CREATED = "created";
    }

    public static final class PolisStatus {
        public static final String OPENED = "opened";
        public static final String CLOSED = "closed";
    }

    public static class System {
        public static final String PASSPORT = "passport";
        public static final String INSURANCE_POLIS = "insurance_polis";
        public static final String CREDENTIALS = "credentials";
    }

}
