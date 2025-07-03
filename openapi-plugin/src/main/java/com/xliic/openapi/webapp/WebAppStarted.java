package com.xliic.openapi.webapp;

import com.xliic.openapi.webapp.messages.WebAppProduce;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

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
