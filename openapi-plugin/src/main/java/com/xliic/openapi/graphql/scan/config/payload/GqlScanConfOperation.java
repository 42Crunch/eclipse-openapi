package com.xliic.openapi.graphql.scan.config.payload;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.platform.scan.config.payload.ScanConfOperation;

public class GqlScanConfOperation extends ScanConfOperation {

    public GqlScanConfOperation(@NotNull PsiFile psiFile) {
        super(psiFile, "", "", 0);
    }
}
