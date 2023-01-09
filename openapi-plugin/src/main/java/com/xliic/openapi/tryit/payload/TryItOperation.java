package com.xliic.openapi.tryit.payload;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.Payload;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.tryit.TryItUtils;
import com.xliic.openapi.utils.Utils;

public class TryItOperation implements Payload {

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
    @NotNull
    private final TryItConfig config;
    private int offset;
    @NotNull
    private final PsiFile psiFile;

    public TryItOperation(@NotNull PsiFile psiFile, @NotNull String path, @NotNull String method, int offset) {
        this.psiFile = psiFile;
        this.oas = "";
        this.path = path;
        this.method = method;
        this.preferredMediaType = null;
        this.preferredBodyValue = null;
        this.preferredExamplePointer = null;
        this.config = new TryItConfig();
        this.offset = offset;
    }

    public void setOas(@NotNull BundleResult bundle) {
        oas = TryItUtils.extractSingleOperation(path, method, bundle);
        if (preferredExamplePointer != null) {
            Node root = Utils.getJsonAST(oas);
            if (root != null) {
                Node target = root.find(preferredExamplePointer);
                if (target != null) {
                    Range range = target.getValueRange();
                    preferredBodyValue = oas.substring(range.getStartOffset(), range.getEndOffset());
                }
            }
        }
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

    @NotNull
    public String getPath() {
        return path;
    }

    @NotNull
    public String getMethod() {
        return method;
    }

    @Override
    @NotNull
    public Map<String, Object> getProperties() {
        Map<String, Object> result = new HashMap<>();
        result.put("oas", Utils.wrapJsonToString(oas));
        result.put("path", path);
        result.put("method", method);
        if (preferredMediaType != null) {
            result.put("preferredMediaType", preferredMediaType);
        }
        if (preferredBodyValue != null) {
            result.put("preferredBodyValue", Utils.wrapJsonToString(preferredBodyValue));
        }
        result.put("config", config.getProperties());
        return result;
    }
}
