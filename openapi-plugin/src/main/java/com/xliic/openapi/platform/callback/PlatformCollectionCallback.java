package com.xliic.openapi.platform.callback;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformListener;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.utils.PlatformCollectionUtils;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.LinkedList;
import java.util.List;

public class PlatformCollectionCallback extends SuccessASTResponseWithFailureDecoratorCallback {

    public PlatformCollectionCallback(@NotNull Project project,
            @NotNull Tree tree,
            @NotNull DefaultMutableTreeNode parentDMTN) {
        super(project, tree, parentDMTN);
    }

    @Override
    public void onCode200ASTResponse(@NotNull Node node) {
        Node list = node.find("/list");
        List<PlatformCollection> collections = new LinkedList<>();
        if (list != null) {
            for (Node item : list.getChildren()) {
                String id = item.getChild("desc").getChild("id").getValue();
                String name = item.getChild("desc").getChild("name").getValue();
                boolean locked = !Boolean.parseBoolean(item.getChild("summary").getChild("writeApis").getValue());
                collections.add(new PlatformCollection(id, name, locked));
            }
        }
        SwingUtilities.invokeLater(() -> {
            PlatformCollectionUtils.addAll(project, tree, parentDMTN, collections);
            project.getMessageBus().syncPublisher(PlatformListener.TOPIC).collectionsLoaded();
        });
    }
}
