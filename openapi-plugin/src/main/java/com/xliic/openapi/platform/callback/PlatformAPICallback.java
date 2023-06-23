package com.xliic.openapi.platform.callback;

import java.util.LinkedList;
import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.utils.PlatformAPIUtils;

public class PlatformAPICallback extends SuccessASTResponseWithFailureDecoratorCallback {

    public PlatformAPICallback(@NotNull Project project, @NotNull Tree tree, @NotNull DefaultMutableTreeNode parentDMTN) {
        super(project, tree, parentDMTN);
    }

    @Override
    public void onCode200ASTResponse(@NotNull Node node) {
        Node list = node.find("/list");
        List<PlatformAPI> apis = new LinkedList<>();
        if (list != null) {
            for (Node item : list.getChildren()) {
                Node desc = item.getChildRequireNonNull("desc");
                String id = desc.getChildValueRequireNonNull("id");
                String name = desc.getChildValueRequireNonNull("name");
                boolean isJson = !Boolean.parseBoolean(desc.getChildValueRequireNonNull("yaml"));
                Node assessment = item.getChildRequireNonNull("assessment");
                float grade = Float.parseFloat(assessment.getChildValueRequireNonNull("grade"));
                boolean isValid = Boolean.parseBoolean(assessment.getChildValueRequireNonNull("isValid"));
                apis.add(new PlatformAPI(id, name, grade, isValid, isJson));
            }
        }
        SwingUtilities.invokeLater(() -> PlatformAPIUtils.addAll(project, tree, parentDMTN, apis));
    }
}
