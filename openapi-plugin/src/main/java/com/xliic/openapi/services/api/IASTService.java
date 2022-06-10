package com.xliic.openapi.services.api;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;

public interface IASTService {

    public boolean isKnownOpenAPIFile(@NotNull String fileName);

    public Node getRootNode(@NotNull VirtualFile file);

    public Node getRootNode(@NotNull String fileName);

    public Node getRootNode(@NotNull VirtualFile file, @NotNull String text);

    public Node getRootNode(@NotNull String fileName, @NotNull String text);

    public @NotNull Node getOpenAPIRootNode(@NotNull String fileName) throws Exception;

    public void resetCacheEntry(@NotNull String fileName);

    public @NotNull OpenApiVersion getOpenAPIVersion(@NotNull String fileName);
}
