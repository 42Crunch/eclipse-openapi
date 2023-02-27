package com.xliic.openapi.environment;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicEnvListener;

public interface EnvListener {

    Topic<EnvListener> TOPIC = new TopicEnvListener<>(EnvListener.class, Topic.BroadcastDirection.NONE);

    // It fires to load env into the environment web app and show it to a user
    default void loadEnv(@NotNull Environment env) {}

    // It fires after env data has been updated through the web app
    default void updateEnv(@NotNull Environment env) {}
}
