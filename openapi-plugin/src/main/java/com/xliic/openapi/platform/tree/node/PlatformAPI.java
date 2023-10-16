package com.xliic.openapi.platform.tree.node;

import org.jetbrains.annotations.NotNull;

public class PlatformAPI {

    @NotNull
    private final String id;
    @NotNull
    private final String technicalName;
    private final boolean isJson;
    @NotNull
    private String name;
    private float grade;
    private boolean isValid;

    public PlatformAPI(@NotNull String id, @NotNull String name, float grade, boolean isValid, boolean isJson, @NotNull String technicalName) {
        this.id = id;
        this.name = name;
        this.grade = grade;
        this.isJson = isJson;
        this.isValid = isValid;
        this.technicalName = technicalName;
    }

    public @NotNull String getName() {
        return name;
    }

    public void setName(@NotNull String name) {
        this.name = name;
    }

    public @NotNull String getId() {
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

    public @NotNull String getTechnicalName() {
        return technicalName;
    }
}
