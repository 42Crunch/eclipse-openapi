package com.xliic.openapi.webapp.messages;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public abstract class WebAppProduce {

    @NotNull
    private final String name;
    private final boolean payloadAsAST;
    private final boolean insideEDT;
    private final int rate;

    public WebAppProduce(@NotNull String name) {
        this(name, false);
    }

    public WebAppProduce(@NotNull String name, int rate) {
        this(name, false, true, rate);
    }

    public WebAppProduce(@NotNull String name, boolean payloadAsAST) {
        this(name, payloadAsAST, true, -1);
    }

    public WebAppProduce(@NotNull String name, boolean payloadAsAST, boolean insideEDT, int rate) {
        this.name = name;
        this.payloadAsAST = payloadAsAST;
        this.insideEDT = insideEDT;
        this.rate = rate;
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

    public int getRate() {
        return rate;
    }

    public abstract void run(@Nullable Object payload);
}
