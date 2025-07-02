package com.xliic.openapi.webapp.chunks;

import com.xliic.core.util.messages.Topic;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import com.xliic.core.util.messages.TopicChunksListener;

public interface ChunksListener {

    Topic<ChunksListener> TOPIC = new TopicChunksListener<>(ChunksListener.class, Topic.BroadcastDirection.NONE);

    void parseChunk(@NotNull String webAppId, @Nullable String chunk);
}
