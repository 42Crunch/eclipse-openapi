package com.xliic.openapi.platform.scan;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicScanListener;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.platform.scan.config.payload.ScanConfOperation;
import com.xliic.openapi.platform.scan.report.payload.ScanReport;
import com.xliic.openapi.preferences.Preferences;
import com.xliic.openapi.tryit.payload.TryItError;
import com.xliic.openapi.tryit.payload.TryItResponse;

public interface ScanListener {

    Topic<ScanListener> TOPIC = new TopicScanListener<>(ScanListener.class, Topic.BroadcastDirection.NONE);
    
    default void showScanConfOperation(@NotNull String toId,
    								   @NotNull ScanConfOperation payload,
    		                           @NotNull Environment env,
    		                           @NotNull Preferences prefs) {}

	default void showScanReport(@NotNull String toId, @NotNull ScanReport report) {}
	
	default void showOperationResponse(@NotNull String toId, @NotNull TryItResponse payload) {}
	
	default void showOperationError(@NotNull String toId, @NotNull TryItError payload) {}
	
	default void showGeneralError(@NotNull String toId, @NotNull String message, @Nullable String code, @Nullable String details) {}
	
	default void startScan(@NotNull String toId) {}
	
	default void sendLogMessage(@NotNull String toId, @NotNull String level, @NotNull String message) {}
}
