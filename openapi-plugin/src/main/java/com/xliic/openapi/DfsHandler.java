package com.xliic.openapi;

import com.xliic.openapi.parser.ast.node.Node;
import org.jetbrains.annotations.NotNull;

import java.util.LinkedList;
import java.util.List;

public abstract class DfsHandler<T> {

    @NotNull
    protected String fileName = "";
    @NotNull
    protected OpenApiVersion version = OpenApiVersion.Unknown;
    @NotNull
    protected final List<T> data = new LinkedList<>();

    public void init(@NotNull String fileName, @NotNull OpenApiVersion version) {
        this.fileName = fileName;
        this.version = version;
        data.clear();
    }

    public abstract boolean visit(@NotNull Node node);

    public abstract void finish(boolean success);
}
