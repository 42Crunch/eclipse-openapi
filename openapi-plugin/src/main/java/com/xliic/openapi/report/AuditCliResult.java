package com.xliic.openapi.report;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.utils.ExecUtils;
import com.xliic.openapi.utils.Utils;

public class AuditCliResult {

    @Nullable
    private final String report;
    @NotNull
    private final String stdOut;
    @NotNull
    private final String stdErr;
    private final int statusCode;
    private final boolean hasError;

    private long remainingFullAudit = -1;
    private long remainingPerOperationAudit = -1;

    public AuditCliResult(@Nullable String report, @NotNull String stdOut) {
        this.report = report;
        this.stdOut = stdOut;
        this.stdErr = "";
        this.hasError = false;
        this.statusCode = 0;
    }

    public AuditCliResult(@NotNull ExecUtils.ExecException ex) {
        this.report = null;
        this.stdOut = ex.getStdOut();
        this.stdErr = ex.getStdErr();
        this.hasError = true;
        this.statusCode = ex.getCode();
    }

    public AuditCliResult(@NotNull String error) {
        this.report = null;
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
        if (remainingPerOperationAudit != -1) {
            return remainingPerOperationAudit;
        }
        Node out = Utils.getJsonAST(stdOut);
        if (out != null) {
            remainingPerOperationAudit = Long.parseLong(out.getChildValueRequireNonNull("remainingPerOperationAudit"));
        } else {
            remainingPerOperationAudit = Long.MAX_VALUE;
        }
        return remainingPerOperationAudit;
    }

    public long getRemainingFullAudit() {
        if (remainingFullAudit != -1) {
            return remainingFullAudit;
        }
        Node out = Utils.getJsonAST(stdOut);
        if (out != null) {
            remainingFullAudit = Long.parseLong(out.getChildValueRequireNonNull("remainingFullAudit"));
        } else {
            remainingFullAudit = Long.MAX_VALUE;
        }
        return remainingFullAudit;
    }
}
