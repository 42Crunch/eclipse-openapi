package com.xliic.core.services;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.preview.PreviewCallback;

public interface IPreviewService {

    void sendText(String projectId, String canonicalPath, String text);

    void start(@NotNull PreviewCallback callback);
}
