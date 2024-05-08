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
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Operation operation = (Operation) o;
        if (offset != operation.offset) return false;
        if (!path.equals(operation.path)) return false;
        if (!method.equals(operation.method)) return false;
        return psiFile.equals(operation.psiFile);
    }

    @Override
    public int hashCode() {
        int result = path.hashCode();
        result = 31 * result + method.hashCode();
        result = 31 * result + offset;
        result = 31 * result + psiFile.hashCode();
        return result;
    }

    public boolean isFull() {
        return path.isEmpty() && method.isEmpty();
    }
}
