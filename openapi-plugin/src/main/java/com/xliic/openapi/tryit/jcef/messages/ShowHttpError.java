package com.xliic.openapi.tryit.jcef.messages;

import com.xliic.openapi.tryit.payload.TryItError;
import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ShowHttpError extends WebAppConsume {

    @NotNull
    private final TryItError payload;

    public ShowHttpError(@NotNull TryItError payload) {
        super("showHttpError");
        this.payload = payload;
    }

    @Override
    protected @Nullable Object getPayload() {
        return payload.getProperties();
    }
}
