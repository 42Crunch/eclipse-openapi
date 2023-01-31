package com.xliic.openapi.platform.callback;

import java.util.LinkedList;
import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.utils.PlatformCollectionUtils;

public class PlatformCollectionCallback extends SuccessASTResponseWithFailureDecoratorCallback {

    public PlatformCollectionCallback(@NotNull Project project, @NotNull Tree tree, @NotNull DefaultMutableTreeNode parentDMTN) {
        super(project, tree, parentDMTN);
    }

    @Override
    public void onCode200ASTResponse(@NotNull Node node) {
        List<PlatformCollection> collections = getCollections(node);
        SwingUtilities.invokeLater(() -> PlatformCollectionUtils.addAll(project, tree, parentDMTN, collections));
    }

    public static List<PlatformCollection> getCollections(@NotNull Node node) {
        Node list = node.find("/list");
        List<PlatformCollection> collections = new LinkedList<>();
        if (list != null) {
            for (Node item : list.getChildren()) {
                String id, name;
                Node desc = item.getChild("desc");
                if (desc == null) {
                    id = item.getChild("id").getValue();
                    name = item.getChild("name").getValue();
                } else {
                    id = desc.getChild("id").getValue();
                    name = desc.getChild("name").getValue();
                }
                Node summary = item.getChild("summary");
                boolean locked = summary != null && !Boolean.parseBoolean(summary.getChild("writeApis").getValue());
                collections.add(new PlatformCollection(id, name, locked));
            }
        }
        return collections;
    }
}
