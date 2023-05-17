package com.xliic.openapi.config;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicConfigListener;
import com.xliic.openapi.config.payload.Config;

public interface ConfigListener {

    Topic<ConfigListener> TOPIC = new TopicConfigListener<>(ConfigListener.class, Topic.BroadcastDirection.NONE);

    default void loadConfig(@NotNull Config config) {}

    default void showPlatformConnectionTest(boolean success, @NotNull String message) {}

    default void showOverlordConnectionTest(boolean success, @NotNull String message) {}

    default void showScandManagerConnectionTest(boolean success, @NotNull String message) {}
}
