package com.xliic.openapi.platform.scan;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.parser.ast.node.Node;

@SuppressWarnings("serial")
public class ScanGeneralError extends Exception {

    public static final String AUDIT_ERROR_CODE = "audit-error";
    public static final String SECURITY_AUDIT_FAILED_MSG = "OpenAPI has failed Security Audit. " +
            "Please run API Security Audit, fix the issues and try running the Scan again.";

    @Nullable
    private final String code;
    @Nullable
    private final String details;
    @Nullable
    private final Node report;

    public ScanGeneralError(@NotNull String message) {
        this(message, null, null);
    }

    public ScanGeneralError(@NotNull String message, @Nullable String code, @Nullable String details) {
        super(message);
        this.code = code;
        this.details = details;
        report = null;
    }

    public ScanGeneralError(@NotNull Node report) {
        super(SECURITY_AUDIT_FAILED_MSG);
        this.code = AUDIT_ERROR_CODE;
        this.details = null;
        this.report = report;
    }

    public @Nullable String getCode() {
        return code;
    }

    public @Nullable String getDetails() {
        return details;
    }

    public @Nullable Node getReport() {
        return report;
    }
}
