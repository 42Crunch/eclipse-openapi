package com.xliic.openapi.topic;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicWindowListener;

public interface WindowListener {

    Topic<WindowListener> TOPIC = new TopicWindowListener<>(WindowListener.class, Topic.BroadcastDirection.NONE);

    default void handleToolWindowOpened(@NotNull String id) {
    }

    void handleToolWindowRegistered(@NotNull String id);
}
