package com.xliic.openapi.tags.payload;

import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.Operation;
import org.jetbrains.annotations.NotNull;

public class TagsOperation extends Operation {

    public TagsOperation(@NotNull PsiFile psiFile, int offset) {
        super(psiFile, "", "", offset);
    }
}
