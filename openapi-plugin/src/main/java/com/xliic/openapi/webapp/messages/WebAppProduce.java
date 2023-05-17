package com.xliic.openapi.webapp.messages;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public abstract class WebAppProduce {

    @NotNull
    private final String name;
    private final boolean payloadAsAST;
    private final boolean insideEDT;

    public WebAppProduce(@NotNull String name) {
        this(name, false);
    }

    public WebAppProduce(@NotNull String name, boolean payloadAsAST) {
        this(name, payloadAsAST, true);
    }

    public WebAppProduce(@NotNull String name, boolean payloadAsAST, boolean insideEDT) {
        this.name = name;
        this.payloadAsAST = payloadAsAST;
        this.insideEDT = insideEDT;
    }

    @NotNull
    public String getName() {
        return name;
    }

    public boolean isPayloadAsAST() {
        return payloadAsAST;
    }

    public boolean isInsideEDT() {
        return insideEDT;
    }

    public abstract void run(@Nullable Object payload);
}
