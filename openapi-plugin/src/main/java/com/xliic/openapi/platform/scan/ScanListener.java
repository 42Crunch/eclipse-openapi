package com.xliic.openapi.platform.scan;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicScanListener;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.platform.scan.payload.ScanOperation;
import com.xliic.openapi.platform.scan.payload.ScanReport;
import com.xliic.openapi.preferences.Preferences;
import com.xliic.openapi.tryit.payload.TryItError;
import com.xliic.openapi.tryit.payload.TryItResponse;

public interface ScanListener {

    Topic<ScanListener> TOPIC = new TopicScanListener<>(ScanListener.class, Topic.BroadcastDirection.NONE);

    default void scanOperation(@NotNull ScanOperation payload, @NotNull Environment env, @NotNull Preferences prefs) {}

    default void showScanReport(@NotNull ScanReport report) {}

    default void showOperationResponse(@NotNull TryItResponse payload) {}

    default void showOperationError(@NotNull TryItError payload) {}

    default void showGeneralError(@NotNull String message, @Nullable String code, @Nullable String details) {}

    default void startScan(@NotNull VirtualFile file) {}

    default void sendLogMessage(@NotNull String level, @NotNull String message) {}
}
