package com.xliic.openapi.platform.tree.node;

public class PlatformAPI {

    private final String id;
    private final boolean isJson;
    private String name;
    private float grade;
    private boolean isValid;

    public PlatformAPI(String id, String name, float grade, boolean isValid, boolean isJson) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.isJson = isJson;
        this.isValid = isValid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public float getGrade() {
        return grade;
    }

    public void setGrade(float grade) {
        this.grade = grade;
    }

    public boolean isValid() {
        return isValid;
    }

    public void setValid(boolean valid) {
        isValid = valid;
    }

    public boolean isJson() {
        return isJson;
    }
}
