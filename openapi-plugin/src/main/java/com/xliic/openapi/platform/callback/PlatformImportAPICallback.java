package com.xliic.openapi.platform.callback;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.utils.PlatformAPIUtils;

public class PlatformImportAPICallback extends SuccessBodyResponseCallback {

    private final Tree tree;
    private final String collectionId;
    private final String name;

    public PlatformImportAPICallback(@NotNull Project project, @NotNull Tree tree, @NotNull String collectionId, @NotNull String name) {
        super(project);
        this.tree = tree;
        this.collectionId = collectionId;
        this.name = name;
    }

    @Override
    public void onCode200WithBodyTextResponse(@NotNull String text) {
        Node node = OpenApiUtils.getJsonAST(text);
        if (node != null) {
            PlatformAPI api = getPlatformAPI(node, name);
            SwingUtilities.invokeLater(() -> PlatformAPIUtils.create(project, tree, collectionId, api));
        }
    }

    @NotNull
    public static PlatformAPI getPlatformAPI(@NotNull Node node, @NotNull String name) {
        Node desc = node.getChild("desc");
        String id = desc.getChild("id").getValue();
        boolean isJson = !Boolean.parseBoolean(desc.getChild("yaml").getValue());
        Node assessment = node.getChild("assessment");
        float grade;
        boolean isValid;
        if (assessment == null || assessment.getChildren().isEmpty()) {
            grade = -1.0f;
            isValid = false;
        } else {
            grade = Float.parseFloat(assessment.getChild("grade").getValue());
            isValid = Boolean.parseBoolean(assessment.getChild("isValid").getValue());
        }
        return new PlatformAPI(id, name, grade, isValid, isJson);
    }
}
