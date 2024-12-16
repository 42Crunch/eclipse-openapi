package com.xliic.openapi.report;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.utils.ExecUtils;
import com.xliic.openapi.utils.Utils;

public class AuditCliResult {

    @Nullable
    private final String report;
    @Nullable
    private final String todo;
    @Nullable
    private final String compliance;
    @NotNull
    private final String stdOut;
    @NotNull
    private final String stdErr;
    private final int statusCode;
    private final boolean hasError;

    public AuditCliResult(@Nullable String report, @Nullable String todo, @Nullable String compliance, @NotNull String stdOut) {
        this.report = report;
        this.todo = todo;
        this.compliance = compliance;
        this.stdOut = stdOut;
        this.stdErr = "";
        this.hasError = false;
        this.statusCode = 0;
    }

    public AuditCliResult(@NotNull ExecUtils.ExecException ex) {
        this.report = null;
        this.todo = null;
        this.compliance = null;
        this.stdOut = ex.getStdOut();
        this.stdErr = ex.getStdErr();
        this.hasError = true;
        this.statusCode = ex.getCode();
    }

    public AuditCliResult(@NotNull String error) {
        this.report = null;
        this.todo = null;
        this.compliance = null;
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

    public @Nullable String getTodo() {
        return todo;
    }

    public @Nullable String getCompliance() {
        return compliance;
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

    public long getRemainingPerOperationAudit() {
        Node out = Utils.getJsonAST(stdOut);
        if (out != null) {
            String value = out.getChildValue("remainingPerOperationAudit");
            if (value != null) {
                return Long.parseLong(value);
            }
        }
        return Long.MAX_VALUE;
    }
}
