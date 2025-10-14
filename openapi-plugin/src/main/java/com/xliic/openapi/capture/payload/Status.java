package com.xliic.openapi.capture.payload;

public enum Status {

    PENDING("pending"),
    RUNNING("running"),
    FINISHED("finished"),
    FAILED("failed");

    private final String status;

    Status(String status) {
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

