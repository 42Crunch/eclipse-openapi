package com.xliic.openapi.signup;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicSignUpListener;

public interface SignUpListener {

    Topic<SignUpListener> TOPIC = new TopicSignUpListener<>(SignUpListener.class, Topic.BroadcastDirection.NONE);

    default void showAnondTokenResponse(boolean success, @NotNull String message) {}

    default void showPlatformConnectionTestError(@NotNull String error) {}
}
