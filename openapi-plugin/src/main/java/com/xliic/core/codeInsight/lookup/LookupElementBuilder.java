package com.xliic.core.codeInsight.lookup;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.codeInsight.completion.InsertHandler;
import com.xliic.core.util.Icon;

public class LookupElementBuilder extends LookupElement {

    public LookupElementBuilder(@NotNull String lookupString) {
        super(lookupString);
    }

    public static @NotNull LookupElementBuilder create(@NotNull String lookupString) {
        return new LookupElementBuilder(lookupString);
    }

    public @NotNull LookupElementBuilder withIcon(@Nullable Icon icon) {
        this.icon = icon;
        return this;
    }

    public @NotNull LookupElementBuilder withTypeText(@Nullable String typeText) {
        this.typeText = typeText;
        return this;
    }

    public @NotNull LookupElementBuilder withInsertHandler(@Nullable InsertHandler<LookupElement> insertHandler) {
        this.insertHandler = insertHandler;
        return this;
    }

    public @NotNull LookupElementBuilder withPresentableText(@Nullable String presentableText) {
        this.presentableText = presentableText;
        return this;
    }

    public @NotNull LookupElementBuilder withFilterPrefix(@Nullable String filterPrefix) {
        this.filterPrefix = filterPrefix;
        return this;
    }

    public @NotNull LookupElementBuilder withPrefix(@Nullable String prefix) {
        this.prefix = prefix;
        return this;
    }

    public @NotNull LookupElementBuilder withOffset(int offset) {
        this.offset = offset;
        return this;
    }

    public @NotNull LookupElementBuilder withFileType(LookupElement.FileType fileType) {
        this.fileType = fileType;
        return this;
    }
}
