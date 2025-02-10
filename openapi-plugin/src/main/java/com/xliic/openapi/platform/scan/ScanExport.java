package com.xliic.openapi.platform.scan;

import org.jetbrains.annotations.NotNull;

import java.util.UUID;

public class ScanExport {

    @NotNull
    private final String tempFile = "scan-" + UUID.randomUUID() + ".json";
    private volatile boolean tempFileSaved = false;

    public @NotNull String getTempFile() {
        return tempFile;
    }

    public void setTempFileSaved(boolean tempFileSaved) {
        this.tempFileSaved = tempFileSaved;
    }

    public boolean isTempFileSaved() {
        return tempFileSaved;
    }
}
