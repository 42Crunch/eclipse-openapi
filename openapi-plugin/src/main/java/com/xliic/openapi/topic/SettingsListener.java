package com.xliic.openapi.topic;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicSettingsListener;

public interface SettingsListener {

    Topic<SettingsListener> TOPIC = new TopicSettingsListener<>(SettingsListener.class, Topic.BroadcastDirection.NONE);

    void propertiesUpdated(@NotNull String key);
}
