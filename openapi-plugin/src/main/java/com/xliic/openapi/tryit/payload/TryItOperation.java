package com.xliic.openapi.tryit.payload;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.Operation;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.tryit.TryItUtils;
import com.xliic.openapi.utils.Utils;

public class TryItOperation extends Operation {

    @Nullable
    private String preferredMediaType;
    @Nullable
    private String preferredBodyValue;
    @Nullable
    private String preferredExamplePointer;
    @Nullable
    private String preferredExampleName;

    public TryItOperation(@NotNull PsiFile psiFile, @NotNull String path, @NotNull String method, int offset) {
        super(psiFile, path, method, offset);
        preferredMediaType = null;
        preferredBodyValue = null;
        preferredExamplePointer = null;
        preferredExampleName = null;
    }

    public void updateOas(@NotNull String oas) {
        setOas(oas);
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
        setOas(TryItUtils.extractSingleOperation(path, method, bundle));
    }

    public void setPreferredMediaType(@Nullable String preferredMediaType) {
        this.preferredMediaType = preferredMediaType;
    }

    public void setPreferredExamplePointer(@Nullable String preferredExamplePointer) {
        this.preferredExamplePointer = preferredExamplePointer;
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
