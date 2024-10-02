package com.xliic.openapi.webapp.http;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.webapp.http.payload.HttpResponse;
import com.xliic.openapi.webapp.messages.WebAppConsume;

public class ShowHttpResponse extends WebAppConsume {

    @NotNull
    private final HttpResponse payload;

    public ShowHttpResponse(@NotNull HttpResponse payload) {
        super("showHttpResponse");
        this.payload = payload;
    }

    @Override
    protected @Nullable Object getPayload() {
        return payload.getProperties();
    }
}
