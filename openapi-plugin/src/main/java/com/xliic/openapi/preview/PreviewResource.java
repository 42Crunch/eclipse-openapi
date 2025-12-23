package com.xliic.openapi.preview;

import org.jetbrains.annotations.NotNull;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

public class PreviewResource {

    @NotNull
    private final InputStream inputStream;
    @NotNull
    private final String contentType;
    private final long contentLength;

    public PreviewResource(@NotNull String content, @NotNull String contentType) {
        byte[] bytes = content.getBytes();
        this.inputStream = new ByteArrayInputStream(bytes);
        this.contentType = contentType;
        this.contentLength = bytes.length;
    }

    public @NotNull String getContentType() {
        return contentType;
    }

    public long length() {
        return contentLength;
    }

    public @NotNull InputStream newInputStream() {
        return inputStream;
    }
}
