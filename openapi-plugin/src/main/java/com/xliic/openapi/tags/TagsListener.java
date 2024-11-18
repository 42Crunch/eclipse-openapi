package com.xliic.openapi.tags;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicTagsListener;
import com.xliic.openapi.config.payload.Config;
import org.jetbrains.annotations.NotNull;

import java.util.Map;

public interface TagsListener {

    Topic<TagsListener> TOPIC = new TopicTagsListener<>(TagsListener.class, Topic.BroadcastDirection.NONE);

    default void showTags(@NotNull Config config, @NotNull String targetFileName, @NotNull Map<String, Object> tagData) {}
}
