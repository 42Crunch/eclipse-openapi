package com.xliic.openapi.webapp.messages;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public abstract class WebAppProduce {

    @NotNull
    private final String name;
    private final boolean payloadAsAST;

    public WebAppProduce(@NotNull String name) {
        this(name, false);
    }

    public WebAppProduce(@NotNull String name, boolean payloadAsAST) {
        this.name = name;
        this.payloadAsAST = payloadAsAST;
    }

    @NotNull
    public String getName() {
        return name;
    }

    public boolean isPayloadAsAST() {
        return payloadAsAST;
    }

    public abstract void run(@Nullable Object payload);
}
