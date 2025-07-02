package com.xliic.openapi.platform.scan;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicScanListener;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.platform.scan.config.payload.ScanConfOperation;
import com.xliic.openapi.platform.scan.config.payload.ScanConfWithOas;
import com.xliic.openapi.preferences.Preferences;

public interface ScanListener {

    Topic<ScanListener> TOPIC = new TopicScanListener<>(ScanListener.class, Topic.BroadcastDirection.NONE);
    
    default void showScanConfOperation(@NotNull String webAppId,
    								   @NotNull ScanConfOperation payload,
    		                           @NotNull Environment env,
    		                           @NotNull Preferences prefs) {}

    default void loadUpdatedScanConf(@NotNull String webAppId, @NotNull ScanConfWithOas payload) {}

	default void showScanReport(@NotNull String webAppId, @NotNull String apiAlias) {}
	
	default void showGeneralError(@NotNull String webAppId, @NotNull String message, @Nullable String code, @Nullable String details) {}
	
	default void startScan(@NotNull String webAppId) {}
	
	default void sendLogMessage(@NotNull String webAppId, @NotNull String level, @NotNull String message) {}
}
