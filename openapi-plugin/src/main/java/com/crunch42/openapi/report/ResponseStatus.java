package com.crunch42.openapi.report;

public enum ResponseStatus {

    SUCCESS,
    IN_PROGRESS,
    PROCESSED,
    FILE_INVALID;

    public static ResponseStatus getStatus(String name) {

        if ("IN_PROGRESS".equals(name)) {
            return IN_PROGRESS;
        }
        else if ("PROCESSED".equals(name)) {
            return PROCESSED;
        }
        else if ("success".equals(name)) {
            return SUCCESS;
        }

        return null;
    }
}
