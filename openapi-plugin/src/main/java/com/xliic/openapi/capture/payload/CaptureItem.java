package com.xliic.openapi.capture.payload;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.*;

public class CaptureItem {

    @NotNull
    private final String id;
    @NotNull
    private List<String> files;
    @Nullable
    private String quickgenId;
    @NotNull
    private PrepareOptions prepareOptions;
    @NotNull
    private Status status;
    private int pollingCounter;
    @NotNull
    private List<String> log;
    @Nullable
    private String downloadedFile;

    public CaptureItem(@NotNull List<String> files) {
        id = UUID.randomUUID().toString();
        this.files = files;
        quickgenId = null;
        prepareOptions = new PrepareOptions("/", List.of("https://server.example.com"));
        status = Status.PENDING;
        pollingCounter = 0;
        log = new LinkedList<>();
        downloadedFile = null;
    }

    public @NotNull String getId() {
        return id;
    }

    public @NotNull List<String> getFiles() {
        return files;
    }

    public @Nullable String getQuickgenId() {
        return quickgenId;
    }

    public @NotNull Status getStatus() {
        return status;
    }

    public int getPollingCounter() {
        return pollingCounter;
    }

    public @NotNull List<String> getLog() {
        return log;
    }

    public @NotNull PrepareOptions getPrepareOptions() {
        return prepareOptions;
    }

    public void setQuickgenId(@Nullable String quickgenId) {
        this.quickgenId = quickgenId;
    }

    public void setFiles(@NotNull List<String> files) {
        this.files = files;
    }

    public void setPrepareOptions(@NotNull PrepareOptions prepareOptions) {
        this.prepareOptions = prepareOptions;
    }

    public void setPollingCounter(int pollingCounter) {
        this.pollingCounter = pollingCounter;
    }

    public void setStatus(@NotNull Status status) {
        this.status = status;
    }

    public void setLog(@NotNull List<String> log) {
        this.log = log;
    }

    public void setDownloadedFile(@Nullable String downloadedFile) {
        this.downloadedFile = downloadedFile;
    }

    @SuppressWarnings("serial")
    @NotNull
    public Map<String, Object> getPayload() {
        return new HashMap<>() {{
            put("id", id);
            put("files", files);
            put("quickgenId", quickgenId);
            put("prepareOptions", prepareOptions.getPayload());
            put("status", status.toString());
            put("pollingCounter", pollingCounter);
            put("log", log);
            put("downloadedFile", downloadedFile);
        }};
    }
}
