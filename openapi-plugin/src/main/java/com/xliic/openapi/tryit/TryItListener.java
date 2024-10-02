package com.xliic.openapi.tryit;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicTryItListener;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.preferences.Preferences;
import com.xliic.openapi.tryit.payload.TryItOperation;

public interface TryItListener {

    Topic<TryItListener> TOPIC = new TopicTryItListener<>(TryItListener.class, Topic.BroadcastDirection.NONE);

    default void tryOperation(@NotNull TryItOperation payload, @NotNull Preferences prefs, @NotNull Environment env) {}
}
