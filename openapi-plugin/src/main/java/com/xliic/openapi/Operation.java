package com.xliic.openapi;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.psi.PsiFile;

public class Operation {

    @NotNull
    private String oas;
    @NotNull
    protected final String path;
    @NotNull
    protected final String method;

    private int offset;
    @NotNull
    private PsiFile psiFile;

    public Operation(@NotNull PsiFile psiFile, @NotNull String path, @NotNull String method, int offset) {
        this.psiFile = psiFile;
        this.oas = "";
        this.path = path;
        this.method = method;
        this.offset = offset;
    }

    public void setOas(@NotNull String oas) {
        this.oas = oas;
    }

    @NotNull
    public String getOas() {
        return oas;
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

    public void setPsiFile(@NotNull PsiFile psiFile) {
        this.psiFile = psiFile;
    }

    @NotNull
    public String getPath() {
        return path;
    }

    @NotNull
    public String getMethod() {
        return method;
    }
}
