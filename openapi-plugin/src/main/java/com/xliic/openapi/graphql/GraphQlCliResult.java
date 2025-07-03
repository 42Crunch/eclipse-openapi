package com.xliic.openapi.graphql;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.utils.ExecUtils;

public class GraphQlCliResult {

    @Nullable
    private final String report;
    @Nullable
    private final String text;
    @NotNull
    private final String stdOut;
    @NotNull
    private final String stdErr;
    private final int statusCode;
    private final boolean hasError;

    public GraphQlCliResult(@Nullable String report, @Nullable String text, @NotNull String stdOut) {
        this.report = report;
        this.text = text;
        this.stdOut = stdOut;
        this.stdErr = "";
        this.hasError = false;
        this.statusCode = 0;
    }

    public GraphQlCliResult(@NotNull ExecUtils.ExecException ex) {
        this.report = null;
        this.text = null;
        this.stdOut = ex.getStdOut();
        this.stdErr = ex.getStdErr();
        this.hasError = true;
        this.statusCode = ex.getCode();
    }

    public GraphQlCliResult(@NotNull String error) {
        this.report = null;
        this.text = null;
        this.stdOut = error;
        this.stdErr = "";
        this.hasError = true;
        this.statusCode = -1;
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        if (statusCode != -1) {
            builder.append("code ").append(statusCode).append(": ");
        }
        builder.append(stdOut);
        if (!stdErr.isEmpty()) {
            builder.append(", ").append(stdErr);
        }
        return builder.toString();
    }

    public @Nullable String getReport() {
        return report;
    }

    public @Nullable String getText() {
        return text;
    }

    public @NotNull String getStdOut() {
        return stdOut;
    }

    public boolean hasError() {
        return hasError;
    }

    public int getStatusCode() {
        return statusCode;
    }
}
