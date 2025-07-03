package com.xliic.openapi.webapp;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.webapp.messages.WebAppProduce;

public abstract class WebAppStarted extends WebAppProduce {

    public WebAppStarted() {
        super("started");
    }

    @Override
    public void run(@Nullable Object payload) {
        if (payload instanceof String) {
            onStarted((String) payload);
        }
    }

    public abstract void onStarted(@NotNull String uuid);
}
