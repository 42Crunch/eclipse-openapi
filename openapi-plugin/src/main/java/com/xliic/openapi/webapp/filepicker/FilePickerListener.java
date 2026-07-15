package com.xliic.openapi.webapp.filepicker;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicFilePickerListener;
import org.jetbrains.annotations.NotNull;

public interface FilePickerListener {

    Topic<FilePickerListener> TOPIC = new TopicFilePickerListener<>(FilePickerListener.class, Topic.BroadcastDirection.NONE);

    void loadFile(@NotNull String webAppId, @NotNull String id, @NotNull Base64EncodedFileContent content);

    void cancelFile(@NotNull String webAppId, @NotNull String id);   
}
