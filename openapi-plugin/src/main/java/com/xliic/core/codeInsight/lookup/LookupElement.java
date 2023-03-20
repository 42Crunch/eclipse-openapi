package com.xliic.core.codeInsight.lookup;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeInsight.completion.InsertHandler;
import com.xliic.core.util.Icon;
import com.xliic.openapi.OpenApiFileType;

public abstract class LookupElement {

    public static enum FileType {
        JSON, YAML
    }

    @NotNull
    protected final String element;
    protected String presentableText;
    protected String typeText;
    protected String prefix;
    protected Icon icon;
    protected InsertHandler<LookupElement> insertHandler;
    protected int offset;
    protected FileType fileType;

    public LookupElement(@NotNull String element) {
        this.element = element;
        presentableText = null;
        typeText = null;
        prefix = null;
        icon = null;
        insertHandler = null;
        offset = -1;
        fileType = null;
    }

    @NotNull
    public String getElement() {
        return element;
    }

    public String getPresentableText() {
        return presentableText;
    }

    public String getTypeText() {
        return typeText;
    }

    public String getPrefix() {
        return prefix;
    }

    public Icon getIcon() {
        return icon;
    }

    public InsertHandler<LookupElement> getInsertHandler() {
        return insertHandler;
    }

    public int getOffset() {
        return offset;
    }

    public String getDisplayString() {
        return getDisplayString(element, presentableText);
    }

    public FileType getFileType() {
        return fileType;
    }

    public static String getDisplayString(String element, String presentableText) {
        return presentableText == null ? element : presentableText;
    }

    public static FileType convertToLookupElementFileType(OpenApiFileType type) {
        if (type == OpenApiFileType.Json) {
            return FileType.JSON;
        } else if (type == OpenApiFileType.Yaml) {
            return FileType.YAML;
        } else {
            return null;
        }
    }
}
