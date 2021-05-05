package com.crunch42.openapi;

public class FileProperty {

    private final OpenApiFileType type;
    private final OpenApiVersion version;

    public FileProperty(OpenApiFileType type, OpenApiVersion version) {
        this.type = type;
        this.version = version;
    }

    public OpenApiFileType getType() {
        return type;
    }

    public OpenApiVersion getVersion() {
        return version;
    }
}
