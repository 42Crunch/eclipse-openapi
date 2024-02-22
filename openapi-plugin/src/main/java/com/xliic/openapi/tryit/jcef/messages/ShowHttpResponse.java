package com.xliic.openapi.tryit.jcef.messages;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.tryit.payload.TryItResponse;
import com.xliic.openapi.webapp.messages.WebAppConsume;

public class ShowHttpResponse extends WebAppConsume {

    @NotNull
    private final TryItResponse payload;

    public ShowHttpResponse(@NotNull TryItResponse payload) {
        super("showHttpResponse");
        this.payload = payload;
    }

    @Override
    protected @Nullable Object getPayload() {
        return payload.getProperties();
    }
}
