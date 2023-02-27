package com.xliic.openapi.platform.dictionary.completion;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeInsight.completion.CompletionParameters;
import com.xliic.core.codeInsight.completion.CompletionResultSet;
import com.xliic.core.codeInsight.completion.CompletionSorter;
import com.xliic.core.codeInsight.lookup.LookupElement;
import com.xliic.core.codeInsight.lookup.LookupElementBuilder;
import com.xliic.core.project.Project;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.services.DictionaryService;
import com.xliic.openapi.utils.Utils;

import icons.OpenApiIcons;

public class DictionaryCompletionHelper {

    private static final CompletionSorter SORTER = new CompletionSorter() {
        @Override
        public int compare(LookupElement o1, LookupElement o2) {
            boolean isStandard = isStandard(o1);
            boolean isOtherStandard = isStandard(o2);
            if (isStandard) {
                if (isOtherStandard) {
                    return super.compare(o1, o2);
                } else {
                    return -1;
                }
            } else {
                if (isOtherStandard) {
                    return 1;
                } else {
                    return super.compare(o1, o2);
                }
            }
        }

        public boolean isStandard(LookupElement o) {
            return !o.getElement().equals(o.getPresentableText());
        }
    };

    public static void updateResultSet(@NotNull CompletionParameters parameters, @NotNull CompletionResultSet resultSet) {
        int offset = parameters.getOffset();
        String prefix = parameters.getPrefix();
        Project project = parameters.getProject();
        DictionaryService ddService = DictionaryService.getInstance(project);
        String filterPrefix = prefix;
        String filterStandardPrefix = prefix;
        if ("o:".equals(prefix)) {
            filterPrefix = "o";
            filterStandardPrefix = "o";
        } else if (prefix.startsWith("o:")) {
            filterStandardPrefix = prefix.replace("o:", "");
            filterPrefix = "o" + filterStandardPrefix;
        }
        OpenApiFileType type = Utils.getFileType(parameters.getFile().getPath());
        LookupElement.FileType fileType = LookupElement.convertToLookupElementFileType(type);
        for (DictionaryElement item : ddService.getAllFormats(type == OpenApiFileType.Json)) {
            LookupElementBuilder builder = LookupElementBuilder.create(item.getElement()).withPresentableText(item.getPresentableText())
                    .withIcon(OpenApiIcons.Dictionary).withTypeText(item.getWithTypeText()).withFileType(fileType).withOffset(offset)
                    .withPrefix(prefix).withFilterPrefix(item.isStandard() ? filterStandardPrefix : filterPrefix);
            resultSet.withRelevanceSorter(SORTER).addElement(builder);
        }
    }
}