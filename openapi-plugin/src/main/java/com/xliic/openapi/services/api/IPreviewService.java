package com.xliic.openapi.services.api;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.preview.PreviewCallback;

public interface IPreviewService {

    boolean isInitComplete();

    void sendText(String projectId, String canonicalPath, String text);

    void start(@NotNull PreviewCallback callback);
}
