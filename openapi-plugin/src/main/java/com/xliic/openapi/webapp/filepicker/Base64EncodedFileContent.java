package com.xliic.openapi.webapp.filepicker;

import org.jetbrains.annotations.NotNull;

import java.util.Base64;

public class Base64EncodedFileContent {

    @NotNull
    private final String filename;
    @NotNull
    private final String content;

    public Base64EncodedFileContent(@NotNull String filename, @NotNull String content) {
        this.filename = filename;
        this.content = Base64.getEncoder().encodeToString(content.getBytes());
    }

    public Base64EncodedFileContent(@NotNull String filename, byte[] bytes) {
        this.filename = filename;
        this.content = Base64.getEncoder().encodeToString(bytes);
    }

    @NotNull
    public String getFileName() {
        return filename;
    }

    @NotNull
    public String getContent() {
        return content;
    }
}
