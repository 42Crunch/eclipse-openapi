package com.xliic.openapi.capture;

import java.util.List;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicCaptureListener;
import com.xliic.openapi.capture.payload.CaptureItem;

public interface CaptureListener {

    Topic<CaptureListener> TOPIC = new TopicCaptureListener<>(CaptureListener.class, Topic.BroadcastDirection.NONE);
    
    default void setCaptureToken(@NotNull String token) {}

    default void showCaptureWindow(@NotNull List<CaptureItem> items) {}

    default void saveCapture(@NotNull CaptureItem item) {}
    
    default void showGeneralError(@NotNull String message, @Nullable String details) {}
}
