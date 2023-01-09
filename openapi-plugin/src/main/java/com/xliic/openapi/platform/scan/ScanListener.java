package com.xliic.openapi.platform.scan;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicScanListener;
import com.xliic.openapi.platform.scan.payload.ScanOperation;
import com.xliic.openapi.platform.scan.payload.ScanReport;
import com.xliic.openapi.tryit.payload.TryItError;
import com.xliic.openapi.tryit.payload.TryItResponse;

public interface ScanListener {

    Topic<ScanListener> TOPIC = new TopicScanListener<>(ScanListener.class, Topic.BroadcastDirection.NONE);

    void scanOperation(@NotNull ScanOperation payload, @NotNull Environment env, @NotNull Preferences prefs);

    void showScanReport(@NotNull ScanReport report);

    void scanLastOperation();

    void showOperationResponse(@NotNull TryItResponse payload);

    void showOperationError(@NotNull TryItError payload);
}
