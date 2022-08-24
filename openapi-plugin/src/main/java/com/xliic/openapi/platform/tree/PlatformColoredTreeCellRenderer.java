package com.xliic.openapi.platform.tree;

import com.xliic.core.CommonBundle;
import com.xliic.core.icons.AllIcons;
import com.xliic.core.ui.AnimatedIcon;
import com.xliic.core.ui.ColoredTreeCellRenderer;
import com.xliic.core.ui.SimpleTextAttributes;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.platform.tree.node.*;
import com.xliic.openapi.platform.tree.node.decorator.PlatformErrorDecorator;
import com.xliic.openapi.platform.tree.node.decorator.PlatformFilterDecorator;
import com.xliic.openapi.platform.tree.node.decorator.PlatformLoadMoreDecorator;
import com.xliic.openapi.platform.tree.node.decorator.PlatformLoadingDecorator;
import icons.OpenApiIcons;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;

public class PlatformColoredTreeCellRenderer extends ColoredTreeCellRenderer {

    public PlatformColoredTreeCellRenderer() {
    }

    @Override
    public void customizeCellRenderer(@NotNull Tree jTree, Object value, boolean selected,
            boolean expanded, boolean leaf, int row, boolean hasFocus) {

        final DefaultMutableTreeNode valueDMTN = (DefaultMutableTreeNode) value;
        final Object valueObj = valueDMTN.getUserObject();

        if (valueObj instanceof PlatformLoadingDecorator) {
            append(CommonBundle.getLoadingTreeNodeText(), SimpleTextAttributes.GRAYED_ATTRIBUTES);
            setIcon(AnimatedIcon.Default.INSTANCE);
        } else if (valueObj instanceof PlatformRootCloud) {
            PlatformRootCloud rco = (PlatformRootCloud) valueObj;
            append(rco.getName(), SimpleTextAttributes.REGULAR_BOLD_ATTRIBUTES);
            setIcon(OpenApiIcons.PlatformAll);
        } else if (valueObj instanceof PlatformRootFavorite) {
            PlatformRootFavorite rfo = (PlatformRootFavorite) valueObj;
            append(rfo.getName(), SimpleTextAttributes.REGULAR_BOLD_ATTRIBUTES);
            setIcon(OpenApiIcons.PlatformFavorite);
        } else if (valueObj instanceof PlatformCollection) {
            PlatformCollection pco = (PlatformCollection) valueObj;
            append(pco.getName(), SimpleTextAttributes.REGULAR_BOLD_ATTRIBUTES);
            setIcon(pco.isLocked() ? OpenApiIcons.PlatformFolderLocked : OpenApiIcons.PlatformFolder);
        } else if (valueObj instanceof PlatformAPI) {
            PlatformAPI pao = (PlatformAPI) valueObj;
            append(pao.getName(), SimpleTextAttributes.REGULAR_BOLD_ATTRIBUTES);
            setIcon(OpenApiIcons.PlatformAPI);
        } else if (valueObj instanceof PlatformErrorDecorator) {
            PlatformErrorDecorator peo = (PlatformErrorDecorator) valueObj;
            append(peo.getName(), SimpleTextAttributes.REGULAR_BOLD_ATTRIBUTES);
            setIcon(OpenApiIcons.ReportError);
        } else if (valueObj instanceof PlatformAudit) {
            PlatformAudit pao = (PlatformAudit) valueObj;
            append(pao.getName(), SimpleTextAttributes.REGULAR_BOLD_ATTRIBUTES);
            if (pao.isInProgress()) {
                append(" " + CommonBundle.getLoadingTreeNodeText(), SimpleTextAttributes.GRAYED_ATTRIBUTES);
                setIcon(AnimatedIcon.Default.INSTANCE);
            } else if (pao.ready()) {
                setIcon(pao.isValid() ? OpenApiIcons.PlatformAuditVerified : OpenApiIcons.PlatformAuditUnverified);
            } else {
                append(" Waiting to complete...", SimpleTextAttributes.GRAYED_ATTRIBUTES);
                setIcon(pao.isValid() ? OpenApiIcons.PlatformAuditVerified : OpenApiIcons.PlatformAuditUnverified);
            }
        } else if (valueObj instanceof PlatformOAS) {
            PlatformOAS poo = (PlatformOAS) valueObj;
            append(poo.getName(), SimpleTextAttributes.REGULAR_BOLD_ATTRIBUTES);
            if (poo.isInProgress()) {
                append(" " + CommonBundle.getLoadingTreeNodeText(), SimpleTextAttributes.GRAYED_ATTRIBUTES);
                setIcon(AnimatedIcon.Default.INSTANCE);
            } else {
                setIcon(OpenApiIcons.PlatformOAS);
            }
        } else if (valueObj instanceof PlatformLoadMoreDecorator) {
            PlatformLoadMoreDecorator lmd = (PlatformLoadMoreDecorator) valueObj;
            append(lmd.getName(), SimpleTextAttributes.REGULAR_ATTRIBUTES);
            setIcon(AllIcons.Javaee.UpdateRunningApplication);
        } else if (valueObj instanceof PlatformFilterDecorator) {
            PlatformFilterDecorator fd = (PlatformFilterDecorator) valueObj;
            append(fd.getName(), SimpleTextAttributes.REGULAR_ATTRIBUTES);
            setIcon(AllIcons.General.Filter);
        }
    }
}
