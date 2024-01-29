package com.xliic.openapi.platform.scan.report.payload;

import com.xliic.openapi.parser.ast.node.Node;
import org.jetbrains.annotations.NotNull;

import java.util.Base64;
import java.util.Objects;

public class ScanReport {

    @NotNull
    private final String path;
    @NotNull
    private final String method;
    @NotNull
    private final String report;
    @NotNull
    private final String oas;

    @NotNull
    public static String getTaskId(@NotNull Node node) {
        Node report = node.getChild("report");
        return Objects.requireNonNullElse(report, node).getChildValueRequireNonNull("taskId");
    }

    @NotNull
    public static ScanReport getInstance(@NotNull String path, @NotNull String method, @NotNull String oas, @NotNull Node node) {
        String data = node.getChildValue("file");
        String report = new String(Base64.getDecoder().decode(data));
        return new ScanReport(path, method, report, oas);
    }

    public ScanReport(@NotNull String path, @NotNull String method, @NotNull String report, @NotNull String oas) {
        this.path = path;
        this.method = method;
        this.report = report;
        this.oas = oas;
    }

    public @NotNull String getPath() {
        return path;
    }

    public @NotNull String getMethod() {
        return method;
    }

    public @NotNull String getReport() {
        return report;
    }

    public @NotNull String getOas() {
        return oas;
    }
}
