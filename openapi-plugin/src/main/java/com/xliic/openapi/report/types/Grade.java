package com.xliic.openapi.report.types;

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
