package com.xliic.openapi.webapp;

import com.xliic.openapi.parser.ast.node.Node;
import org.jetbrains.annotations.NotNull;

import java.util.Objects;

public class WebAppColor {

    @NotNull
    private final String id;
    @NotNull
    private final String value;

    public WebAppColor(@NotNull Node color) {
        id = Objects.requireNonNull(color.getChildValue("id"));
        value = Objects.requireNonNull(color.getChildValue("value"));
    }

    public @NotNull String getId() {
        return id;
    }

    public @NotNull String getValue() {
        return value;
    }
}
