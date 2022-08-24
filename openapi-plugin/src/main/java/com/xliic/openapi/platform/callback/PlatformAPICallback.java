package com.xliic.openapi.platform.callback;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.utils.PlatformAPIUtils;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.LinkedList;
import java.util.List;

public class PlatformAPICallback extends SuccessASTResponseWithFailureDecoratorCallback {

    public PlatformAPICallback(@NotNull Project project,
            @NotNull Tree tree,
            @NotNull DefaultMutableTreeNode parentDMTN) {
        super(project, tree, parentDMTN);
    }

    @Override
    public void onCode200ASTResponse(@NotNull Node node) {
        Node list = node.find("/list");
        List<PlatformAPI> apis = new LinkedList<>();
        if (list != null) {
            for (Node item : list.getChildren()) {
                Node desc = item.getChild("desc");
                String id = desc.getChild("id").getValue();
                String name = desc.getChild("name").getValue();
                boolean isJson = !Boolean.parseBoolean(desc.getChild("yaml").getValue());
                Node assessment = item.getChild("assessment");
                float grade = Float.parseFloat(assessment.getChild("grade").getValue());
                boolean isValid = Boolean.parseBoolean(assessment.getChild("isValid").getValue());
                apis.add(new PlatformAPI(id, name, grade, isValid, isJson));
            }
        }
        SwingUtilities.invokeLater(() -> PlatformAPIUtils.addAll(project, tree, parentDMTN, apis));
    }
}
