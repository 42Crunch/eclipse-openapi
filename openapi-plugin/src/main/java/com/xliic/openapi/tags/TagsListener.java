package com.xliic.openapi.tags;

import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicTagsListener;
import com.xliic.openapi.config.payload.Config;

public interface TagsListener {

    Topic<TagsListener> TOPIC = new TopicTagsListener<>(TagsListener.class, Topic.BroadcastDirection.NONE);

    default void showTags(@NotNull Config config, @NotNull String targetFileName, @NotNull Map<String, Object> tagData) {}
}
