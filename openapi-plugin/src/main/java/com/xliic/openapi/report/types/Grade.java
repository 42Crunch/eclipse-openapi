package com.xliic.openapi.report.types;

public class Grade {

    public static final Grade DEF_DATA_GRADE = new Grade(0, 70);
    public static final Grade DEF_SECURITY_GRADE = new Grade(0, 30);

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
