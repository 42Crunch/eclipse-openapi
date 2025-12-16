package com.xliic.openapi.capture.payload;

import org.jetbrains.annotations.Nullable;

public class FileUploadStatus {

    private final double percent;
    @Nullable
    private final String fileId;

    public FileUploadStatus(double percent, @Nullable String fileId) {
        this.percent = percent;
        this.fileId = fileId;
    }

    public double getPercent() {
        return percent;
    }

    public @Nullable String getFileId() {
        return fileId;
    }
}
