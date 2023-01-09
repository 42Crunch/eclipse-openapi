package com.xliic.openapi.tryit;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicTryItListener;
import com.xliic.openapi.platform.scan.Preferences;
import com.xliic.openapi.tryit.payload.TryItError;
import com.xliic.openapi.tryit.payload.TryItOperation;
import com.xliic.openapi.tryit.payload.TryItResponse;

public interface TryItListener {

    Topic<TryItListener> TOPIC = new TopicTryItListener<>(TryItListener.class, Topic.BroadcastDirection.NONE);

    void tryOperation(@NotNull TryItOperation payload, @NotNull Preferences prefs);

    void tryLastOperation();

    void showOperationResponse(@NotNull TryItResponse payload);

    void showOperationError(@NotNull TryItError payload);
}
