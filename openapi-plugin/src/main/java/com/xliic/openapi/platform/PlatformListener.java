package com.xliic.openapi.platform;

import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicPlatformListener;
import com.xliic.openapi.platform.dictionary.types.DataDictionary;

public interface PlatformListener {

    Topic<PlatformListener> TOPIC = new TopicPlatformListener<>(PlatformListener.class, Topic.BroadcastDirection.NONE);

    default void reloadAll() {}

    default void reloadDictionary(@NotNull List<DataDictionary> dictionaries) {}

    default void auditReportForAPIUpdated(@NotNull String apiId, float grade, boolean isValid) {}
}
