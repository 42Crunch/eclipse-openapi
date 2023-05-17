package com.xliic.openapi.platform.scand;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.parser.ast.node.Node;

public class ScandJobStatus {

    @NotNull
    private final String name;
    @NotNull
    private final String status;

    private ScandJobStatus(@NotNull String name, @NotNull String status) {
        this.name = name;
        this.status = status; // started, active, succeeded, failed, unknown
    }

    @NotNull
    public static ScandJobStatus getInstance(@NotNull Node node) {
        String name = node.getChildValueRequireNonNull("name");
        String status = node.getChildValueRequireNonNull("status");
        return new ScandJobStatus(name, status);
    }

    public @NotNull String getName() {
        return name;
    }

    public @NotNull String getStatus() {
        return status;
    }

    public boolean isFailed() {
        return "failed".equalsIgnoreCase(status);
    }

    public boolean isUnknown() {
        return "unknown".equalsIgnoreCase(status);
    }

    public boolean isSucceeded() {
        return "succeeded".equalsIgnoreCase(status);
    }
}
