package com.xliic.openapi.editor;

import com.xliic.core.codeInsight.completion.CompletionResultSet;
import com.xliic.core.codeInsight.lookup.LookupElementBuilder;
import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiTargetMapping;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;
import icons.OpenApiIcons;
import org.jetbrains.annotations.NotNull;

import java.util.Map;

public class CompletionHelper {

    private final static String NUMBER_SIGN = "#";

    public static void updateResultSet(Editor editor, @NotNull CompletionResultSet resultSet) {

        Project project = editor.getProject();
        if (project == null) {
            return;
        }
        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (file == null) {
            return;
        }
        ASTService astService = ASTService.getInstance(project);
        if (!astService.isKnownOpenAPIFile(file.getPath())) {
            return;
        }
        Node root = astService.getRootNode(file);
        if (root == null) {
            return;
        }
        int offset = resultSet.geOffset();
        Node node = root.findNodeAtOffset(offset);
        if ((node == null) || !OpenApiUtils.REF.equals(node.getKey())) {
            return;
        }
        OpenApiVersion version = ASTService.getOpenAPIVersion(project, file);
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
        OpenApiFileType type = OpenApiUtils.getFileType(file);
        Map<String, String> typeTextMapping = OpenApiTargetMapping.getTargetTypeTextMapping(version);
        String typeText = typeTextMapping.get(target);

        String prefix = resultSet.getPrefixMatcher().getPrefix().toLowerCase();
        for (Node child : targetNode.getChildren()) {
            String element = NUMBER_SIGN + child.getJsonPointer();
            if (element.toLowerCase().startsWith(prefix)) {
                resultSet.addElement(LookupElementBuilder.create(element).
                        withIcon(OpenApiIcons.PropertyNode).withTypeText(typeText).
                        withInsertHandler((type == OpenApiFileType.Json) ?
                                new JsonInsertHandler() : new YamlInsertHandler()));
            }
        }
    }
}
