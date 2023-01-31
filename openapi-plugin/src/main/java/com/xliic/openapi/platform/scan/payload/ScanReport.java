package com.xliic.openapi.platform.scan.payload;

import java.util.Base64;
import java.util.Collections;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.utils.Utils;

public class ScanReport {

    @NotNull
    private final String taskId;
    @Nullable
    private final String data;

    public static ScanReport getInstance(@NotNull Node node) {
        String taskId = Objects.requireNonNull(node.getChildValue("taskId"));
        String data = node.getChildValue("data");
        return new ScanReport(taskId, data);
    }

    private ScanReport(@NotNull String taskId, @Nullable String data) {
        this.taskId = taskId;
        this.data = data;
    }

    public @NotNull String getTaskId() {
        return taskId;
    }

    public @Nullable String getData() {
        return data;
    }

    public Object getPayload() {
        return Utils.deserialize(new String(Base64.getDecoder().decode(data)), Collections.EMPTY_MAP);
    }
}
