package com.xliic.openapi.platform.scan.jcef.messages;

import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ShowGeneralError extends WebAppConsume {

    @NotNull
    private final String message;

    public ShowGeneralError(@NotNull String message) {
        super("showGeneralError");
        this.message = message;
    }

    @Override
    protected @Nullable Object getPayload() {
        return message;
    }
}
