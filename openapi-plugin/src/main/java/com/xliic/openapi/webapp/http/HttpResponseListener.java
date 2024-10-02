package com.xliic.openapi.webapp.http;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicHttpResponseListener;
import com.xliic.openapi.webapp.http.payload.HttpError;
import com.xliic.openapi.webapp.http.payload.HttpResponse;

public interface HttpResponseListener {

    Topic<HttpResponseListener> TOPIC = new TopicHttpResponseListener<>(HttpResponseListener.class, Topic.BroadcastDirection.NONE);

    void showHttpResponse(@NotNull String webAppId, @NotNull HttpResponse payload);

    void showHttpError(@NotNull String webAppId, @NotNull HttpError payload);
}
