package com.xliic.openapi.bigfiles;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicBigFilesListener;
import org.jetbrains.annotations.NotNull;

public interface BigFilesListener {

    Topic<BigFilesListener> TOPIC = new TopicBigFilesListener<>(BigFilesListener.class, Topic.BroadcastDirection.NONE);

    default void showBrowseFile(@NotNull String file) {}

    default void sendFileSegment(@NotNull String file, @NotNull String textSegment, float progress) {}
}
