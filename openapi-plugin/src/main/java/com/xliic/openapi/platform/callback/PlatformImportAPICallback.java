package com.xliic.openapi.platform.callback;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.utils.PlatformAPIUtils;
import com.xliic.openapi.utils.Utils;

public class PlatformImportAPICallback extends SuccessBodyResponseCallback {

    @NotNull
    private final Tree tree;
    @NotNull
    private final String collectionId;
    @NotNull
    private final String name;
    @NotNull
    private final DefaultMutableTreeNode subRootDn;

    public PlatformImportAPICallback(@NotNull Project project,
                                     @NotNull Tree tree,
                                     @NotNull String collectionId,
                                     @NotNull String name,
                                     @NotNull DefaultMutableTreeNode subRootDn) {
        super(project);
        this.tree = tree;
        this.collectionId = collectionId;
        this.name = name;
        this.subRootDn = subRootDn;
    }

    @Override
    public void onCode200WithBodyTextResponse(@NotNull String text) {
        Node node = Utils.getJsonAST(text);
        if (node != null) {
            PlatformAPI api = getPlatformAPI(node, name);
            SwingUtilities.invokeLater(() -> PlatformAPIUtils.create(project, tree, collectionId, api, subRootDn));
        }
    }

    @NotNull
    public static PlatformAPI getPlatformAPI(@NotNull Node node, @NotNull String name) {
        Node desc = node.getChildRequireNonNull("desc");
        String id = desc.getChildValueRequireNonNull("id");
        String technicalName = desc.getChildValueRequireNonNull("technicalName");
        boolean isJson = !Boolean.parseBoolean(desc.getChildValueRequireNonNull("yaml"));
        Node assessment = node.getChild("assessment");
        float grade;
        boolean isValid;
        if (assessment == null || assessment.getChildren().isEmpty()) {
            grade = -1.0f;
            isValid = false;
        } else {
            grade = Float.parseFloat(assessment.getChildValueRequireNonNull("grade"));
            isValid = Boolean.parseBoolean(assessment.getChildValueRequireNonNull("isValid"));
        }
        return new PlatformAPI(id, name, grade, isValid, isJson, technicalName);
    }
}