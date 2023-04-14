package com.xliic.openapi.tryit.jcef.messages;

import com.xliic.openapi.tryit.payload.TryItResponse;
import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

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
