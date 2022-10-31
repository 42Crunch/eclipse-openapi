package com.xliic.openapi.topic;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicFileListener;
import com.xliic.core.vfs.VirtualFile;

public interface FileListener {

    Topic<FileListener> TOPIC = new TopicFileListener<>(FileListener.class, Topic.BroadcastDirection.NONE);

    void handleAllFilesClosed();

    void handleSelectedFile(@NotNull VirtualFile file);

    void handleFileNameChanged(@NotNull VirtualFile newFile, @NotNull String oldFileName);

    void handleClosedFile(@NotNull VirtualFile file);

    default void handleDocumentChanged(@NotNull VirtualFile file) {
    }
}
