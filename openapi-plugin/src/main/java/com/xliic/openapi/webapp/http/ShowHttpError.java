package com.xliic.openapi.webapp.http;

import com.xliic.openapi.webapp.http.payload.HttpError;
import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ShowHttpError extends WebAppConsume {

    @NotNull
    private final HttpError payload;

    public ShowHttpError(@NotNull HttpError payload) {
        super("showHttpError");
        this.payload = payload;
    }

    @Override
    protected @Nullable Object getPayload() {
        return payload.getProperties();
    }
}
