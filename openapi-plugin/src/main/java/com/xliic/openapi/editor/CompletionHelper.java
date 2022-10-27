package com.xliic.openapi.editor;

import com.xliic.core.codeInsight.completion.CompletionParameters;
import com.xliic.core.codeInsight.completion.CompletionResultSet;
import com.xliic.core.codeInsight.completion.CompletionSorter;
import com.xliic.core.codeInsight.lookup.LookupElement;
import com.xliic.core.codeInsight.lookup.LookupElementBuilder;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiTargetMapping;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import icons.OpenApiIcons;
import org.jetbrains.annotations.NotNull;

import java.util.Map;

import static com.xliic.core.codeInsight.completion.CompletionProposal.NS;

public class CompletionHelper {

    private static final CompletionSorter SORTER = new CompletionSorter();

    public static void updateResultSet(@NotNull CompletionParameters parameters, @NotNull CompletionResultSet resultSet) {
        Node root = parameters.getRoot();
        Node node = parameters.getTarget();
        OpenApiVersion version = parameters.getVersion();
        Map<String, String> mapping = OpenApiTargetMapping.getTargetMapping(version);
        String target = null;
        Node parent = node.getParent();
        while (parent != null) {
            String key = parent.getKey();
            target = mapping.get(key);
            parent = parent.getParent();
            if (target != null) {
                break;
            }
        }
        if (target == null) {
            return;
        }
        Node targetNode = root.find(target);
        if ((targetNode == null) || targetNode.getChildren().isEmpty()) {
            return;
        }
        int offset = parameters.getOffset();
        String prefix = parameters.getPrefix();
        Map<String, String> typeTextMapping = OpenApiTargetMapping.getTargetTypeTextMapping(version);
        String typeText = typeTextMapping.get(target);
        OpenApiFileType type = OpenApiUtils.getFileType(parameters.getFile().getPath());
        LookupElement.FileType fileType = LookupElement.convertToLookupElementFileType(type);
        for (Node child : targetNode.getChildren()) {
            LookupElementBuilder builder = LookupElementBuilder.create(NS + child.getJsonPointer()).
                    withIcon(OpenApiIcons.PropertyNode).
                    withTypeText(typeText).
                    withFileType(fileType).
                    withOffset(offset).
                    withPrefix(prefix).
                    withFilterPrefix(prefix);
            resultSet.withRelevanceSorter(SORTER).addElement(builder);
        }
    }
}
