package com.xliic.openapi.platform.tree.mouse;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.DoubleClickListener;
import com.xliic.core.ui.treeStructure.MouseEvent;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.callback.PlatformOASCallback;
import com.xliic.openapi.platform.tree.node.PlatformAudit;
import com.xliic.openapi.platform.tree.node.PlatformOAS;
import com.xliic.openapi.platform.tree.node.core.ProgressAware;
import com.xliic.openapi.platform.tree.ui.PlatformPanel;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;

public class PlatformDoubleClickListener extends DoubleClickListener {

    private final Tree tree;
    private final Project project;

    public PlatformDoubleClickListener(@NotNull PlatformPanel panel) {
        this.tree = panel.getTree();
        this.project = panel.getProject();
    }

    @Override
    protected boolean onDoubleClick(@NotNull MouseEvent mouseEvent) {
        return onDoubleClick(project, tree);
    }

    public static boolean onDoubleClick(@NotNull Project project, @NotNull Tree tree) {
        DefaultMutableTreeNode node = (DefaultMutableTreeNode) tree.getLastSelectedPathComponent();      
        if (node == null) {
            return true;
        }
        Object o = node.getUserObject();
        if (o instanceof ProgressAware) {
            ProgressAware progressAware = (ProgressAware) o;
            if (progressAware.isInProgress()) {
                return true;
            }
        }
        if (o instanceof PlatformOAS) {
            PlatformOAS oasObject = (PlatformOAS) o;
            PlatformAPIs.readApi(oasObject.getId(), true,
                    new PlatformOASCallback(project, tree, node, false, true));
            PlatformUtils.setInProgress(tree, node, true);
        } else if (o instanceof PlatformAudit) {
            PlatformAudit auditObject = (PlatformAudit) o;
            if (!auditObject.ready()) {
                return true;
            }
            PlatformAPIs.readApi(auditObject.getId(), true,
                    new PlatformOASCallback(project, tree, node, true, false));
            PlatformUtils.setInProgress(tree, node, true);
        }
        return true;
    }
}
