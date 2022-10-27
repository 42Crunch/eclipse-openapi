package com.xliic.openapi.platform.dictionary.quickfix.managers;

import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.dictionary.types.DataFormat;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.FixType;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.quickfix.managers.FixManager;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import static com.xliic.openapi.platform.dictionary.types.DataFormat.X_42C_FORMAT_KEY;

import java.util.LinkedList;
import java.util.List;

public class FixManagerSingleInsertDictionary extends FixManager {

    @NotNull
    private final Node container;
    @NotNull
    private final String prop;
    @Nullable
    private final Object value;

    public FixManagerSingleInsertDictionary(@NotNull PsiFile psiFile,
            @NotNull DataFormat dataFormat,
            @NotNull Node container,
            @NotNull String prop) {
        super(psiFile);
        this.value = dataFormat.get(prop);
        this.container = container;
        this.prop = prop;
    }

    public FixManagerSingleInsertDictionary(@NotNull PsiFile psiFile,
            @NotNull Node container,
            @NotNull String prop,
            @NotNull String value) {
        super(psiFile);
        this.value = value;
        this.container = container;
        this.prop = prop;
    }

    @Override
    public String getTitle() {
        return "Add missing " + prop + " Data Dictionary property";
    }

    @Override
    public List<FixItem> getFixItems() {
        List<FixItem> result = new LinkedList<>();
        boolean isJson = isJson(psiFile);
        String text;
        if (value instanceof String) {
            text = QuickFix.formatFixText("{" + prop + ": \"" + value + "\"}", isJson);
        } else {
            text = QuickFix.formatFixText("{" + prop + ": " + value + "}", isJson);
        }
        result.add(new FixItem(container.getJsonPointer(), text, FixType.Insert));
        return result;
    }

    @Override
    public boolean isResponsibleFor(@NotNull String pointer, @NotNull String label) {
        return pointer.equals(container.getJsonPointer()) && isPropertyInLabel(label, prop);
    }

    public static boolean isPropertyInLabel(@NotNull String label, @NotNull String prop) {
        if (DataFormat.X_42C_FORMAT_KEY.equals(prop)) {
            return label.equalsIgnoreCase("Missing " + X_42C_FORMAT_KEY + " property required for data dictionary");
        } else {
            return label.equalsIgnoreCase("Missing " + prop + " property defined in Data Dictionary");
        }
    }
}
