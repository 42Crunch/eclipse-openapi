package com.xliic.openapi.platform.scan.payload;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.Operation;

public class ScanOperation extends Operation {

    @NotNull
    private String config;

    public ScanOperation(@NotNull PsiFile psiFile, @NotNull String path, @NotNull String method, int offset) {
        super(psiFile, path, method, offset);
        this.config = "";
    }

    public void setConfig(@NotNull String config) {
        this.config = config;
    }

    public @NotNull String getConfig() {
        return config;
    }
}
