package com.xliic.openapi.report.payload;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.Operation;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.tryit.TryItUtils;

public class AuditOperation extends Operation {

    public AuditOperation(@NotNull PsiFile psiFile, @NotNull String path, @NotNull String method, int offset) {
        super(psiFile, path, method, offset);
    }

    public void setOas(@NotNull BundleResult bundle) {
        setOas(TryItUtils.extractSingleOperation(path, method, bundle));
    }
}
