package com.xliic.openapi.platform.scan.config.payload;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.Operation;

public class ScanConfOperation extends Operation {

    @NotNull
    private String config;
    @NotNull
    private String scanConfPath;

    public ScanConfOperation(@NotNull PsiFile psiFile, @NotNull String path, @NotNull String method, int offset) {
        super(psiFile, path, method, offset);
        this.config = "";
        this.scanConfPath = "";
    }

    public void setConfig(@NotNull String config) {
        this.config = config;
    }

    public @NotNull String getConfig() {
        return config;
    }

    public @NotNull String getScanConfPath() {
        return scanConfPath;
    }

    public void setScanConfPath(@NotNull String scanConfPath) {
        this.scanConfPath = scanConfPath;
    }
}
