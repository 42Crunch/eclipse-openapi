package com.xliic.openapi.webapp.messages;

import java.util.Map;

import org.jetbrains.annotations.NotNull;

public class WebAppProduceData {

    @NotNull
    private final String message;
    @NotNull
    private final Map<String, String> props;

    public WebAppProduceData(@NotNull String message, @NotNull Map<String, String> props) {
        this.message = message;
        this.props = props;
    }

    public @NotNull String getMessage() {
        return message;
    }

    public @NotNull Map<String, String> getProps() {
        return props;
    }
}
