package com.xliic.openapi.report.tree;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.treeStructure.MouseEvent;
import com.xliic.openapi.report.tree.ui.ReportPanel;

public class ReportLeftMouseClickHandler {

    private final ReportPanel panel;

    public ReportLeftMouseClickHandler(@NotNull ReportPanel panel) {
        this.panel = panel;
    }

    public void handle(MouseEvent event) {
        DefaultMutableTreeNode thisNode = (DefaultMutableTreeNode) panel.getTree().getLastSelectedPathComponent();
        if (thisNode == null) {
            return;
        }
        Object userObject = thisNode.getUserObject();
        if (userObject instanceof ReportFileObject) {
            return;
        }
        if (userObject instanceof ReportIssueObject) {
            ReportIssueObject io = (ReportIssueObject) userObject;
            io.getNavigatable().navigate(true);
        }
    }
}
