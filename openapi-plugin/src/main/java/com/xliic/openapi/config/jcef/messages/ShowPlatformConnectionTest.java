package com.xliic.openapi.config.jcef.messages;

import org.jetbrains.annotations.NotNull;

public class ShowPlatformConnectionTest extends ShowConnectionTest {

    public ShowPlatformConnectionTest(boolean success, @NotNull String message) {
        super("showPlatformConnectionTest", success, message);
    }
}
