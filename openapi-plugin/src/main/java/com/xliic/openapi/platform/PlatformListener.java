package com.xliic.openapi.platform;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicPlatformListener;

public interface PlatformListener {

    Topic<PlatformListener> TOPIC = new TopicPlatformListener<>(PlatformListener.class, Topic.BroadcastDirection.NONE);

    void reloadAll();

    void reloadDictionary();

    void auditReportForAPIUpdated(@NotNull String apiId, float grade, boolean isValid);

    default void collectionsLoaded() {
    }
}
