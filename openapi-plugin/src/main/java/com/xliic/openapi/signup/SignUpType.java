package com.xliic.openapi.signup;

public enum SignUpType {

    REGULAR("regular"),
    CAPTURE("capture");

    private final String status;

    SignUpType(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    @Override
    public String toString() {
        return status;
    }
}
