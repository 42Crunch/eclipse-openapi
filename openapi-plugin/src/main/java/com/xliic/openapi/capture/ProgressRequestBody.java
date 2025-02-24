package com.xliic.openapi.capture;

import okhttp3.MediaType;
import okhttp3.RequestBody;
import okio.BufferedSink;
import okio.Okio;
import okio.Source;
import org.jetbrains.annotations.NotNull;

import java.io.File;
import java.io.IOException;

public class ProgressRequestBody extends RequestBody {

    private static final int SEGMENT_SIZE = 2048;

    @NotNull
    private final File file;
    @NotNull
    private final ProgressListener listener;
    @NotNull
    private final String contentType;

    public interface ProgressListener {
        void transferred(double percent);
    }

    public ProgressRequestBody(@NotNull File file, @NotNull String contentType, @NotNull ProgressListener listener) {
        this.file = file;
        this.contentType = contentType;
        this.listener = listener;
    }

    @Override
    public long contentLength() {
        return file.length();
    }

    @Override
    public MediaType contentType() {
        return MediaType.parse(contentType);
    }

    @Override
    public void writeTo(BufferedSink sink) throws IOException {
        final long contentLength = contentLength();
        try (Source source = Okio.source(file)) {
            long read;
            long total = 0;
            while ((read = source.read(sink.getBuffer(), SEGMENT_SIZE)) != -1) {
                total += read;
                sink.flush();
                this.listener.transferred((double) total / contentLength);
            }
        }
    }
}