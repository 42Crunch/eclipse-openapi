package com.xliic.openapi.platform;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.parser.ast.node.Node;

public class Permissions {

    private final boolean read;
    private final boolean write;
    private final boolean writeApis;
    private final boolean deleteApis;

    public Permissions(boolean read, boolean write, boolean writeApis, boolean deleteApis) {
        this.read = read;
        this.write = write;
        this.writeApis = writeApis;
        this.deleteApis = deleteApis;
    }

    public boolean isWriteApis() {
        return writeApis;
    }

    public boolean hasAll() {
        return read && write && writeApis && deleteApis;
    }

    @NotNull
    public static Permissions get(@NotNull Node node) {
        boolean read = node.getBooleanChildValue("read");
        boolean write = node.getBooleanChildValue("write");
        boolean writeApis = node.getBooleanChildValue("writeApis");
        boolean deleteApis = node.getBooleanChildValue("deleteApis");
        return new Permissions(read, write, writeApis, deleteApis);
    }
}
