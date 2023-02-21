package com.xliic.openapi.platform.dictionary.quickfix.managers;

import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.dictionary.types.DataFormat;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.FixType;
import com.xliic.openapi.quickfix.managers.FixManager;
import com.xliic.openapi.utils.Utils;

public class FixManagerSingleReplaceDictionary extends FixManager {

    @NotNull
    private final Node propNode;
    @Nullable
    private final Object value;

    public FixManagerSingleReplaceDictionary(@NotNull PsiFile psiFile, @NotNull DataFormat dataFormat, @NotNull Node propNode) {
        super(psiFile);
        this.propNode = propNode;
        String key = propNode.getKey();
        this.value = dataFormat.get(key, Utils.getFileType(psiFile) == OpenApiFileType.Json);
    }

    @Override
    public String getTitle() {
        return "Update " + propNode.getKey() + " with a Data Dictionary value";
    }

    @Override
    public List<FixItem> getFixItems() {
        List<FixItem> result = new LinkedList<>();
        result.add(new FixItem(propNode.getJsonPointer(), Objects.requireNonNullElse(value, FixItem.NULL), FixType.Replace));
        return result;
    }

    @Override
    public boolean isResponsibleFor(@NotNull String pointer, @NotNull String label) {
        return pointer.equals(propNode.getJsonPointer()) && isValueInLabel(label, value);
    }

    public static boolean isValueInLabel(@NotNull String label, @Nullable Object value) {
        return label.equalsIgnoreCase("Data Dictionary requires value of " + value);
    }
}
