package com.xliic.core.patterns;

import com.xliic.core.psi.LeafPsiElement;
import com.xliic.core.psi.PsiElement;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.utils.Utils;

public class YamlElementPattern<T> implements ElementPattern<T> {

    @Override
    public boolean accepts(Object element) {
        if (element instanceof LeafPsiElement) {
            PsiElement pe = (LeafPsiElement) element;
            if (OpenApiFileType.Yaml.equals(Utils.getFileType(pe.getFile().getVirtualFile()))) {
                Node node = pe.getNode();
                return "$ref".equals(node.getKey()) && node.isScalar();
            }
        }
        return false;
    }
}
