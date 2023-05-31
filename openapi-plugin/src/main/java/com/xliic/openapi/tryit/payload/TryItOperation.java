package com.xliic.openapi.tryit.payload;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.tryit.TryItUtils;
import com.xliic.openapi.utils.Utils;

public class TryItOperation {

    @NotNull
    private String oas;
    @NotNull
    private final String path;
    @NotNull
    private final String method;
    @Nullable
    private String preferredMediaType;
    @Nullable
    private String preferredBodyValue;
    @Nullable
    private String preferredExamplePointer;
    @Nullable
    private String preferredExampleName;
    private int offset;
    @NotNull
    private PsiFile psiFile;

    public TryItOperation(@NotNull PsiFile psiFile, @NotNull String path, @NotNull String method, int offset) {
        this.psiFile = psiFile;
        this.oas = "";
        this.path = path;
        this.method = method;
        this.preferredMediaType = null;
        this.preferredBodyValue = null;
        this.preferredExamplePointer = null;
        this.offset = offset;
    }

    public void updateOas(@NotNull String oas) {
        this.oas = oas;
        if (preferredExamplePointer != null) {
            Node root = Utils.getJsonAST(oas);
            if (root != null) {
                Node target = root.find(preferredExamplePointer);
                if (target != null) {
                    Range range = target.getValueRange();
                    preferredBodyValue = oas.substring(range.getStartOffset(), range.getEndOffset());
                    preferredBodyValue = StringUtils.strip(preferredBodyValue, "\"");
                }
            }
        }
    }

    public void setOas(@NotNull BundleResult bundle) {
        updateOas(TryItUtils.extractSingleOperation(path, method, bundle));
    }

    @NotNull
    public String getOas() {
        return oas;
    }

    public void setPreferredMediaType(@Nullable String preferredMediaType) {
        this.preferredMediaType = preferredMediaType;
    }

    public void setPreferredExamplePointer(@Nullable String preferredExamplePointer) {
        this.preferredExamplePointer = preferredExamplePointer;
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

    public @Nullable String getPreferredMediaType() {
        return preferredMediaType;
    }

    public @Nullable String getPreferredBodyValue() {
        return preferredBodyValue;
    }

    public void setPreferredBodyValue(@Nullable String preferredBodyValue) {
        this.preferredBodyValue = preferredBodyValue;
    }

    public @Nullable String getPreferredExampleName() {
        return preferredExampleName;
    }

    public void setPreferredExampleName(@Nullable String preferredExampleName) {
        this.preferredExampleName = preferredExampleName;
    }
}
