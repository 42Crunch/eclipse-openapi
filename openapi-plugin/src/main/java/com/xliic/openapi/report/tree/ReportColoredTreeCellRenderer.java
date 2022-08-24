package com.xliic.openapi.report.tree;

import com.xliic.core.icons.AllIcons;
import com.xliic.core.project.Project;
import com.xliic.core.ui.ColoredTreeCellRenderer;
import com.xliic.core.ui.SimpleTextAttributes;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.report.Severity;
import icons.OpenApiIcons;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;

public class ReportColoredTreeCellRenderer extends ColoredTreeCellRenderer {

    private final String projectPath;

    public ReportColoredTreeCellRenderer(Project project) {
        projectPath = project.getBasePath();
    }

    @Override
    public void customizeCellRenderer(@NotNull Tree jTree, Object value, boolean selected,
            boolean expanded, boolean leaf, int row, boolean hasFocus) {

        final DefaultMutableTreeNode treeNode = (DefaultMutableTreeNode) value;

        final Object userObject = treeNode.getUserObject();
        if (userObject == null) {
            return;
        }

        if (userObject instanceof ReportFileObject) {
            ReportFileObject fo = (ReportFileObject) userObject;
            String shortName = fo.getShortFileName(projectPath);
            String numberOfIssues = " [" + treeNode.getChildCount() + "]";
            append(shortName, SimpleTextAttributes.REGULAR_BOLD_ATTRIBUTES);
            append(numberOfIssues, SimpleTextAttributes.REGULAR_BOLD_ATTRIBUTES);
            setIcon(fo.isRemote() ? OpenApiIcons.ExtRef : AllIcons.FileTypes.Any_type);
            return;
        }

        if (userObject instanceof ReportIssueObject) {
            ReportIssueObject io = (ReportIssueObject) userObject;
            append(io.getLabel(), SimpleTextAttributes.REGULAR_ATTRIBUTES);
            append(io.getLabelLocation(), SimpleTextAttributes.GRAY_ITALIC_ATTRIBUTES);
            if (io.getSeverity() == Severity.CRITICAL || io.getSeverity() == Severity.HIGH) {
                setIcon(OpenApiIcons.ReportError);
            } else if (io.getSeverity() == Severity.MEDIUM) {
                setIcon(OpenApiIcons.ReportWarning);
            } else {
                setIcon(OpenApiIcons.ReportInfo);
            }
        }
    }
}
