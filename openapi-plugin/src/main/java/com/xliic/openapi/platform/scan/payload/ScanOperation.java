package com.xliic.openapi.platform.scan.payload;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.psi.PsiFile;

public class ScanOperation {

    @NotNull
    private String oas;
    @NotNull
    private String rawOas;
    @NotNull
    private final String path;
    @NotNull
    private final String method;
    @NotNull
    private String config;
    private int offset;
    @NotNull
    private final PsiFile psiFile;

    public ScanOperation(@NotNull PsiFile psiFile, @NotNull String path, @NotNull String method, int offset) {
        this.psiFile = psiFile;
        this.oas = "";
        this.rawOas = "";
        this.path = path;
        this.method = method;
        this.config = "";
        this.offset = offset;
    }

    public void setOas(@NotNull String oas) {
        this.oas = oas;
    }

    public void setRawOas(@NotNull String rawOas) {
        this.rawOas = rawOas;
    }

    public @NotNull String getOas() {
        return oas;
    }

    public @NotNull String getRawOas() {
        return rawOas;
    }

    public void setConfig(@NotNull String config) {
        this.config = config;
    }

    public void setOffset(int offset) {
        this.offset = offset;
    }

    public int getOffset() {
        return offset;
    }

    @NotNull
    public PsiFile getPsiFile() {
        return psiFile;
    }

    @NotNull
    public String getPath() {
        return path;
    }

    @NotNull
    public String getMethod() {
        return method;
    }

    public @NotNull String getConfig() {
        return config;
    }
}
