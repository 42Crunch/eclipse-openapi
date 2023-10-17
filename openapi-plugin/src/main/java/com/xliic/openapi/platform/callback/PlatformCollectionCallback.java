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
                String id, name, technicalName;
                Node desc = item.getChild("desc");
                if (desc == null) {
                    id = item.getChildValueRequireNonNull("id");
                    name = item.getChildValueRequireNonNull("name");
                    technicalName = item.getChildValueRequireNonNull("technicalName");
                } else {
                    id = desc.getChildValueRequireNonNull("id");
                    name = desc.getChildValueRequireNonNull("name");
                    technicalName = desc.getChildValueRequireNonNull("technicalName");
                }
                Node summary = item.getChild("summary");
                boolean locked = summary != null && !Boolean.parseBoolean(summary.getChildValueRequireNonNull("writeApis"));
                collections.add(new PlatformCollection(id, name, locked, technicalName));
            }
        }
        return collections;
    }
}
