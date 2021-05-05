package com.crunch42.openapi.report;

public class Grade {

    private final int value;
    private final int max;

    public Grade(int value, int max) {
        this.value = value;
        this.max = max;
    }

    public int getValue() {
        return value;
    }

    public int getMax() {
        return max;
    }
}
