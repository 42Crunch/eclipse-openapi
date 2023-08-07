package com.xliic.openapi.platform.scan.payload;

import java.util.Objects;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.parser.ast.node.Node;

public class ScanReport {

    @NotNull
    private final String taskId;
    @Nullable
    private final String data;

    public static ScanReport getInstance(@NotNull Node node, boolean isNewApi) {
        String taskId, data;
        if (isNewApi) {
            Node report = node.getChild("report");
            taskId = Objects.requireNonNullElse(report, node).getChildValueRequireNonNull("taskId");
            data = node.getChildValue("file");

        } else {
            taskId = node.getChildValueRequireNonNull("taskId");
            data = node.getChildValue("data");
        }
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
}
