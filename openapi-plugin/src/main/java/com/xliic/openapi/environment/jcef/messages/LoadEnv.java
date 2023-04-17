package com.xliic.openapi.environment.jcef.messages;

import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class LoadEnv extends WebAppConsume {

    @NotNull
    private final Environment env;

    public LoadEnv(@NotNull Environment env) {
        super("loadEnv");
        this.env = env;
    }

    @Override
    protected @Nullable Object getPayload() {
        return env.getEnvironment();
    }
}
