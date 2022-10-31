package com.xliic.core.util;

public class ActionCallback {

    private String error;

    public void setDone() {
    };

    protected void setRejected() {
    };

    public void reject(String error) {
        this.error = error;
        setRejected();
    }

    public String getError() {
        return error;
    }
}
