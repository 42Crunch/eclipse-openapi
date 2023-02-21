package com.xliic.openapi.platform.dictionary.quickfix.managers;

import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;
import org.yaml.snakeyaml.DumperOptions;

import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.parser.ast.NodeUtils;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.dictionary.quickfix.DictionaryUpdate;
import com.xliic.openapi.platform.dictionary.types.DataFormat;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.FixType;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.quickfix.managers.FixManager;

public class FixManagerUpdateAllDictionary extends FixManager {

    private final DictionaryUpdate update;

    public FixManagerUpdateAllDictionary(@NotNull PsiFile psiFile, @NotNull DictionaryUpdate update) {
        super(psiFile);
        this.update = update;
    }

    @Override
    public String getTitle() {
        return "Update " + update.getContainer().getKey() + " with all Data Dictionary properties";
    }

    @Override
    public List<FixItem> getFixItems() {
        return getItems(update, isJson);
    }

    @Override
    public boolean isAvailable() {
        return (update.getPropsToAdd().size() + update.getNodesToUpdate().size()) > 1;
    }

    public static List<FixItem> getItems(@NotNull DictionaryUpdate update, boolean isJson) {
        Node container = update.getContainer();
        DataFormat dataFormat = update.getDataFormat();
        List<Node> nodesToUpdate = update.getNodesToUpdate();
        List<String> propsToAdd = update.getPropsToAdd();
        List<FixItem> result = new LinkedList<>();
        if (!propsToAdd.isEmpty()) {
            StringBuilder builder = new StringBuilder();
            int index = 0;
            for (String prop : propsToAdd) {
                // Set true even if file is yaml because we assemble json below
                Object value = dataFormat.get(prop, true);
                if (value instanceof String) {
                    builder.append(prop).append(": ").append("\"").append(value).append("\"");
                } else {
                    builder.append(prop).append(": ").append(value);
                }
                if (index < propsToAdd.size() - 1) {
                    builder.append(',');
                }
                index += 1;
            }
            String text = "{" + builder + "}";
            if (isJson) {
                text = QuickFix.formatFixText(text, true);
            } else {
                DumperOptions.ScalarStyle style = NodeUtils.getSuitableScalarStyle(container);
                text = QuickFix.formatFixText(text, false, style);
            }
            result.add(new FixItem(container.getJsonPointer(), text, FixType.Insert));
        }
        for (Node propNode : nodesToUpdate) {
            Object value = dataFormat.get(propNode.getKey(), isJson);
            result.add(new FixItem(propNode.getJsonPointer(), Objects.requireNonNullElse(value, FixItem.NULL), FixType.Replace));
        }
        return result;
    }

    @Override
    public boolean isResponsibleFor(@NotNull String pointer, @NotNull String label) {
        Node container = update.getContainer();
        if (pointer.equals(container.getJsonPointer())) {
            for (String prop : update.getPropsToAdd()) {
                if (FixManagerSingleInsertDictionary.isPropertyInLabel(label, prop)) {
                    return true;
                }
            }
        }
        DataFormat dataFormat = update.getDataFormat();
        for (Node propNode : update.getNodesToUpdate()) {
            Object value = dataFormat.get(propNode.getKey(), isJson);
            if (pointer.equals(propNode.getJsonPointer()) && FixManagerSingleReplaceDictionary.isValueInLabel(label, value)) {
                return true;
            }
        }
        return false;
    }
}
