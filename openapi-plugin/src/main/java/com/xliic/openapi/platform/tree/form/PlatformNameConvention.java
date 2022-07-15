package com.xliic.openapi.platform.tree.form;

public class PlatformNameConvention {

    private final String pattern;
    private final String description;
    private final String example;

    public PlatformNameConvention(String pattern, String description, String example) {
        this.pattern = pattern;
        this.description = description;
        this.example = example;
    }

    public String getPattern() {
        return pattern;
    }

    public String getDescription() {
        return description;
    }

    public String getExample() {
        return example;
    }
}
