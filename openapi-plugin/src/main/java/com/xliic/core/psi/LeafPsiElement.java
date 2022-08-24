package com.xliic.core.psi;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.parser.ast.node.Node;

public class LeafPsiElement extends PsiElement {

    public LeafPsiElement(int offset, @NotNull Node node, @NotNull PsiFile file) {
        super(offset, node, file);
    }
}
