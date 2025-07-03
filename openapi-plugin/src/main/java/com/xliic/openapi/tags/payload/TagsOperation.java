package com.xliic.openapi.tags.payload;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.Operation;

public class TagsOperation extends Operation {

    public TagsOperation(@NotNull PsiFile psiFile, int offset) {
        super(psiFile, "", "", offset);
    }
}
