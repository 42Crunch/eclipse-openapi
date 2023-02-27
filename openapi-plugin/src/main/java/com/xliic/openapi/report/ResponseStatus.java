package com.xliic.openapi.report;

public enum ResponseStatus {

    SUCCESS, IN_PROGRESS, PROCESSED;

    public static ResponseStatus getStatus(String name) {
        if ("IN_PROGRESS".equalsIgnoreCase(name)) {
            return IN_PROGRESS;
        } else if ("PROCESSED".equalsIgnoreCase(name)) {
            return PROCESSED;
        } else if ("success".equalsIgnoreCase(name)) {
            return SUCCESS;
        }
        return null;
    }
}
