package com.xliic.openapi.topic;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicFileListener;
import com.xliic.core.vfs.VirtualFile;

public interface FileListener {

    Topic<FileListener> TOPIC = new TopicFileListener<>(FileListener.class, Topic.BroadcastDirection.NONE);

    default void handleAllFilesClosed() {}

    default void handleSelectedFile(@NotNull VirtualFile file) {}

    default void handleFileNameChanged(@NotNull VirtualFile newFile, @NotNull String oldFileName) {}

    default void handleClosedFile(@NotNull VirtualFile file) {}

    default void handleDocumentChanged(@NotNull VirtualFile file) {}

    default void handleDocumentBundled(@NotNull String fileName) {}
}
