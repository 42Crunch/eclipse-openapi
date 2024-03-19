package com.xliic.openapi;

import java.util.LinkedList;
import java.util.List;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.parser.ast.node.Node;

public abstract class DfsHandler<T> {

    @NotNull
    protected String fileName = "";
    @Nullable
    protected OpenApiVersion version = null;
    @NotNull
    protected List<T> data = new LinkedList<>();

    public void init(@NotNull String fileName, @Nullable OpenApiVersion version) {
        this.fileName = fileName;
        this.version = version;
        data = new LinkedList<>();
    }

    public abstract boolean visit(@NotNull Node node);

    public abstract void finish(boolean success);

    protected boolean isOpenAPI() {
        return version == OpenApiVersion.V2 || version == OpenApiVersion.V3;
    }
}
