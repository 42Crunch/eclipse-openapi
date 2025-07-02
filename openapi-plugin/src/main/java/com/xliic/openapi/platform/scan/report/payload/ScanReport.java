package com.xliic.openapi.platform.scan.report.payload;

import java.nio.file.Path;
import java.util.Base64;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.parser.ast.node.Node;

public class ScanReport {

    @Nullable
    private final String report;
    @Nullable
    private final Path filePath;

    @NotNull
    public static String getTaskId(@NotNull Node node) {
        Node report = node.getChild("report");
        return Objects.requireNonNullElse(report, node).getChildValueRequireNonNull("taskId");
    }

    @NotNull
    public static ScanReport getInstance(@NotNull Node node) {
        String data = node.getChildValue("file");
        String report = new String(Base64.getDecoder().decode(data));
        return new ScanReport(report);
    }

    public ScanReport(@NotNull String report) {
        this.report = report;
        filePath = null;
    }

    public ScanReport(@NotNull Path filePath) {
        report = null;
        this.filePath = filePath;
    }

    public @Nullable String getReport() {
        return report;
    }

    public @Nullable Path getFilePath() {
        return filePath;
    }
}
